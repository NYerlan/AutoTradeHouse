import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Clear authentication state
    navigate('/login'); // Redirect to login page
  };

  return (
    <button onClick={handleLogout} className="text-white hover:underline">
      Logout
    </button>
  );
};

export default Logout;
