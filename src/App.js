import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import{ Navbar} from "./Components/navbar"
import {Shop} from './Pages/Shop/shop.jsx'
import {Cart} from './Pages/cart/cart.jsx'
import { ShopContextProvider } from './context/shop-context.jsx';
import { CheckOut } from './Pages/CheckOut/CheckOut.jsx';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<CheckOut/>}></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
