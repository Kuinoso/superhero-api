import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles.js';
import Marvel from '../../images/marvel.png';
import DC from '../../images/dc.png';
import Image from '../../images/image.svg';
import Dark from '../../images/dark.png'

export default function Character() {
    const classes = useStyles();

    const test = {
        "id": "233",
        "name": "Dr Manhattan",
        "powerstats": {
          "intelligence": "88",
          "strength": "100",
          "speed": "42",
          "durability": "100",
          "power": "100",
          "combat": "42"
        },
        "biography": {
          "full-name": "Jonathan Osterman",
          "alter-egos": "No alter egos found.",
          "aliases": [
            "Jon Osterman",
            "Doctor Manhattan"
          ],
          "place-of-birth": "-",
          "first-appearance": "Watchmen #1 (September, 1986)",
          "publisher": "DC Comics",
          "alignment": "good"
        },
        "appearance": {
          "gender": "Male",
          "race": "Human / Cosmic",
          "height": [
            "-",
            "0 cm"
          ],
          "weight": [
            "- lb",
            "0 kg"
          ],
          "eye-color": "White",
          "hair-color": "No Hair"
        },
        "work": {
          "occupation": "Scientist",
          "base": "New York City; formerly Mars"
        },
        "connections": {
          "group-affiliation": "Watchmen, Crimebusters",
          "relatives": "-"
        },
        "image": {
          "url": "https://www.superherodb.com/pictures2/portraits/10/100/884.jpg"
        }
      }

    const Text = (props) => {
        return (
            <Typography variant={props.variant} gutterBottom>
                {props.text}
            </Typography>
        )
    }

    const Powerstat = (props) => {
        return (
            <div>
                <Text variant='body1' text={props.title} />
                <Text variant='h5' text={props.type} />
            </div>
        )
    }

    const Company = (props) => {
        return (
            test.biography.publisher.includes(props.name) &&
            <img src={props.src} alt={props.name} />
        )
    }

    return (
        <div className={classes.container}>
            <div>
                <img src={test.image.url} alt={test.name} />
                <div>
                    <ul>
                        <li>
                            <Powerstat title='Intelligence' type={test.powerstats.intelligence} />
                        </li>
                        <li>
                            <Powerstat title='Strength' type={test.powerstats.strength} />
                        </li>
                        <li>
                            <Powerstat title='Speed' type={test.powerstats.speed} />
                        </li>
                        <li>
                            <Powerstat title='Durability' type={test.powerstats.durability} />
                        </li>
                        <li>
                            <Powerstat title='Power' type={test.powerstats.power} />
                        </li>
                        <li>
                            <Powerstat title='Combat' type={test.powerstats.combat} />
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <Text variant="h3" text={test.name} />
                        <div>
                            <Text variant="body1" text='Full Name:' />
                            <Text variant="h5" text={test.biography["full-name"]} />
                        </div>
                        <div>
                            <Text variant="body1" text='Aliases:' />
                            {test.biography.aliases.map(item =>
                                <Text variant="h5" text={'- ' + item} />
                            )}
                        </div>
                        {test.biography.alignment === 'good' &&
                            <div>
                                <Text variant="body1" text='Role:' />
                                <Text variant="h5" text='Hero' />
                            </div>
                        }
                        {test.biography.alignment === 'bad' &&
                            <div>
                                <Text variant="body1" text='Role:' />
                                <Text variant="h5" text='Villain' />
                            </div>
                        }
                        {test.biography.alignment === 'neutral' &&
                            <div>
                                <Text variant="body1" text='Role:' />
                                <Text variant="h5" text='Neutral' />
                            </div>
                        }
                        <div>
                            <Text variant="body1" text='Race:' />
                            <Text variant="h5" text={test.appearance.race} />
                        </div>
                        <div>
                            <Text variant="body1" text='Gender:' />
                            <Text variant="h5" text={test.appearance.gender} />
                        </div>
                        <div>
                            <Text variant="body1" text='First Appearance:' />
                            <Text variant="h5" text={test.biography["first-appearance"]} />
                        </div>
                        <div>
                            <Text variant="body1" text='Publisher:' />
                            {test.biography.publisher.includes('Marvel') &&
                                <img src={Marvel} alt='marvel logo' />
                            }
                            {test.biography.publisher.includes('DC') &&
                                <img src={DC} alt='dc logo' />
                            }
                            {test.biography.publisher.includes('Image') &&
                                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                                <img src={Image} alt='image logo' />
                            }
                            {test.biography.publisher.includes('Dark Horse') &&
                                <img src={Dark} alt='dark horse logo' />
                            }
                            {!(test.biography.publisher.includes('Dark Horse')) && !(test.biography.publisher.includes('Image')) && !(test.biography.publisher.includes('DC')) && !(test.biography.publisher.includes('Marvel')) &&
                                <Text variant="h5" text={test.biography.publisher} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}