import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
    [theme.breakpoints.down('xs')]: {
      width: 280,
    },
  },
  media: {
    width: 345,
    maxHeight: 460,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
    [theme.breakpoints.down('xs')]: {
      width: 280,
    },
  },
  bottom: {
    display: 'flex',
    marginTop: 25,
    justifyContent: 'space-around',
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
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
    height: 'min-content',
    minHeight: 50,
  }
}));