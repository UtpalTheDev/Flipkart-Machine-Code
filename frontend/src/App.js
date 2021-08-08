import logo from './logo.svg';
import './App.css';
import Products from "./pages/Products";
import {Routes,Route,Link} from "react-router-dom";
import Cart from "./pages/Cart"
import {useReduce} from "./Reducer-context"
import Saveforlater from './pages/saveForLater';
function App() {
  const {cart,saveLater}=useReduce()
  return (
    <div className="App">
     
     <navbar className="flex w-full justify-end">
     
     <div className="m-1 px-2"><Link to="/" >Products</Link></div>  
     <div className="m-1 px-2"><Link to="cart">Cart
     { cart.length>0 && <button className="bg-black text-white rounded-md px-2 mx-1 text-sm">{cart.reduce((acc,cur)=>{
       return acc=acc+cur.qty
     },0)}</button>}
     </Link></div>
     <div className="m-1 px-2"><Link to="saveforlater">SaveForLater
     { saveLater.length>0 && <button className="bg-black text-white rounded-md px-2 mx-1 text-sm">{saveLater.length}</button>}
     </Link></div>
     
    </navbar>
     <Routes>
       <Route path="/" element={<Products/>}/>
       <Route path="/cart" element={<Cart/>} />
       <Route path="/saveforlater" element={<Saveforlater/>}/>
     </Routes>
     </div>
     
    
  );
}

export default App;
