import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Homecare() {
  return (
      
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="images/Checkup.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Homa Care
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lazy to go  the hospital!
        Well you can now request 
        to see a qualified nurse and they’ll 
        be there within less than 30mins. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
