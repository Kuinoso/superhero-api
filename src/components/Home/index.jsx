import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles.js';
import axios from 'axios';

export default function Home() {
    const [search, setSearch] = useState(null)
    const classes = useStyles();

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://superheroapi.com/api/10157699190431317/10`, {
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Methods": "GET,OPTIONS,POST",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers":
                    "Access-Control-Allow-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Authorization,Content-Type",
            }
        })
        console.log(response)
    }

    return (
        <div className={classes.container}>
            <Typography variant="h2" gutterBottom className={classes.text1}>
                The biggest database of the comic book world!
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