import { makeStyles, theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '20vh',
    width: 'min-content',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10vh',
    },
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '40vw',
    height: '5vh',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '60vw',
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  text1: {
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: '10vh',
    width: '70vw',
    [theme.breakpoints.down('lg')]: {
      fontSize: '45px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '35px',
    },
  },
  text2: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: '10vh',
    width: '70vw',
    [theme.breakpoints.down('lg')]: {
      fontSize: '35px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '25px',
    },
  }
}));