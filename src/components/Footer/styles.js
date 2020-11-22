import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'yellow',
    },
    row: {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        width: 1100
    },
    logo: {
        width: 200,
        height: 'auto',
        margin: '30px 0 30px 0'
    },
    text: {
        margin: '15px 0 15px 0'
    }
}));
