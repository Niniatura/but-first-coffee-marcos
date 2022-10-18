import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/cartContext';
import CartView from './components/CartView/CartView';

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <div className = "body">
            <NavBar />
            <Routes>
              <Route path='/' element={ <ItemListContainer /> } />
              <Route path='/detalle/:id' element={ <ItemDetailContainer /> } />
              <Route path='/categoria/:cat' element={ <ItemListContainer /> }/>
              <Route path='/cart' element={ <CartView /> }/>
            </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
