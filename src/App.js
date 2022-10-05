
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Index from './components/home/Index';
import ItemDetail from './components/shop/ItemDetail';
import ItemListContainer from './components/shop/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";



function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Index/>}/>
        <Route path={"/category/futbol"} element={<ItemListContainer/>}/>
        <Route path={"/category/nba"} element={<ItemListContainer/>}/>
        <Route path={"/category/item/:id"} element={<ItemDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
     
  
  );
}

export default App;
