import logo from './logo.svg';
import './App.css';
import Products from "./Products";
import Sort from "./Sort"
import Filter from "./Filter"
import {Routes,Route} from "react-router-dom";
import Cart from "./Cart"

function App() {
  return (
    <div className="App flex">
     <div className="w-48 position-sticky top-0 h-screen">
       <Sort/>
       <Filter/>
     </div>
     <div className="flex-grow">
     
     <Routes>
       <Route path="/" element={<Products/>}/>
       <Route path="/cart" element={<Cart/>} />
     </Routes>
     </div>
     
    </div>
  );
}

export default App;
