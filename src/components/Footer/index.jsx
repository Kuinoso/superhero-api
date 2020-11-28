import React from 'react';
import logo2 from '../../images/wf.png';
import { Link } from 'react-router-dom';
import { useStyles } from './styles.js';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.row}>
                <Link to="/" className={classes.title}>
                    <img src={logo2} alt='logo' className={classes.logo} />
                </Link>
                <Typography variant="overline" gutterBottom className={classes.text}>
                    Online API by {<a target="_blank" className={classes.link} href='https://rapidapi.com/jakash1997/api/superhero-search/endpoints'>Superhero-Search API</a>}
                    {<br></br>}
                    This web app was developed using Javascript(ES6), React.js, Redux and Material-ui by Leonardo Kuinoso Cifuentes
                </Typography>
            </div>
        </div>
    )
}