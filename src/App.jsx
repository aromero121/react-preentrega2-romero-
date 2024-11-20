

import ItemListContainer from './components/ItemListContainer';

import Layout from './components/Layout';
import Productos from './components/Productos';
import Nopage from './components/Nopage';
import Home from './components/Home';
import ProductoDetalle from './components/ProductoDetalle';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from '../../pre-entrega1-romero/src/components/NavBar';
import CartWidget from './components/CartWidget';



function App() {
  
  return (
    <>
      
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='/productos' element={<Productos/>}/>
                <Route path='/productos/:idProducto' element={<ProductoDetalle/>}/>
                <Route path='*' element={<Nopage/>}/>
            </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

