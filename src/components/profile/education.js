import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    card: {
        minWidth: 275,
        width: "100%",
    },
    cardMain: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(16),
    },
    cardRightMain: {
        textAlign: "right",
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.warning.dark,
    },
    cardSecondary: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(16),
    },
    cardRightSecondary: {
        textAlign: "right",
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.warning.dark,
    },
    cardLastText: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(14),
        color: theme.palette.text.secondary,
    },
});

class Education extends React.Component {
    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return(
            <Grid container justify="center" alignItems="center" spacing={0}>
                <Grid item xs={12}>
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="h5">
                                Education
                            </Typography>
                            
                            <Grid container spacing={0}>
                                <Grid item xs={8}>
                                    <Typography className={classes.cardMain}>
                                        AUEB - University of Economics and Business
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography className={classes.cardRightMain}>
                                        Athens, Greece
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={0}>
                                <Grid item xs={8}>
                                    <Typography className={classes.cardSecondary}>
                                        B.S. in Computer Science
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography className={classes.cardRightSecondary}>
                                        Oct. 2008 - Sept. 2013
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <Typography className={classes.cardLastText}>
                                        Specialization courses on :<br/>
                                        {bull} Information Systems and Security<br/>
                                        {bull} Database Systems and Knowledge Management
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

Education.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);
