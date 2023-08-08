
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className='app'>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"} title={"Te invito a descubrir la belleza del arte Amigurumi"}></ItemListContainer>
      <ItemDetailContainer/>
    </div>
  )
}

export default App
