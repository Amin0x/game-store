import React from "react";
import IndexPage from './pages';
import ProductPage from './pages/ProductPage';
import BestSalePage from './pages/BestSalePage'
import { BrowserRouter, Routes, Route } from 'react-router';
import CreateProductPage from "./admin/CreateProductPage";
import CheckoutPage from "./pages/checkout";
import CategoryPage from "./pages/category";
import ProductViewPage from "./pages/ProductViewPage.js";
import Error404 from "./pages/error404.js";
import ListProductPage from "./admin/ListProductPage.js";
import ListCategoryPage from "./admin/ListCategoryPage.js";
import EditCategory from "./admin/EditCategory.js";
import CreateCategoryPage from "./admin/CreateCategoryPage.js";
import CreateBrand from "./admin/CreateBrand.js";
import EditProductPage from "./admin/EditProductPage.js";
import EditBrand from "./admin/EditBrand.js";
import ListBrand from "./admin/ListBrand.js";
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/bestsale" element={<BestSalePage />} />
          <Route path="/admin/products/add" element={<CreateProductPage />} />
          <Route path="/admin/products" element={<ListProductPage />} />
          <Route path="/admin/products/edit/:id" element={<EditProductPage />} />
          <Route path="/admin/category/create" element={<CreateCategoryPage />} />
          <Route path="/admin/category" element={<ListCategoryPage />} />
          <Route path="/admin/category/edit/:id" element={<EditCategory />} />
          <Route path="/admin/brands/create" element={<CreateBrand />} />
          <Route path="/admin/brands/edit/:id" element={<EditBrand />} />
          <Route path="/admin/brands" element={<ListBrand />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/item/:slug" element={<ProductViewPage/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
     
    </div >
  );
}

export default App;
