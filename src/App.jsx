
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenidos"} title={"Te invito a descubrir la belleza del arte Amigurumi"}></ItemListContainer>}/>
        <Route path='/categoria/:categoriaId' element= {<ItemListContainer greeting='Todos nuestros productos son artesanales :)' title='Pedi el tuyo a medida' />}></Route>
        <Route path='/item/:id' element= { <ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
