import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addMyFeed, fetchFeedsUser, deleteFeedUser } from "../../actions/feeds"

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { ContainerCards } from "./styles"
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Feeds() {
  const classes = useStyles();
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const state = useSelector(state => state.userReducer);
  const feeds = useSelector(state => state.feedsReducer.feeds);

  const handleArticle = (url) => {
    return window.open(url, '_blank');
  };
  useEffect(() => {
    if (state.user.hasOwnProperty("access_token")) {
      let token = state.user.access_token
      dispatch(fetchFeedsUser({ token }))
      // return () => {
      //   dispatch(fetchFeedsUser({ token }))

      // }
    }
  }, [feeds]);

  const handleSubmit = () => {
    if (state.user.hasOwnProperty("access_token")) {
      console.log("ENTRE")
      let token = state.user.access_token
      return dispatch(addMyFeed({ url, token }))

    }
  }

  const handleDelete = (id) => {
    console.log(id, "IDIDD")
    if (state.user.hasOwnProperty("access_token")) {
      let token = state.user.access_token
      return dispatch(deleteFeedUser({ id, token }))

    }
  }
  return (
    <>
      <ContainerCards  >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {feeds.map((value, index) => (
              <Grid key={index} item>
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                      {value.title}
                    </Typography>
                  </CardContent>
                  <CardActions >
                    <Button
                      onClick={() => handleDelete(value.id)}
                      aria-label="delete"
                      color="secondary">
                      <DeleteIcon />
                    </Button>
                    <Button onClick={() => handleArticle(value.url)} size="small" style={{ textTransform: "none", texSize: "10px" }}>Go to the article</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </ContainerCards>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Container component="main" maxWidth="xs" className={classes.root} >
            <Typography className={classes.title} color="textPrimary" gutterBottom>
              Add Your Article
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="url"
                  label="URL"
                  type="text"
                  id="url"
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="default"
              className={classes.submit}
              onClick={() => handleSubmit()}
            >
              ADD FEED
          </Button>
          </Container>
        </form>
      </div>

    </>
  );
}