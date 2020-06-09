import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = withStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            classes: useStyles({
                root: {
                    width: "100%",
                    align: "center",
                },
                container: {
                    maxHeight: 440,
                },
            }),
        }
    }

    render() {
        return (
            <Grid container justify="center" alignItems="center" spacing={0}>
                <Grid item xs={9}>
                    <Paper className={this.state.classes.root} elevation={7}>
                        About...
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default About;
