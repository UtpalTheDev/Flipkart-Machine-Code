import logo from './logo.svg';
import './App.css';
import Products from "./pages/Products";
import Sort from "./component/Sort"
import Filter from "./component/Filter"
import {Routes,Route,Link} from "react-router-dom";
import Cart from "./pages/Cart"
import {useReduce} from "./Reducer-context"
function App() {
  const {cart}=useReduce()
  return (
    <div className="App">
     
     <navbar className="flex w-full justify-end">
     
     <div className="m-1 px-2"><Link to="/" >Products</Link></div>  
     <div className="m-1 px-2"><Link to="cart">Cart
     { cart.length>0 && <button className="bg-black text-white rounded-md px-2 mx-1 text-sm">{cart.reduce((acc,cur)=>{
       return acc=acc+cur.qty
     },0)}</button>}
     </Link></div>
     
    </navbar>
     <Routes>
       <Route path="/" element={<Products/>}/>
       <Route path="/cart" element={<Cart/>} />
     </Routes>
     </div>
     
    
  );
}

export default App;
