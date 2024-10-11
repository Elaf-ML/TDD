// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Profile from './pages/Profile.tsx';
import Categories from './pages/Categories.tsx';
import Item from './pages/Item.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />  {/* Profile Route */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/item/:itemId" element={<Item />} />
      </Routes>
    </Router>
  );
};

export default App;
