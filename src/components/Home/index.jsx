import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles.js';
import { useDispatch } from 'react-redux';
import { getAllCharacters } from '../../redux/searchReducer/Actions'

export default function Home() {
    const [search, setSearch] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleInput = (e) => {
        setSearch(e.target.value)
    };

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = search.split(' ').map(capitalize).join(' ');
        const options = {
            method: 'GET',
            url: 'https://superhero-search.p.rapidapi.com/',
            params: { regex: query },
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
        <div className={classes.container}>
            <Typography variant="h2" gutterBottom className={classes.text1}>
                The biggest comic book database of the world!
            </Typography>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search hero, villain, etc..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={handleInput}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleSubmit}>
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Typography variant="h4" gutterBottom className={classes.text2}>
                Superheros, Villains, Antiheroes... You can find them all here!
            </Typography>
        </div>
    )
}