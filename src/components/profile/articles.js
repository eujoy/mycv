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

import DescriptionIcon from '@material-ui/icons/Description';

import articlesList from '../data/articles.json';

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

class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            denseLinst: true,
        }
    }

    render() {
        if (articlesList.length === 0) {
            return <div></div>;
        }

        const { classes } = this.props;

        return(
            <Grid container justify="center" alignItems="center" spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="h5">
                                Articles
                            </Typography>
                            
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={12}>
                                    <List dense={this.state.denseLinst}>
                                        {articlesList.map((article) => {
                                            return (
                                                <ListItem
                                                    button
                                                    component="a"
                                                    target="_blank"
                                                    href={article.link}
                                                    className={classes.listItemElement}
                                                >
                                                    <ListItemIcon>
                                                        <DescriptionIcon fontSize="large" />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        className={classes.listItemElement}
                                                        primary={article.title}
                                                        secondary={article.subtitle !== "" ? article.subtitle : null}
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

Articles.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Articles);
