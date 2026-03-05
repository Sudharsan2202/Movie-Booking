import React from 'react'
import Home from './pages/Home';
import ListMovies from './pages/ListMovies';
import Dashboard from './pages/Dashboard';
import BookingsPage from './pages/BookingsPage';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listmovies" element={<ListMovies />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<BookingsPage />} />
      </Routes>
  );
}