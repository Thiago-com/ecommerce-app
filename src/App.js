import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import SignUp from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsofService from './pages/TermsofService';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="product" element={<OurStore />}/>
            <Route path="product/:id" element={<SingleProduct />}/>
            <Route path="news" element={<Blog />}/>
            <Route path="blog/:id" element={<SingleBlog />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="checkout" element={<Checkout />}/>
            <Route path="compare-product" element={<CompareProduct />}/>
            <Route path="wishlist" element={<WishList />}/>
            <Route path="login" element={<Login />}/>
            <Route path="forgot-password" element={<Forgotpassword />}/>
            <Route path="signup" element={<SignUp />}/>
            <Route path="reset-password" element={<ResetPassword />}/>
            <Route path="privacy-policy" element={<PrivacyPolicy />}/>
            <Route path="refund-policy" element={<RefundPolicy />}/>
            <Route path="terms-of-service" element={<TermsofService />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
