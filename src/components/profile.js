import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import Articles from './profile/articles';
import Education from './profile/education';
import Experience from './profile/experience';
import MailIcon from '@material-ui/icons/Mail';
import MonochromePhotosIcon from '@material-ui/icons/MonochromePhotos';
import OpenSource from './profile/open_source';
import PersonalInfo from './profile/personalinfo';
import Skills from './profile/skills';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
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
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    fullnameHeading: {
        textAlign: "center",
        fontSize: theme.typography.pxToRem(34),
    },
    personalInfoData: {
        textAlign: "center",
        fontSize: theme.typography.pxToRem(18),
        fontStyle: "italic",
        fontWeight: "bold",
        color: theme.palette.info.dark,
    },
    personalQuotesData: {
        textAlign: "center",
        fontSize: theme.typography.pxToRem(14),
        fontStyle: "italic",
    }
});

class Profile extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid className={classes.root} container justify="center" alignItems="center" spacing={0}>
                <Grid item xs={12} sm={9}>
                    <Paper className={classes.root} elevation={7}>
                        <Grid container justify="center" alignItems="flex-start" spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <Grid container justify="center" alignItems="center" spacing={0}>
                                    <Grid item xs={12}>
                                        <br /><br />
                                    </Grid>
                                </Grid>

                                <Grid container justify="center" alignItems="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography className={classes.fullnameHeading}>
                                            Angelos Giannis
                                        </Typography>
                                        <Divider className={classes.dividerClass} />

                                        <Grid container justify="center" alignItems="center" spacing={0}>
                                            <Grid item xs={12}>
                                                <br />
                                            </Grid>
                                        </Grid>

                                        <Typography className={classes.personalInfoData}>
                                            Software Engineer <br/> Lifelong Learner - Amateur Photographer
                                        </Typography>

                                        <Grid container justify="center" alignItems="center" spacing={0}>
                                            <Grid item xs={12}>
                                                <br />
                                            </Grid>
                                        </Grid>

                                        <Typography className={classes.personalQuotesData}>
                                            "The best way to write code is to make it self explanatory so that it is easy to read and fully understand what it actually does."
                                            <br />
                                            "Let variables and functions speak for themselves."
                                        </Typography>

                                        <Grid container justify="center" alignItems="center" spacing={0}>
                                            <Grid item xs={12}>
                                                <br />
                                            </Grid>
                                        </Grid>

                                        <Divider className={classes.dividerClass} />
                                    </Grid>
                                </Grid>

                                <Grid container justify="center" alignItems="center" spacing={2}>
                                    <Grid container justify="center" alignItems="center" xs={10} sm={10}>
                                        <Grid container justify="center" alignItems="center" spacing={0}>
                                            <Grid item xs={12}>
                                                <br />
                                            </Grid>
                                        </Grid>

                                        <Tooltip title="GitHub" placement="top">
                                            <Link href="https://github.com/eujoy" target="_blank" color="inherit">
                                                <GitHubIcon />
                                            </Link>
                                        </Tooltip>
                                        &nbsp;
                                        <Tooltip title="LinkedIn" placement="top">
                                            <Link href="https://www.linkedin.com/in/v-angelos-giannis" target="_blank" color="inherit">
                                                <LinkedInIcon />
                                            </Link>
                                        </Tooltip>
                                        &nbsp;
                                        <Tooltip title="Instagram" placement="top">
                                            <Link href="https://www.instagram.com/angelgiannis" target="_blank" color="inherit">
                                                <InstagramIcon />
                                            </Link>
                                        </Tooltip>
                                        &nbsp;
                                        <Tooltip title="Unsplash" placement="top">
                                            <Link href="https://unsplash.com/@eujoy_ang" target="_blank" color="inherit">
                                                <PhotoCameraIcon />
                                            </Link>
                                        </Tooltip>
                                        &nbsp;
                                        <Tooltip title="500px" placement="top">
                                            <Link href="https://500px.com/eujoy" target="_blank" color="inherit">
                                                <MonochromePhotosIcon />
                                            </Link>
                                        </Tooltip>
                                        &nbsp;
                                        <Tooltip title="Mail to : angelos.giannis@gmail.com" placement="top">
                                            <Link href="mailto:angelos.giannis@gmail.com" color="inherit">
                                                <MailIcon />
                                            </Link>
                                        </Tooltip>

                                        <Grid container justify="center" alignItems="center" spacing={0}>
                                            <Grid item xs={12}>
                                                <br />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container justify="center" alignItems="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Divider className={classes.dividerClass} />
                                    </Grid>
                                </Grid>

                                <Grid container justify="center" alignItems="center" spacing={0}>
                                    <Grid item xs={12}>
                                        <br />
                                    </Grid>
                                </Grid>
                                
                                <Grid container justify="left" alignItems="left" spacing={0}>
                                    <Grid item xs={12}>
                                        <Education />
                                    </Grid>
                                </Grid>

                                <Grid container justify="center" alignItems="center" spacing={0}>
                                    <Grid item xs={12}>
                                        <br />
                                    </Grid>
                                </Grid>
                                
                                <Grid container justify="left" alignItems="left" spacing={0}>
                                    <Grid item xs={12}>
                                        <OpenSource />
                                    </Grid>
                                </Grid>

                                <Grid container justify="left" alignItems="left" spacing={0}>
                                    <Grid item xs={12}>
                                        <Articles />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={8}>
                                <Grid container justify="center" alignItems="center" spacing={0}>
                                    <Grid item xs={12}>
                                        <br />
                                    </Grid>
                                </Grid>
                                
                                <Grid container justify="center" alignItems="center" spacing={0}>
                                    <Grid item xs={12}>
                                        <Experience />
                                    </Grid>
                                </Grid>
                                
                                <Grid container justify="center" alignItems="center" spacing={0}>
                                    <Grid item xs={12}>
                                        <br />
                                    </Grid>
                                </Grid>
                                
                                <Grid container justify="center" alignItems="center" spacing={0}>
                                    <Grid item xs={12}>
                                        <Skills />
                                    </Grid>
                                </Grid>

                                <Grid container justify="center" alignItems="center" spacing={0}>
                                    <Grid item xs={12}>
                                        <br />
                                    </Grid>
                                </Grid>

                                <Grid container justify="center" alignItems="center" spacing={0}>
                                    <Grid item xs={12}>
                                        <PersonalInfo />
                                    </Grid>
                                </Grid>

                                <Grid container justify="center" alignItems="center" spacing={0}>
                                    <Grid item xs={12}>
                                        <br />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);