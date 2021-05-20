import  { React } from 'react';
import  { Grid, CircularProgress } from '@material-ui/core'
import Post from './Post/Post';
import useStyles from './styles'; 
import { useSelector } from 'react-redux';
//import Form from './../Form/Form';
//import {             Container } from '@material-ui/core';
const Posts = ( { setCurrentId}) => {
    const posts = useSelector((state) => state.posts);

    const classes = useStyles();
    return (
      !Posts.length ? <CircularProgress /> : (
          <Grid className={ classes.container } container alignItems="stretch" spacing= {3}>
              {posts.map((post) => (
                  <Grid  key={post._id} item xs={12} sm={6}>
                     <Post post={post} setCurrentId={setCurrentId}/>
                  </Grid>
              ))}
          </Grid>
      )
    );
}

export default Posts;