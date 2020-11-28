import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '70px',
    justifyContent: 'center',
    margin: 'auto',
    marginBottom: 100,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'auto auto',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'auto',
    },
  },
  container: {
    padding: '50px 0 200px 0',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 300,
      paddingTop: 20
    },
  },
  nfContainer: {
    backgroundColor: 'white',
    border: '0.5px solid gray',
    width: 'min-content',
    margin: 'auto',
    marginTop: 0,
    padding: 20,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      padding: 10
    },
  },
  notFound: {
    width:200,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  nfTop: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 20
  },
  text: {
    width: 450,
    alignSelf: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      width: 270
    },
  },
  button: {
    fontSize: 25,
    width: 'auto',
    margin: 'auto',
    borderRadius: 10,
    cursor: 'pointer'
  }
}));