import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import CharacterCard from '../CharacterCard';
import { useStyles } from './styles.js';

export default function Cards() {
    const classes = useStyles();
    const results = useSelector(
        (store) => store.SearchReducer.results
    );

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                {results.length > 0 &&
                    results.map((item) => (
                        <CharacterCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.images.md}
                            fullName={item.biography.fullName}
                            alignment={item.biography.alignment}
                            publisher={item.biography.publisher}
                        />
                    ))}
            </div>
        </div>
    )
}