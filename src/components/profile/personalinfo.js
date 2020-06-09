import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import personalInfoData from '../data/personalinfo.json';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    dividerClass: {
        margin: '2px',
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
        fontSize: theme.typography.pxToRem(14),
        fontWeight: "bold",
    },
    cardRightMain: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(14),
    },
});

class PersonalInfo extends React.Component {
    render() {
        const { classes } = this.props;

        return(
            <Grid container justify="center" alignItems="center" spacing={0}>
                <Grid item xs={11}>
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="h5">
                                Personal Info
                            </Typography>
                            
                            {personalInfoData.map((personalInfo, idx) => {
                                return (
                                    <div>
                                        <Grid container spacing={0}>
                                            <Grid item xs={3}>
                                                <Typography className={classes.cardMain}>
                                                    {personalInfo.title}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Typography className={classes.cardRightMain}>
                                                    {personalInfo.content.map((cnt, idx) => {
                                                        return <div>{cnt}</div>
                                                    })}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        {idx === [...personalInfoData].length - 1 ? "" : <Divider className={classes.dividerClass} />}
                                    </div>
                                );
                            })}                           
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

PersonalInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalInfo);
