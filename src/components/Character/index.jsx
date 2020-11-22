import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles.js';

export default function Character() {
    const classes = useStyles();

    const test = {
        "id": "195",
        "name": "Cyborg Superman",
        "powerstats": {
            "intelligence": "75",
            "strength": "93",
            "speed": "92",
            "durability": "100",
            "power": "100",
            "combat": "80"
        },
        "biography": {
            "full-name": "Henry Henshaw",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Grandmaster of the Manhunters",
                "Herald of the Anti-Monitor",
                "Alpha-Prime of the Alpha Lanterns"
            ],
            "place-of-birth": "-",
            "first-appearance": "Adventures of Superman #466 (May, 1990)",
            "publisher": "DC Comics",
            "alignment": "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "Cyborg",
            "height": [
                "-",
                "0 cm"
            ],
            "weight": [
                "- lb",
                "0 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Black"
        },
        "work": {
            "occupation": "-",
            "base": "Warworld, Qward, Antimatter Universe, formerly Biot, Sector 3601"
        },
        "connections": {
            "group-affiliation": "Alpha Lantern Corps, Manhunters, Warworld, formerly Apokolips and Sinestro Corps",
            "relatives": "Terri Henshaw (wife, deceased)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/667.jpg"
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
                <Text variant='h5' text={props.title} />
                <Text variant='h5' text={props.type} />
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <div>
                <img src={test.image.url} alt={test.name} />
                <div>
                    <div>
                        <Text variant="body1" text='Race' />
                        <Text variant="h5" text={test.appearance.race} />
                        <Text variant="body1" text='Gender' />
                        <Text variant="h5" text={test.appearance.gender} />
                    </div>
                    <div>
                        <Typography variant="body1" gutterBottom>
                            Powerstats
                        </Typography>
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
            </div>
            <div>
                
            </div>
        </div>
    )
}