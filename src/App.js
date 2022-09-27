import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className = "body">
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/detalle/:id' element={ <ItemDetailContainer /> } />
            <Route path='/categoria/:cat' element={ <ItemListContainer /> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
