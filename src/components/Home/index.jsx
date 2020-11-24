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
import { getAllSkills } from '../../redux/characterReducer/Actions'

export default function Home() {
    const [search, setSearch] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleInput = (e) => {
        setSearch(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://superhero-search.p.rapidapi.com/',
            params: { hero: search },
            headers: {
                'x-rapidapi-key': '9c9edd910bmshc17f8a8d6eeafc8p174993jsn4a3f11e195eb',
                'x-rapidapi-host': 'superhero-search.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            history.push(`/character/${response.data.id}`);
            dispatch(getAllSkills(response.data));
        }).catch(function (error) {
            console.error(error);
        });


        // $.get(`https://superheroapi.com/api/10157699190431317/10`, function(data, status){
        //     console.log(data)
        //   });
        // fetch(`https://superheroapi.com/api/10157699190431317/10`)
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        // const response = await axios.get(`https://superheroapi.com/api/10157699190431317/10`, {
        //     headers: {
        //         "Content-type": "application/json",
        //         "Access-Control-Allow-Methods": "GET,OPTIONS,POST",
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Headers":
        //             "Access-Control-Allow-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Authorization,Content-Type",
        //     }
        // })
        // console.log(response)
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