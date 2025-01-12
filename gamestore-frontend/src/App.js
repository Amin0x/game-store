import React from "react";
import './App.css';
import Footer from './comp/footer';
import Header from './comp/header';
import IndexPage from './pages';
import ProductPage from './pages/product';
import { BrowserRouter, Routes, Route } from 'react-router';
import Menu from "./comp/menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
