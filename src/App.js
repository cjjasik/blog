import React from 'react';
// Router Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Restaurants from "./Pages/Restaurants";
import Attractions from "./Pages/Attractions";
import Hotels from "./Pages/Hotels";
import Flights from "./Pages/Flights";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import theme from './theme';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function App() {

  const styles = {
    myAppBar: {
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'left',
    },

    heroBox: {
      backgroundImage: `url('https://cdn.wallpapersafari.com/13/97/OiPluc.jpg')`,
      height: '500px',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position:"relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "5rem"
    },

    articleContainer: {
      paddingTop: theme.spacing(3)
    },

    articleTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3),
      textAlign: "left"
    },

    card: {
      maxWidth: '100%',
    },

    media: {
      height: 240,
    },
  }
  
  return (
    <div className="App">
       {/* *************ROUTES************ */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/restaurants" element={<Restaurants />}></Route>
            <Route path="/attractions" element={<Attractions />}></Route>
            <Route path="/hotels" element={<Hotels />}></Route>
            <Route path="/flights" element={<Flights />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
