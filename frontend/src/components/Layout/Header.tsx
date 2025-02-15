import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // Get the user's login status

  const handleSellCarClick = () => {
    if (isLoggedIn) {
      navigate('/car-listing'); // Redirect to CarListing if logged in
    } else {
      navigate('/login'); // Redirect to Login if not logged in
    }
  };

  return (
    <header className="bg-primary text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            AutoTradeHouse
          </Link>
          <nav className="hidden md:flex space-x-4">
            {/* Navigation links */}
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleSellCarClick}
              className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition font-semibold"
            >
              Sell Your Car
            </button>
            <Link
              to="/login"
              className="bg-secondary px-4 py-2 rounded hover:bg-opacity-90 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;