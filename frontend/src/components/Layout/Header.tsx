import { Link } from 'react-router-dom';
import { FaCar, FaTruck } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import { RiMotorbikeFill } from 'react-icons/ri';
import { BiSolidShip } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            AutoTradeHouse
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link 
              to="/used-cars" 
              className="flex items-center px-4 py-2 rounded hover:bg-white/10 transition"
            >
              <FaCar className="text-xl mr-2" />
              <span>Used Cars</span>
            </Link>
            <Link 
              to="/new-cars" 
              className="flex items-center px-4 py-2 rounded hover:bg-white/10 transition"
            >
              <AiFillCar className="text-xl mr-2" />
              <span>New Cars</span>
            </Link>
            <Link 
              to="/commercial" 
              className="flex items-center px-4 py-2 rounded hover:bg-white/10 transition"
            >
              <FaTruck className="text-xl mr-2" />
              <span>Commercial</span>
            </Link>
            <Link 
              to="/motorcycles" 
              className="flex items-center px-4 py-2 rounded hover:bg-white/10 transition"
            >
              <RiMotorbikeFill className="text-xl mr-2" />
              <span>Motorcycles</span>
            </Link>
            <Link 
              to="/water-vessels" 
              className="flex items-center px-4 py-2 rounded hover:bg-white/10 transition"
            >
              <BiSolidShip className="text-xl mr-2" />
              <span>Water Vessels</span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link 
              to="/sell" 
              className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition font-semibold"
            >
              Sell Your Car
            </Link>
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