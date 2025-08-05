// import { useState } from 'react'
import './App.css'
import Header from './Layouts/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './Pages/Services';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/services" element={<Services />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
