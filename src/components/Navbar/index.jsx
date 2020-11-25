import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles.js';
import { Link, useLocation, useHistory } from 'react-router-dom';
import logo from '../../images/star-guard-condensed.png';
import { getAllCharacters } from '../../redux/searchReducer/Actions'

export default function Navbar() {
    const [search, setSearch] = useState(null);
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://superhero-search.p.rapidapi.com/',
            params: { regex: search },
            headers: {
                'x-rapidapi-key': 'd0079f0d61mshb3a55ab5170477cp1244f3jsn23d29f3d76c7',
                'x-rapidapi-host': 'superhero-search.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            dispatch(getAllCharacters(response.data));
            history.push(`/search/${search}`);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Link to="/" className={classes.title}>
                        <img src={logo} alt='logo' className={classes.logo} />
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
                                onChange={handleInput}
                                onKeyUp={(e) => {
                                    if (e.keyCode === 13) {
                                        handleSubmit(e);
                                    }
                                }}
                            />
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}