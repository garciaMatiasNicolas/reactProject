import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Index from './components/home/Index';
import ItemDetail from './components/shop/ItemDetail';
import ItemListContainer from './components/shop/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { CartProvider } from './context/Context';
import Cart from './components/shop/Cart';
import Order from './components/shop/Order';
import DataBuyer from './components/shop/DataBuyer';

function App() {

  return (
    <div className='body'>
    <CartProvider>
      <BrowserRouter>
            <Header/>
            <Routes>
              <Route path={'/'} element={<Index/>}/>
              <Route path={'/cart'} element={<Cart/>}/>
              <Route path={'/cart/personal-data'} element={<DataBuyer/>}/>
              <Route path={'/cart/order'} element={<Order/>}/>
              <Route path={"/category/:category"} element={<ItemListContainer/>}/>
              <Route path={"/item/:id"} element={<ItemDetail/>}/>
            </Routes>
      </BrowserRouter>  
    </CartProvider>
    </div>
  );
}

export default App;
