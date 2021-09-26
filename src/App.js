import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Toolbar } from '@material-ui/core';
import Header from './components/Header';
// import PlaceToVisit from './components/PlaceToVisit';
import Login from './components/Login';
import Checkup from './components/Checkup';
import Delivery from './components/Delivery';
import Home from './Home';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/health.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div class="jumbotron text-center">
      <h1>WYE-NO-MORE</h1>
      <p>Meds dilivered, Basic Health check-up !</p> 
    </div>
      <Toolbar>
      <CssBaseline/>
      <Header />
      </Toolbar>

      <Home/>


    </div>
  );
}