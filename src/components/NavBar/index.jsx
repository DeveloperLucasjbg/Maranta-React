import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';
import './clase.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
      
    <div className={classes.root}>
      <AppBar position="static">  
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        
          <Typography variant="h6" className={classes.title}><Link E-Comerce /> </Typography>
          <div className='clase'>
            <Link to='/'>Home</Link>
            <Link to='/'>Categorias</Link>
            <Link to='/'>Obras Sociales</Link>
            <Link to='/'>Producto</Link>
            </div> 
        
          <CartWidget />
        </Toolbar>     
      </AppBar>   
    </div>
   
  );
}
