import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Homecare from './Homecare';
import {Grid, Box } from '@material-ui/core/';
import Student from './Student';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '80vh',
    minWidth: '80vh',
  },
}));
export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Explore">
        <Box p={20}>
        <Grid container spacing={5} >
        <Homecare/>
        <Student/>
        <Homecare/>
        </Grid>
        </Box>
    </div>
  );
}