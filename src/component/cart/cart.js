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