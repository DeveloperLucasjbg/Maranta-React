import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
      <>
      <Container maxWidth="fixed">
      <CssBaseline />
        <NavBar/>
        <ItemListContainer/>
        </Container>
      </>
  );
}

export default App;
