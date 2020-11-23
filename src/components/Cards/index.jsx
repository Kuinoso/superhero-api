import React, { useState } from 'react';
import CharacterCard from '../CharacterCard';
import { useStyles } from './styles.js';

export default function Cards() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                    <CharacterCard key={value} />
                ))}
            </div>
        </div>

        // <div classname={classes.root}>
        //     <div className={classes.container}>
        //         {[1, 2, 3, 4, 5].map(item => <CharacterCard key={item} />)}
        //     </div>
        // </div>

    )
}