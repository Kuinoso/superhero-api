import React from 'react';
import logo from '../../images/star-guard-condensed.png';
import { Link } from 'react-router-dom';
import { useStyles } from './styles.js';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.row}>
                <Link to="/" className={classes.title}>
                    <img src={logo} alt='logo' className={classes.logo} />
                </Link>
                <Typography variant="overline" display="block" gutterBottom className={classes.text}>
                    Online API by {<a href='https://rapidapi.com/jakash1997/api/superhero-search/endpoints'>Superhero API</a>}
                    {<br></br>}
                    This web app was developed using Javascript(ES6), React.js, Redux and Material-ui by Leonardo Kuinoso Cifuentes
                </Typography>
            </div>
        </div>
    )
}