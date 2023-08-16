import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Card from "./Components/card";
import Header from "./Components/header";
import Footer from "./Components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/card" element={<Card />} /> 
<Route path="/" element={<Header/>} />
<Route path="/" element={<Footer/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
