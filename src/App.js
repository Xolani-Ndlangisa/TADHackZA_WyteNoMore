import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Toolbar } from '@material-ui/core';
import Header from './components/Header';
import Searchbar from './components/Searchbar'
import Explore from './components/Explore';
import Cards from './components/Student'
import Student from './components/Student';
import Homecare from './components/Homecare';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/health.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  // Searchbar: {
  //   width: '20%',
  //   margin: '0 auto',
  // },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Toolbar>
      <CssBaseline />
      <Header />
      <Explore/>
      </Toolbar>
      
    </div>
  );
}