import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Shop from './Shop'
import Contact from './Contact';
import Cart from './Cart';
import ShopContextProvider from './context/ShopContext';
// import { AuthProvider } from './AuthContext';
import ProductContextProvider from './context/ProductContext';


function App() {

  return (
    <>
      <ProductContextProvider>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </ProductContextProvider>
    </>
  )
}

export default App
