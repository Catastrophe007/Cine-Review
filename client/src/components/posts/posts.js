import React from "react";
import Post from "./post/post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from '@material-ui/core';


const Posts =({setCurrentId})=>{
  const posts =useSelector((state)=>state.posts);
  const classes=useStyles();
  
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={4} md={4}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
}
export default Posts;