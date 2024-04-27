import "./App.css";
import { BrowserRouter as Rowter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Shop } from "./Pages/Shop/Shop";
import { ShopCategory } from "./Pages/ShopCategory/ShopCategory";
import { Footer } from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart" 

function App() {
  return (
    <div className="App">
      <Rowter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory  banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory  banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory  banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          {/* <Route path='/login' element={<LoginSingup/>}></Route> */}
        </Routes>
        <Footer />
      </Rowter>
    </div>
  );
}

export default App;