import { Link } from 'react-router-dom';
import { FaCar, FaTools, FaMoneyBillWave, FaBook } from 'react-icons/fa';
import { BiCar } from 'react-icons/bi';
import { GiAutoRepair } from 'react-icons/gi';

// Add this mock data at the top of the file
const featuredCars = [
  { id: 1, title: 'Tesla Model 3', price: '$35,000', image: 'https://placehold.co/300x200' },
  { id: 2, title: 'BMW M3', price: '$45,000', image: 'https://placehold.co/300x200' },
  { id: 3, title: 'Mercedes C-Class', price: '$42,000', image: 'https://placehold.co/300x200' },
  { id: 4, title: 'Audi A4', price: '$39,000', image: 'https://placehold.co/300x200' },
  { id: 5, title: 'Toyota Camry', price: '$25,000', image: 'https://placehold.co/300x200' },
  { id: 6, title: 'Honda Accord', price: '$27,000', image: 'https://placehold.co/300x200' },
  { id: 7, title: 'Lexus ES', price: '$40,000', image: 'https://placehold.co/300x200' },
  { id: 8, title: 'Ford Mustang', price: '$38,000', image: 'https://placehold.co/300x200' },
  { id: 9, title: 'Chevrolet Camaro', price: '$35,000', image: 'https://placehold.co/300x200' },
  { id: 10, title: 'Porsche 911', price: '$95,000', image: 'https://placehold.co/300x200' },
  { id: 11, title: 'Dodge Challenger', price: '$32,000', image: 'https://placehold.co/300x200' },
  { id: 12, title: 'Nissan GT-R', price: '$85,000', image: 'https://placehold.co/300x200' },
];

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Find Your Perfect Car
            </h1>
            <p className="text-xl mb-8">
              Browse thousands of cars or sell your vehicle with ease
            </p>
            {/* Submenu */}
            <div className="flex flex-wrap gap-3 text-sm">
              <Link 
                to="/vehicles" 
                className="flex items-center bg-white/10 px-3 py-1.5 rounded hover:bg-white/20 transition"
              >
                <FaCar className="mr-1.5 text-base" />
                Cars and Trucks
              </Link>
              <Link 
                to="/parts" 
                className="flex items-center bg-white/10 px-3 py-1.5 rounded hover:bg-white/20 transition"
              >
                <BiCar className="mr-1.5 text-base" />
                Auto Parts
              </Link>
              <Link 
                to="/services" 
                className="flex items-center bg-white/10 px-3 py-1.5 rounded hover:bg-white/20 transition"
              >
                <GiAutoRepair className="mr-1.5 text-base" />
                Repair and Services
              </Link>
              <Link 
                to="/rent" 
                className="flex items-center bg-white/10 px-3 py-1.5 rounded hover:bg-white/20 transition"
              >
                <FaTools className="mr-1.5 text-base" />
                Rent
              </Link>
              <Link 
                to="/financing" 
                className="flex items-center bg-white/10 px-3 py-1.5 rounded hover:bg-white/20 transition"
              >
                <FaMoneyBillWave className="mr-1.5 text-base" />
                Financing
              </Link>
              <Link 
                to="/blog" 
                className="flex items-center bg-white/10 px-3 py-1.5 rounded hover:bg-white/20 transition"
              >
                <FaBook className="mr-1.5 text-base" />
                Reading Room
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 -mt-20">
          <h2 className="text-2xl font-bold mb-4">Quick Search</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="border p-2 rounded">
              <option>Select Make</option>
              {/* Add car makes */}
            </select>
            <select className="border p-2 rounded">
              <option>Select Model</option>
              {/* Add car models */}
            </select>
            <select className="border p-2 rounded">
              <option>Price Range</option>
              {/* Add price ranges */}
            </select>
            <button className="bg-primary text-white p-2 rounded hover:bg-opacity-90 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Cars Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img 
                src={car.image} 
                alt={car.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{car.title}</h3>
                <p className="text-primary font-bold">{car.price}</p>
                <Link 
                  to={`/cars/${car.id}`}
                  className="mt-3 inline-block bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;