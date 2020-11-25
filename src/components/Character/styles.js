import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        border: '1px gray solid',
        width: 'min-content',
        padding: 30,
        margin: 'auto',
        marginTop: 50
    },
    root: {
        minHeight: '88.5vh'
    },
    topContainer: {
        marginLeft: 50,
        height: 'min-content'
    },
    logo: {
        height: 100
    },
    infoContainer1: {
        display: 'flex',
        minWidth: 450,
        justifyContent: 'space-between',
        borderTop: '0.5px solid gray',
        paddingTop: 20,
        minHeight: 370,
    },
    infoContainer2: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '13vw',
    },
    info: {
        marginBottom: 10
    },
    downContainer: {
        marginTop: 5,
        borderTop: '0.5px solid gray',
        paddingTop: 15,
        height: 'min-content'
    },
    leftContainer: {
        height: 'min-content',
    },
    powerContainer: {
        marginTop: 10

    }
}));