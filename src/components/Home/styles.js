import { makeStyles, theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 60,
    margin: 'auto',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      marginTop: 100,
      paddingBottom: 250
    },
    minHeight: '100%'
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 800,
    minHeight: '100%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 400,
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
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
    margin: 'auto',
    padding: 20,
    marginBottom: 100,
    fontSize: 65,
    [theme.breakpoints.down('lg')]: {
      fontSize: 55,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 45,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 35,
      marginBottom: 50,
    },
  },
  text2: {
    textAlign: 'center',
    fontWeight: '400',
    margin: 'auto',
    marginTop: 100,
    padding: 20,    
    fontSize: 45,
    [theme.breakpoints.down('lg')]: {
      fontSize: 35,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      marginTop: 50,
    },
  }
}));