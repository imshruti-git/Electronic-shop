import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles ((theme) => ({
    

    appbar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        width: `calc(100% - ${drawerWidth}px)`,
        
    },

    title: {
        flexGrow: 1,
        display: 'flex', 
        alignItem: 'center',
        
         
    },

    menuButton: {
        marginRight: theme.spacing(4),
        
      },

    image: {
        marginRight: '20px',
        borderRadius: '50%',

    },


    grow: {
        flexGrow: 1,
    },
}));