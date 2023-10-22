import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes } from 'react-router-dom';
import {Route} from 'react-router';
import Home from './Components/Home';
import About from './Components/About';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactPage from './Components/ContactPage';
import Register from './Components/Register';
import Login from './Components/Login';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Product1 from './Components/Product1';
import PageNotFound from './Components/PageNotFound';
import Product2 from './Components/Product2';

function App() {
  return (
    <div className="App">
   
      <BrowserRouter >
      <Provider store={store} >
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/register"element={<Register/>}></Route>
        <Route path="/login"element={<Login/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product" element={<Product1></Product1>}></Route>
        <Route path="/product/:id" element={<Product2/>}></Route>
        <Route path="/product/*" element={<PageNotFound />}/>
      </Routes>
      
      </Provider>
      </BrowserRouter>
    </div>
  );
}


export default App;