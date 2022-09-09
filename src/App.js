import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-300">
      <NavBar />
      <ItemListContainer />
    </div>
    </>
  );
}

export default App;
