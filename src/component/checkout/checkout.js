import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

    content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
  },
}));