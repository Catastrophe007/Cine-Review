import React from "react";
import {AppBar,Button,Toolbar,Typography,Avatar} from '@material-ui/core';
import movies from "../../images/movies.jpg";
import { Link,useNavigate } from "react-router-dom";
import useStyles from './styles';

const Navbar=()=>{
  const classes=useStyles();
  const user=null;
 const navigate=useNavigate();
  return(
<AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography  className={classes.heading} component={Link} to="/" variant="h3" align="center">CineReview</Typography>
        <img className={classes.image}  src={movies} alt="movies" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
       {user ?(
        <div className={classes.profile}>
          <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageurl}/>
          <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
          <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
        </div>
       ):(
          <Button variant="contained" color="primary" component={Link} to="/auth">Sign In</Button>
       )}

        </Toolbar>
      </AppBar>
)
};
export default Navbar;
