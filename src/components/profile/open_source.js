import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import GithubIcon from '@material-ui/icons/GitHub';

import openSourceList from '../data/open_source.json';

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
        fontSize: theme.typography.pxToRem(15),
    },
    cardRightMain: {
        textAlign: "right",
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.warning.dark,
    },
    cardSecondary: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(15),
    },
    cardRightSecondary: {
        textAlign: "right",
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.warning.dark,
    },
    cardLastText: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(14),
        color: theme.palette.text.secondary,
    },
    listItemContent: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(14),
    },
    listItemElement: {
        marginTop: "0px",
        marginBottom: "0px",
    },
});

class OpenSource extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            denseLinst: true,
        }
    }

    render() {
        if (openSourceList.length === 0) {
            return <div></div>;
        }

        const { classes } = this.props;

        return(
            <Grid container justify="center" alignItems="center" spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="h5">
                                Open Source
                            </Typography>
                            
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={12}>
                                    <List dense={this.state.denseLinst}>
                                        {openSourceList.map((opSrc) => {
                                            return (
                                                <ListItem
                                                    button
                                                    component="a"
                                                    target="_blank"
                                                    href={opSrc.link}
                                                    className={classes.listItemElement}
                                                >
                                                    <ListItemIcon>
                                                        <GithubIcon fontSize="large" />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        className={classes.listItemElement}
                                                        primary={opSrc.title}
                                                        secondary={opSrc.subtitle !== "" ? opSrc.subtitle : null}
                                                    />
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

OpenSource.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpenSource);
