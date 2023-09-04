
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';



function App() {

 /* //como filtrar algo particular
  const query= query (collection (db, 'productos'), where("precio", '>', 50))

  useEffect(()=> {
    const coleccionRef = collection(db, "productos");
    getDocs(coleccionRef).then(snapshot=> {
    console.log (snapshot);
    snapshot.forEach((doc)=> console.log (doc.data()))
    })
    .catch ((error)=> console.log (error));
  },[])*/

  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenidos"} title={"Te invito a descubrir la belleza del arte Amigurumi"}></ItemListContainer>}/>
        <Route path='/categoria/:categoriaId' element= {<ItemListContainer greeting='Todos nuestros productos son artesanales :)' title='Pedi el tuyo a medida' />}></Route>
        <Route path='/item/:id' element= { <ItemDetailContainer/>}/>
        <Route path='/cart' element= {<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
