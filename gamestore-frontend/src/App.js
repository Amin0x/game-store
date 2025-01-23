import React from "react";
import './App.css';
import './Style.css'
import Footer from './comp/footer';
import Header from './comp/Header';
import IndexPage from './pages';
import ProductPage from './pages/ProductPage';
import BestSalePage from './pages/BestSalePage'
import { BrowserRouter, Routes, Route } from 'react-router';
import CreateProductPage from "./admin/CreateProductPage";
import CheckoutPage from "./pages/checkout";
import CategoryPage from "./pages/category";
import ProductViewPage from "./pages/ProductViewPage.js";
import Error404 from "./pages/error404.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/bestsale" element={<BestSalePage />} />
          <Route path="/admin/products/create" element={<CreateProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/item/:slug" element={<ProductViewPage/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
