import React,{useState,useEffect} from "react";
import {Container,Grow,Grid, TableContainer} from '@material-ui/core';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import useStyles from "./styles";

import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Auth from "./components/Auth/Auth";


const App =()=>{
  return(
    <BrowserRouter>
    <Container maxWidth="lg" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>

      </Routes>
    </Container>
    </BrowserRouter>

  )
}
export default App;
