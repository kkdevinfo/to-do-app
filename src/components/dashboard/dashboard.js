import React, { useState } from 'react';
import { Grid, Paper, TextField, Typography, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import ButtonAppBar from '../appBar/appBar';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { addToDo } from './../redux/actions/todoAction';
import { connect, useDispatch } from 'react-redux';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import ListView  from "./ListView";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: "20px 0px 0px 20px"
  },
  paperList: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: "20px 0px 0px 20px"
  },
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
const Dashboard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    dataList: props.todoList,
    title: '',
    description: '',
    duedate: 'dd-mm-yyyy',
    listView: ''
  });
  const { title, description, duedate, dataList, listView } = formData;
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    dataList.push({ title, description, duedate });
    const result = dispatch(addToDo(dataList));
    result && setFormData({ ...formData, title: '', description: '', duedate: '' });
  };
  const onViewClick = (value) => {
    setFormData({ ...formData, listView: dataList[value] })
  }
  const onDeleteClick = (index) => {
    if (index > -1) {
      dataList.splice(index, 1);
      setFormData({ ...formData, dataList });
      dispatch(addToDo(dataList));
    }

  }
  return (
    <div className={classes.root}>
      <ButtonAppBar />
      <Grid container spacing={1} justify='space-around'>

        <Grid item sm={6} md={6}>
          <Paper className={classes.paper}>
            <Typography variant='h5' component="h4">Add to dos</Typography>

            <form autoComplete="off" onSubmit={onSubmit}>
              <TextField required fullWidth className={classes.margin} onChange={onChange} value={title} name="title" label="Title" />
              <br />
              <TextField required fullWidth multiline className={classes.margin} onChange={onChange} value={description} name="description" label="Description" />
              <TextField fullWidth type="date" className={classes.margin} value={duedate} onChange={onChange} name="duedate" label="Due date" helperText="dd-mmm-yyyy" />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Save
							</Button>
            </form>
          </Paper>
          <Grid container justify="space-around">
            <List style={{ width: "100%" }}>
              {dataList.length > 0 && dataList.map((item, index) => {

                return (
                  <Paper key={index} className={classes.paperList} variant="outlined">
                    <ListItem style={{ width: "100%" }}>
                      <ListItemText
                        primary={item.title}
                      />
                      <ListItemSecondaryAction>
                        <IconButton color="primary" aria-label="visibility" onClick={() => onViewClick(index)}>
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton edge="end" color="secondary" aria-label="delete" onClick={() => onDeleteClick(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </Paper>
                );
              })}
            </List>
          </Grid>

        </Grid>
        <Grid item sm={6} md={6}>
          <ListView listView={listView} />
        </Grid>

      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  const todoList = state.todo && state.todo.todoList;
  return { todoList };
};
export default connect(mapStateToProps)(Dashboard);
// export default Dashboard;