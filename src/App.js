import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./component/Products";
import Login from "./component/Login";
import Register from "./component/Register";
import About from "./component/About";
import Contact from "./component/Contact";
import ProductDetail from "./component/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:productId' element={<ProductDetail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/login' element={<Register />}></Route>
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
