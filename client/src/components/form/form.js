import React from "react";
import useStyles from "./styles";
import {TextField,Button,Typography,Paper } from "@material-ui/core";
import { useState ,useEffect} from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import {createPost,updatePost} from '../../actions/posts'
import { useSelector } from "react-redux";
const Form=({currentId,setCurrentId})=>{
  const [postData,setPostData]=useState({
    title:'', genre:'', img:'', director:'',synopsis:'',
});
  const classes=useStyles();
  const dispatch=useDispatch();
  const post = useSelector((state) =>currentId? state.posts.find((p)=>p._id===currentId) : null);
 
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const Clear=()=>{
    setPostData({title:'', genre:'', image:'', director:'',synopsis:'',});
    setCurrentId(0);
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();if (currentId) {
      dispatch(updatePost(currentId,postData));
    }
    else{dispatch(createPost(postData));}
    Clear();
  };
  return(
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}></form>
      <Typography variant="h6">{currentId? 'Editing' : 'Creating'} a Movie</Typography>
      <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}></TextField>
      <TextField name="genre" variant="outlined" label="genre" fullWidth value={postData.genre} onChange={(e)=>setPostData({...postData,genre:e.target.value.split(',')})}></TextField>
      <TextField name="director" variant="outlined" label="director" fullWidth value={postData.director} onChange={(e)=>setPostData({...postData,director:e.target.value})}></TextField>
      <TextField name="synopsis" variant="outlined" label="synopsis" fullWidth value={postData.synopsis} onChange={(e)=>setPostData({...postData,synopsis:e.target.value})}></TextField>
      <div className={classes.fileInput}>
        <FileBase64 type="file" multiple={false} onDone={({base64})=>setPostData({...postData,image:base64})}/>
      </div>
      <Button className={classes.buttonSubmit } variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleSubmit}>Submit</Button>
      <Button  variant="contained" color="secondary" size="small" onClick={Clear} fullWidth>Clear</Button>

    </Paper>
  );
}
export default Form;