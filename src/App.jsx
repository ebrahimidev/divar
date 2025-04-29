import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import NotFoundPage from './components/layout/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App