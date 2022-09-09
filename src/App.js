import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  const pattern = "/images/Backgrounds/coffee-pattern.jpg";

  return (
    <>
      <div className = "body">
        <NavBar />
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
