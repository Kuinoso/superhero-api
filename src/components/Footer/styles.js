import { fade,              makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        bottom: '0px',
        width: '100%',
        zIndex: 1,
        backgroundColor: 'yellow',
    },
    row: {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        width: '60vw'
    },
    logo: {
        width: 200,
        height: 'auto',
        margin: '30px 0 30px 0'
    },
    text: {
        margin: 15,
    }
}));
