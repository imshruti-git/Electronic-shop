import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (() => ({
    main: {
        // maxWidth: 345, original width style
        maxWidth: '300px',
      },
      image: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },

      content: {
        display: 'flex',
        justifyContent: 'space-between',
      },

      cardActions: {
        display: 'flex',
        justifyContent: 'center',
      },
      
}));