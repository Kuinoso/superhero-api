import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles.js';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/star-guard-condensed.png'

export default function Navbar() {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" className={classes.title}>
                        <img src={logo} alt='logo' className={classes.logo}/>
                    </Link>
                    {location.pathname !== '/' &&
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}