import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
// import { styled } from '@mui/material';

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
    }
  }
  
  return (
    <div className="App">
      <AppBar position="static" sx={styles.myAppBar}>
        <Toolbar>
          <Typography variant="h6" component="div"sx={{ flexGrow: 1 }}>
            Manhattan Foodie
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={styles.heroBox}>Hungry  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box>

      <Container></Container>
    </div>
  );
}

export default App;
