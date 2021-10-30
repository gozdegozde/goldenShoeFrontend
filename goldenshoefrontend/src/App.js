import logo from './logo.svg';
import HomePage from "./pages/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ContactPage from "./pages/ContactPage";
import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
    <NavBar />
    <Switch>
        <Route path="/contact" component={ContactPage} />
        <Route path="/cart" component={ShoppingCartPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      </div>
  );
}

export default App;
