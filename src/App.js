import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/cart/CartPage";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
         <Route exact path="/products" Component={Home} /> 
         <Route path="/cart" Component={CartPage} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
