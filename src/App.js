import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/itemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContext from "./context/CartContextProvider";
import DataBaseContext from "./context/DataBaseContextProvider";
import Cart from "./components/Cart/";
import ItemInWidgetContainer from "./containers/ItemInWidgetContainer";

  
function App() {
  return (
    <BrowserRouter>
      <DataBaseContext>
        <CartContext>
          <NavBar />
          <ItemInWidgetContainer/>
          <Switch>
            <Route exact path="/" children={<ItemListContainer />} />
            <Route exact path="/category"/>
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
      </DataBaseContext>
    </BrowserRouter>
  );
}
export default App;
