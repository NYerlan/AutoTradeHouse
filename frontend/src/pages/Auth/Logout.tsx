import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
        await axios.post('http://localhost:8000/api/logout/', {}, { withCredentials: true });
        navigate('/login'); // Redirect to login page
    } catch (error) {
        console.error('Logout error:', error);
    }
};

  return (
    <button onClick={handleLogout} className="text-white hover:underline">
      Logout
    </button>
  );
};

export default Logout;
