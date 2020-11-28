import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 1,
        backgroundColor: '#ba0000',
        color: 'white',
        marginTop: 100
    },
    row: {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    link: {
        color: 'white',
        fontWeight: 'bolder'
    },
    logo: {
        width: 200,
        height: 'auto',
        margin: '30px 30px 30px 0',
        [theme.breakpoints.down('sm')]: {
            width: 150,
            margin: 'auto',
        },
    },
    text: {
        alignSelf: 'center',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    },
    title: {
        width: 'min-content',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
            marginBottom: 10
        },
    }
}));
