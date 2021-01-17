import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DropDown from '../components/DropDown.js';

// import SimpleSelect from 'DropDown'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({thepath, actionName, actionDescription}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="300"
          src={thepath}
          title="Finger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="secondary">
            {actionName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {actionDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <DropDown />
        </CardActions>
    </Card>
  );
}