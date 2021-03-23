import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/itemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContext from "./context/CartContextProvider";
import UserContextProvider from "./context/UserContextProvider";
import DataBaseContext from "./context/DataBaseContextProvider";
import CartContainer from "./containers/CartContainer";
import ItemInWidgetContainer from "./containers/ItemInWidgetContainer";
import CategorysContainer from "./containers/CategorysContainer";
import Category from "./components/Category";
import AcountOptions from "./components/AcountOptions"

function App() {

    return (
    <BrowserRouter>
      <DataBaseContext>
          <CartContext>
        <UserContextProvider>
            <NavBar />
            <ItemInWidgetContainer />
            <AcountOptions />
            <Switch>
              <Route exact path="/" children={<ItemListContainer />} />
              <Route
                exact
                path="/category/:id"
                children={<ItemDetailContainer />}
              />
              <Route
                exact
                path="/categorias/"
                children={<CategorysContainer />}
              />
              <Route exact path="/categorias/:id" children={<Category />} />
              <Route exact path="/cart" children={<CartContainer />} />
              <Route path="*" children={<div>404</div>} />
            </Switch>
        </UserContextProvider>
          </CartContext>
      </DataBaseContext>
    </BrowserRouter>
  );
}
export default App;
