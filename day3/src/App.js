import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer';
import PaymentPage from './components/pages/PaymentPage';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ForgetPasswordPage from './components/pages/ForgetPasswordPage';
import HomePage from './components/pages/HomePage';
import BookingPage from './components/pages/BookingPage'; // Import BookingPage
import AdminLoginPage from './components/pages/AdminLoginPage'; // Import AdminLoginPage


import './App.css';

function App() {
    const location = useLocation();
    const hideNavbarRoutes = ['/', '/login', '/register']; // Paths where Navbar should be hidden
    const hideFooterRoutes = ['/', '/payment']; // Paths where Footer should be hidden (Landing Page and Payment Page)

    return (
        <div className="app-container">
            {!hideNavbarRoutes.includes(location.pathname) && <Navbar />} {/* Conditionally render Navbar */}
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forget-password" element={<ForgetPasswordPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/booking/:hallId" element={<BookingPage />} /> {/* Route for BookingPage */}
                    <Route path="/admin-login" element={<AdminLoginPage />} /> {/* Add admin login route */}
                    <Route path="/payment" element={<PaymentPage />} /> {/* Route for PaymentPage */}
                </Routes>
            </div>
            {/* Conditionally render Footer */}
            {!hideFooterRoutes.includes(location.pathname) && <Footer />}
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
