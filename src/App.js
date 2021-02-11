import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './containers/itemDetailContainer';

function App() {
  return (
      <>
      <Container maxWidth="fixed">
      <CssBaseline />
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
        </Container>
      </>
  );
}

export default App;
