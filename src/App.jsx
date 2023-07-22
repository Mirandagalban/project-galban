
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='app'>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"} title={"Te invito a descubrir la belleza del arte Amigurumi"}></ItemListContainer>
    </div>
  )
}

export default App
