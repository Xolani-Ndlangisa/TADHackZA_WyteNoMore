import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Toolbar } from '@material-ui/core';
import Header from './components/Header';
// import PlaceToVisit from './components/PlaceToVisit';
import Searchbar from './components/Searchbar'


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

      <Toolbar>
      <CssBaseline classes=""/>
      <Header />
      </Toolbar>
      <div>
      <Searchbar/>
      
      </div>

      {/* <PlaceToVisit /> */}

    </div>
  );
}