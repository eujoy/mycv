import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import experienceData from '../data/experience.json';

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        align: "center",
    },
    dividerClass: {
        margin: '2px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    container: {
        maxHeight: 440,
    },
    card: {
        minWidth: 275,
        width: "100%",
    },
    cardMain: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(13),
        fontWeight: "bold",
    },
    cardRightMain: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(13),
    },
    positionHeading: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '80.20%',
        flexShrink: 0,
    },
    companyHeading: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(13),
        color: theme.palette.info.dark
    },
    secondaryHeading: {
        textAlign: "right",
        fontSize: theme.typography.pxToRem(12),
        color: theme.palette.warning.dark,
    },
    expansionPanelHeader: {
        backgroundColor: 'rgba(0, 0, 0, .01)',
        borderBottom: '2px solid rgba(0, 0, 0, .125)',
        marginBottom: 0,
        minHeight: 70,
        '&$expanded': {
            minHeight: 56,
        },
    },
    listItemContent: {
        textAlign: "left",
        fontSize: theme.typography.pxToRem(13),
    },
    listItemElement: {
        marginTop: "0px",
        marginBottom: "0px",
    },
});

class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            denseLinst: true,
        }
    }

    handleChange = (panel) => (event, isExpanded) => {
        this.setState({
            expanded: isExpanded ? panel : false
        })
    }

    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
            <Grid container justify="center" alignItems="center" spacing={0}>
            <Grid item xs={11}>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h5">
                            Experience
                        </Typography>
                            {experienceData.map((exp, idx) => {
                                if (exp.active === false) {
                                    return ("");
                                }

                                var panelIdx = "panel" + idx + 1

                                return (
                                    <ExpansionPanel>
                                    {/* <ExpansionPanel expanded={this.state.expanded === panelIdx} onChange={this.handleChange(panelIdx)}> */}
                                        <ExpansionPanelSummary
                                            className={classes.expansionPanelHeader}
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={panelIdx + "bh-content"}
                                            id={panelIdx + "bh-header"}
                                        >
                                            <Typography className={classes.positionHeading}>
                                                {exp.position}<br />
                                                <Typography className={classes.companyHeading}>{exp.company}</Typography>
                                            </Typography>
                                            <Typography className={classes.secondaryHeading}>
                                                {exp.startDate} - {exp.endDate}<br />
                                                {exp.location}
                                            </Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <div>
                                                <List dense={this.state.denseLinst}>
                                                    {exp.highlights.map((content) => {
                                                        var primary = <Typography className={classes.listItemContent}>{bull} {content.primary}</Typography>

                                                        return (
                                                            <ListItem className={classes.listItemElement}>
                                                                <ListItemText
                                                                    className={classes.listItemElement}
                                                                    primary={primary}
                                                                    secondary={content.secondary !== "" ? content.secondary : null}
                                                                />
                                                            </ListItem>
                                                        );
                                                    })}
                                                </List>
                                                                                                
                                                {exp.toolsUsed.map((tool) => {
                                                    return (<Chip label={tool} variant="outlined" color="primary" />);
                                                })}
                                            </div>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                );
                            })}
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

Experience.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);
