import logo from './logo.svg';
import './App.css';
import Products from "./Products";
import Sort from "./Sort"
import Filter from "./Filter"
function App() {
  return (
    <div className="App">
     <Products/>
     <Sort/>
     <Filter/>
    </div>
  );
}

export default App;
