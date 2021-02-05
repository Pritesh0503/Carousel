import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const dataToDisplay = props.data
  console.log(dataToDisplay)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={dataToDisplay.productImageAltText}
          height="140"
          image={dataToDisplay.productImageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h7">
            {dataToDisplay.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {dataToDisplay.price.currency+' '+dataToDisplay.price.formattedValue}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
