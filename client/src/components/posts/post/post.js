import React from "react";
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import {  deletePost } from '../../../actions/posts';
import { red } from "@material-ui/core/colors";


const Post =({post,setCurrentId})=>{
  const classes=useStyles();
  const dispatch = useDispatch();
  return(
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.director}</Typography>
        <Typography variant="body2">{}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="medium" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" style={{ color: 'white' }} component="h2">{post.genre.map((genre) => `#${genre} `)}</Typography>
      </div>
      <Typography className={classes.title} style={{ color: 'white' }} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" style={{ color: 'white' }}component="p">{post.synopsis}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="medium" color="primary"  style={{ color: 'red' }} ><FavoriteIcon fontSize="medium" style={{ color: 'red' }} /> &nbsp; {post.likeCount} </Button>
        <Button size="medium" color="primary"  style={{ color: 'red' }} onClick={()=>dispatch(deletePost(post._id))}><DeleteIcon fontSize="medium" style={{ color: 'red' }} /> Delete</Button>
      </CardActions>
    </Card>
  );
}
export default Post;