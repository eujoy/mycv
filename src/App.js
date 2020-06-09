import React from "react";
import "./App.css";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Profile from "./components/profile";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();

  return (
      <Paper className={classes.paper} elevation={3}>
        <div className="App">
          <Profile />
        </div>
      </Paper>
  );
}

export default App;
