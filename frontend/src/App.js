import logo from './logo.svg';
import './App.css';
import Products from "./Products";
import Sort from "./Sort"
import Filter from "./Filter"
import {Routes,Route,Link} from "react-router-dom";
import Cart from "./Cart"

function App() {
  return (
    <div className="App">
     
     <navbar className="flex w-full justify-end">
     
     <div className="m-1 px-2"><Link to="/" >Products</Link></div>  
     <div className="m-1 px-2"><Link to="cart">Cart</Link></div>
     
    </navbar>
     <Routes>
       <Route path="/" element={<Products/>}/>
       <Route path="/cart" element={<Cart/>} />
     </Routes>
     </div>
     
    
  );
}

export default App;
