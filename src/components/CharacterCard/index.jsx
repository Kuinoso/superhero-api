import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles.js';
import Marvel from '../../images/marvel.png';
import DC from '../../images/dc.png';
import Image from '../../images/image.svg';
import Dark from '../../images/dark.png'

export default function CharacterCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img src={props.image} alt={props.name} className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" className={classes.text}>
            {props.name}
          </Typography>
          <div className={classes.textContainer}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
              {props.fullName.length > 1 && '(' + props.fullName + ')'}
            </Typography>
          </div>

          <div className={classes.bottom}>
            {props.alignment === 'good' &&
              <Typography variant="h6" color="textSecondary" component="p" className={classes.text}>
                Hero
              </Typography>
            }
            {props.alignment === 'bad' &&
              <Typography variant="h6" color="textSecondary" component="p" className={classes.text}>
                Villain
              </Typography>
            }
            {props.alignment === 'neutral' &&
              <Typography variant="h6" color="textSecondary" component="p" className={classes.text}>
                Neutral
              </Typography>
            }
            {props.publisher.includes('Marvel') &&
              <img src={Marvel} alt='marvel logo' className={classes.logo} />
            }
            {props.publisher.includes('DC') &&
              <img src={DC} alt='dc logo' className={classes.logo} />
            }
            {props.publisher.includes('Image') &&
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img src={Image} alt='image logo' className={classes.logo} />
            }
            {props.publisher.includes('Dark Horse') &&
              <img src={Dark} alt='dark horse logo' className={classes.logo} />
            }
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}