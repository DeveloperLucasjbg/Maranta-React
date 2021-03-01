import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/itemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContext from "./context/CartContextProvider";
import Cart from "./components/Cart/";

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar />
        <Switch>
          
          <Route exact path="/" children={<ItemListContainer />} />
          <Route exact path="/category" children={<ItemDetailContainer />} />
          <Route
            exact
            path="/category/:id"
            children={<ItemDetailContainer />}
          />
          <Route exact path="/item/:id" children={<ItemDetailContainer />} />
          <Route exact path="/cart" children={<Cart />} />
          <Route path="*" children={<div>404</div>} />
        </Switch>
      </CartContext>
    </BrowserRouter>
  );
}
export default App;
