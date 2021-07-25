import logo from './logo.svg';
import './App.css';
import Products from "./Products";
import Sort from "./Sort"
import Filter from "./Filter"
function App() {
  return (
    <div className="App flex">
     <div className="w-48 position-sticky top-0 h-screen">
       <Sort/>
       <Filter/>
     </div>
     <div className="flex-grow">
     <Products/>
     </div>
     
    </div>
  );
}

export default App;
