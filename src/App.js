import React from "react";
import "./App.css";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// import About from "./components/about";
import Profile from "./components/profile";
import Experience from "./components/experience";

const allTabs = [
  {
    label: "Profile",
    endpoint: "/mycv",
    component: <Profile />,
  },
  {
    label: "Experience",
    endpoint: "/mycv/experience",
    component: <Experience />,
  },
  // {
  //   label: "About",
  //   endpoint: "/mycv/about",
  //   component: <About />,
  // }
];    

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
    <BrowserRouter>
      <Grid container justify="center" alignItems="center" spacing={0}>
        <Grid item xs={11}>
          <Paper className={classes.paper} elevation={3}>
            <div className="App">
              <Route
                path="/"
                render={({ location }) => (
                  <AppBar position="static" color="white">
                    <Tabs value={location.pathname} indicatorColor="primary" textColor="primary" centered>
                      {allTabs.map((tb, idx) => {
                        return <Tab label={tb.label} value={tb.endpoint} component={Link} to={tb.endpoint} />
                      })}
                    </Tabs>
                  </AppBar>
                )}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>

      <br/>

      <Switch>
        {[...allTabs].reverse().map((tb) => {
          return <Route path={tb.endpoint} render={() => tb.component} />
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
