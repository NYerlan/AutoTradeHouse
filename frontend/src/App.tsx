import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './pages/Home';
// import CarListing from './pages/CarListing';
// import CarDetails from './pages/CarDetails';
// import SellCar from './pages/SellCar';
// import Login from './pages/Auth/Login';
// import Register from './pages/Auth/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-16"> {/* Add padding-top to account for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/cars" element={<CarListing />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/sell" element={<SellCar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;