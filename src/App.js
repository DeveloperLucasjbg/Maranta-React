import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer';

import ItemDetailContainer from './containers/itemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Switch>
            <Route exact path='/' children={ <ItemListContainer/> } />   
            <Route exact path='/category' children={ <ItemDetailContainer/>}/>
            <Route exact path='/category/:id'  children={<ItemDetailContainer/>}/>
            <Route exact path='/item/:id' children={ <ItemDetailContainer/>}/>  
            <Route path='*' children={<div>404</div>} />
        </Switch>
        </BrowserRouter>
  );
}

export default App;
