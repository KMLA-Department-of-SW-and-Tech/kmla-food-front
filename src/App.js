import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ImageUpload from "./pages/ImageUpload";

import MainPage from "./pages/MainPage";

import './styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<MainPage />}/>
        <Route path="/admin" element = {<ImageUpload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
