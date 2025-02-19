import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Account: React.FC = () => {
    const [userData, setUserData] = useState<any>(null);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/account/', {
                    withCredentials: true, // Include credentials in the request
                });
                setUserData(response.data);
            } catch (error) {
                setError('Failed to fetch user data.');
                console.error('Error fetching user data:', error);
                if (error.response && error.response.status === 403) {
                    navigate('/login'); // Redirect to login if forbidden
                }
            }
        };
    
        fetchUserData();
    }, [navigate]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Account Page</h2>
                <p>Username: {userData.username}</p>
                <p>Email: {userData.email}</p>
                <p>Account Balance: ${userData.balance}</p>
                <h3 className="mt-4 font-semibold">Your Listings:</h3>
                <ul>
                    {userData.listings.map((listing: any) => (
                        <li key={listing.id}>{listing.title}</li>
                    ))}
                </ul>
                <h3 className="mt-4 font-semibold">Messages:</h3>
                <ul>
                    {userData.messages.map((message: any) => (
                        <li key={message.id}>{message.content}</li>
                    ))}
                </ul>
                <div className="mt-4 flex justify-between">
                    <button onClick={() => navigate('/sell')} className="bg-primary text-white px-4 py-2 rounded">
                        Sell Your Car
                    </button>
                    <button onClick={() => navigate('/add-funds')} className="bg-secondary text-white px-4 py-2 rounded">
                        Add Funds
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;