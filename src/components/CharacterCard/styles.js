import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      width: 345,
      maxHeight:460,
      objectFit: 'cover'
    },
    bottom: {
      display: 'flex',
      marginTop: '50px',
      justifyContent: 'space-around',
    },
    logo: {
      height: '50px',
      width: 'auto'
    },
    text: {
      textAlign: 'center',
      alignSelf: 'center',
    },
    textContainer: {
      height: 50
    }
  });