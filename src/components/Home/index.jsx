import React from 'react';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles.js';

export default function Home() {
    const classes = useStyles();

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
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Typography variant="h4" gutterBottom className={classes.text2}>
                Superheros, Villains, Antiheroes... You can find them all here!
            </Typography>
        </div>
    )
}