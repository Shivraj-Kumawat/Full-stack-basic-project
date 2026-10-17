import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreatePost from './pages/CreatePost.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create-post" element={<CreatePost/>} />
        <Route path="/about" element={<h1>About Us</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
