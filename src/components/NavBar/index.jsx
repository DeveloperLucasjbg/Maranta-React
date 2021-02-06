import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CartWidget from '../CartWidget';

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
    <>
    <div className={classes.root}>
      <AppBar position="static">
        
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        
          <Typography variant="h6" className={classes.title}> Farmacia Guidi</Typography>
          <Typography variant="" className={classes.title}> DERMOCOSMETICA</Typography>
          <Typography variant="" className={classes.title}> Productos</Typography>
          <Typography variant="" className={classes.title}> Contacto</Typography>

          <CartWidget />
        </Toolbar>
        
      </AppBar>
      
      
    </div>
    </>
  
  );
}
