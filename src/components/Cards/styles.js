import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '70px',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'auto auto',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'auto',
    },
  },
  container: {
    padding: '100px 0 200px 0',
    minHeight: '68vh',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 300
    },
  }
}));