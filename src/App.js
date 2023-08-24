import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material';

function App() {

  const styles = {
    myAppBar: {
      backgroundColor: 'black'
    },
    heroBox: {
      backgroundImage: `url('https://cdn.wallpapersafari.com/40/20/Dfa5ZM.jpg')`,
      height: '500px',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position:"relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontColor: "#fff",
      fontSize: "4rem"
    }
  }
  
  return (
    <div className="App">
      <AppBar position="static" sx={styles.myAppBar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Manhattan Foodie
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={styles.heroBox}>Hungry in Manhattan</Box>
    </div>
  );
}

export default App;
