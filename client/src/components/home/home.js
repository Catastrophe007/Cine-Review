import React,{useState,useEffect} from "react";
import {Container,Grow,Grid, TableContainer} from '@material-ui/core';
import Form from "../form/form";
import Posts from "../posts/posts";
import {getPosts} from '../../actions/posts';
import { useDispatch } from "react-redux";
import useStyles from './styles';


const Home=()=>{
  const classes=useStyles();
  const dispatch=useDispatch();
  const [currentId,setCurrentId]=useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return(
  <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="center" alignItems="stretch" spacing={3} >
            <Grid item xs={12} sm={9}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
  );
}
export default Home;