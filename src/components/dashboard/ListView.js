import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    paperListView: {
        padding: "20px",
        textAlign: 'left',
        color: theme.palette.text.secondary,
        margin: "20px 20px 0px 0px"
    },
    margin: {
        marginTop: theme.spacing(3),
    },
    button: {
        marginTop: theme.spacing(3),
        margin: theme.spacing(1),
    },
}));
const ListView = (props) => {
    const classes = useStyles();
    const { listView } = props
    return (
        <Paper className={classes.paperListView}>
            <Typography variant='h5' component="h4">TO DO Details</Typography>

            {listView && (
                <Grid>
                    <Typography component="p"><strong>Title: </strong> {listView.title}</Typography>
                    <Typography component="p"><strong>Description: </strong> {listView.description}</Typography>
                    <Typography component="p"><strong>Due Date: </strong> {listView.duedate}</Typography>
                </Grid>
            )}
        </Paper>
    )
};
export default ListView;