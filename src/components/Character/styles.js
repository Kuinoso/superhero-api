import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        border: '1px gray solid',
        width: 'min-content',
        padding: 30,
        margin: 'auto',
        marginTop: 50,
        [theme.breakpoints.down('sm')]: {
            padding: 20,
        },
    },
    root: {
        marginTop: 70,
        paddingBottom: 200,
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 300,
        },
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            width: 270,
        },
        [theme.breakpoints.down('xs')]: {
            width: 170,
        },
    },
    topContainer: {
        marginLeft: 50,
        height: 'min-content',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 30,
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: 10,
        },
    },
    logo: {
        height: 100,
        [theme.breakpoints.down('sm')]: {
            height: 80
        },
        [theme.breakpoints.down('xs')]: {
            height: 50
        },
    },
    infoContainer1: {
        display: 'flex',
        minWidth: 'min-content',
        justifyContent: 'space-between',
        borderTop: '0.5px solid gray',
        paddingTop: 20,
        height: 'min-content',
        [theme.breakpoints.down('sm')]: {
            minWidth: 190,
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: 100,
            flexDirection: 'column',
            paddingTop: 0,
            borderTop: '0.5px solid white',
        },
    },
    infoContainer2: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 260,
        height: 'min-content',
        [theme.breakpoints.down('sm')]: {
            width: 210,
        },
        [theme.breakpoints.down('xs')]: {
            width: 125,
        },
    },
    infoContainer3: {
        height: 'min-content',
        marginLeft: 20,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
            marginLeft: 10
        },
    },
    info: {
        marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: '80%'
        },
    },
    name: {
        marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: '250%'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: 0,
            fontSize: '160%'
        },
    },
    score: {
        marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: '130%'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '125%'
        },
    },
    downContainer: {
        marginTop: 100,
        borderTop: '0.5px solid gray',
        paddingTop: 15,
        height: 'min-content',
        [theme.breakpoints.down('sm')]: {
            marginTop: 20,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
            borderTop: '0.5px solid white',
            paddingTop: 0,
        },
    },
    leftContainer: {
        height: 'min-content',
    },
    powerContainer: {
        marginTop: 10

    },
    stats: {
        display: 'flex',
        flexDirection: 'column',
    },
    aliases: {
        width: 250,
        [theme.breakpoints.down('sm')]: {
            fontSize: '130%',
            width: 'auto'
        },
        [theme.breakpoints.down('xs')]: {
            width: 'auto'
        },
    },
    fullName: {
        width: 250,
        marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: '130%',
            width: 'auto'
        },
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            fontSize: '125%'
        },
    }
}));