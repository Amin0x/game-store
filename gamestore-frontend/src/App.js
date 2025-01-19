import React from "react";
import './App.css';
import Footer from './comp/footer';
import Header from './comp/Header';
import IndexPage from './pages';
import ProductPage from './pages/product';
import { BrowserRouter, Routes, Route } from 'react-router';
import Menu from "./comp/menu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CreateProductPage from "./admin/CreateProductPage";
import CheckoutPage from "./pages/checkout";
import CategoryPage from "./pages/category";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/admin/product/create" element={<CreateProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
