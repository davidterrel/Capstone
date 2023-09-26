import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Shop from './Shop'
import Contact from './Contact';
import Cart from './Cart';
import ShopContextProvider from './assets/shop-context';
import { AuthProvider } from './AuthContext';


function App() {

  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  )
}

export default App
