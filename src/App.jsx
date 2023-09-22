import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Shop from './Shop'
import Cart from './Cart'
import ShopContextProvider from './assets/shop-context';


function App() {

  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
