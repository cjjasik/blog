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
      backgroundImage: `liniear-gradient.(rgba(0, 0, 0.5), rgba(0, 0, 0.5)), url('https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`,
      height: '500px',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      positoin:"relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem"
    }
  }
  
  return (
    <div className="App">
      <AppBar position="static" sx={styles.myAppBar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hungry in Manhattan
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={styles.heroBox}>Foodie Blog</Box>
    </div>
  );
}

export default App;
