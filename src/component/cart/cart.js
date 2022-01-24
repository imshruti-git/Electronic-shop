import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    justifyContent: 'center'
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  
 
  link: {
    textDecoration: 'none',
  },
 
  root: {
    width: '100%',
    maxWidth: 360,
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
  },
}));