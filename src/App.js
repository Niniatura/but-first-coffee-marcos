import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <div className = "body">
        <NavBar />
        <ItemDetailContainer />
        {/* <ItemListContainer /> */}
      </div>
    </>
  );
}

export default App;
