import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ImageUpload from "./pages/ImageUpload";
import MainPage from "./pages/MainPage";
import Login from './pages/Login';
import Register from './pages/Register';  

import "./styles.css";

const App = () => {
  const localToken = localStorage.getItem("token");
  const sessionToken = sessionStorage.getItem("token");
  if (!localToken && !sessionToken) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<MainPage />} />
          <Route path="/admin" element={<Login />} />
          <Route path="*" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<ImageUpload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
