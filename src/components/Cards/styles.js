import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '70px',
   justifyContent: 'center',
  },
  container: {
    padding: '10vh 0 200px 0',
    minHeight: '68vh',
  }
}));