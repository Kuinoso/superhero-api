import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles.js';
import Marvel from '../../images/marvel.png';
import DC from '../../images/dc.png';
import Image from '../../images/image.svg';
import Dark from '../../images/dark.png'

export default function Character() {
    const classes = useStyles();
    const characterId = useSelector(
        (store) => store.CharacterReducer.characterId
    );
    const results = useSelector(
        (store) => store.SearchReducer.results
    );
    const [character, setCharacter] = useState({});

    useEffect(() => {
        let filtered = results.filter(item => item.id === characterId)
        setCharacter(filtered[0]);
    }, [results, characterId]);

    const Text = (props) => {
        return (
            <Typography variant={props.variant} gutterBottom className={props.style}>
                {props.text}
            </Typography>
        )
    }

    const Powerstat = (props) => {
        return (
            <div className={classes.infoContainer2}>
                <Text variant='body1' text={props.title} />
                <Text variant='h5' text={props.type} style={classes.score} />
            </div>
        )
    }

    return (
        <div className={classes.root}>
            {character.id &&
                <div className={classes.container}>
                    <div>
                        <img src={character.images.md} alt={character.name} className={classes.image} />
                        <div className={classes.powerContainer}>
                            <ul className={classes.stats}>
                                <li>
                                    <Powerstat title='Intelligence' type={character.powerstats.intelligence} />
                                </li>
                                <li>
                                    <Powerstat title='Strength' type={character.powerstats.strength} />
                                </li>
                                <li>
                                    <Powerstat title='Speed' type={character.powerstats.speed} />
                                </li>
                                <li>
                                    <Powerstat title='Durability' type={character.powerstats.durability} />
                                </li>
                                <li>
                                    <Powerstat title='Power' type={character.powerstats.power} />
                                </li>
                                <li>
                                    <Powerstat title='Combat' type={character.powerstats.combat} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div >
                        <div className={classes.topContainer}>
                            <Text variant="h3" text={character.name} style={classes.name} />
                            <br></br>
                            <div className={classes.infoContainer1}>
                                <div className={classes.leftContainer}>
                                    <div className={classes.infoContainer}>
                                        <Text variant="body1" text='Full Name:' />
                                        <Text variant="h5" text={character.biography.fullName} style={classes.fullName} />
                                    </div>
                                    {character.biography.alignment === 'good' &&
                                        <div className={classes.infoContainer}>
                                            <Text variant="body1" text='Role:' />
                                            <Text variant="h5" text='Hero' style={classes.score} />
                                        </div>
                                    }
                                    {character.biography.alignment === 'bad' &&
                                        <div className={classes.infoContainer}>
                                            <Text variant="body1" text='Role:' />
                                            <Text variant="h5" text='Villain' style={classes.score} />
                                        </div>
                                    }
                                    {character.biography.alignment === 'neutral' &&
                                        <div className={classes.infoContainer}>
                                            <Text variant="body1" text='Role:' />
                                            <Text variant="h5" text='Neutral' style={classes.score} />
                                        </div>
                                    }
                                    <div className={classes.infoContainer}>
                                        <Text variant="body1" text='Race:' />
                                        <Text variant="h5" text={character.appearance.race} style={classes.score} />
                                    </div>
                                    <div className={classes.infoContainer}>
                                        <Text variant="body1" text='Gender:' />
                                        <Text variant="h5" text={character.appearance.gender} style={classes.score} />
                                    </div>
                                </div>
                                <div className={classes.infoContainer3}>
                                    <Text variant="body1" text='Aliases:' />
                                    <ul className={classes.stats}>
                                        {character.biography.aliases.map(item =>
                                            <li><Text variant="h5" text={item} style={classes.aliases} /></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.downContainer}>
                                <div className={classes.infoContainer}>
                                    <Text variant="body1" text='First Appearance:' />
                                    <Text variant="h5" text={character.biography.firstAppearance} style={classes.score} />
                                </div>
                                <br></br>
                                <div>
                                    {character.biography.publisher.includes('Marvel') &&
                                        <div className={classes.infoContainer}>
                                            <Text variant="body1" text='Publisher:' />
                                            <img src={Marvel} alt='marvel logo' className={classes.logo} />
                                        </div>
                                    }
                                    {character.biography.publisher.includes('DC') &&
                                        <div className={classes.infoContainer}>
                                            <Text variant="body1" text='Publisher:' />
                                            <img src={DC} alt='dc logo' className={classes.logo} />
                                        </div>
                                    }
                                    {character.biography.publisher.includes('Image') &&
                                        <div className={classes.infoContainer}>
                                            <Text variant="body1" text='Publisher:' />
                                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                            <img src={Image} alt='image logo' className={classes.logo} />
                                        </div>
                                    }
                                    {character.biography.publisher.includes('Dark Horse') &&
                                        <div className={classes.infoContainer}>
                                            <Text variant="body1" text='Publisher:' />
                                            <img src={Dark} alt='dark horse logo' className={classes.logo} />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}