import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="Container">
      <NavBar/>
      <ItemListContainer greeting={'Saludos'}/>
      
    </div>
  );
}

export default App;
