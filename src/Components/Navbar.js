import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Navbar () {
    const styles = {

        // heroBox: {
        //     backgroundImage: `url('https://cdn.wallpapersafari.com/13/97/OiPluc.jpg')`,
        //     height: '500px',
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        //     position:"relative",
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     color: "#fff",
        //     fontSize: "5rem",
        //     marginBottom: 3      
        //   },

        myAppBar: {
          backgroundColor: 'white',
          color: 'black',
          textAlign: 'left',
        },
        navLinks: {
            marginLeft: '50px',
            marginRight: '50px',
        }
    }

    return(
        <>

        <AppBar position="static" sx={styles.myAppBar}>
        <Toolbar>
          <Typography variant="h6" component="div"sx={{ flexGrow: 1 }}>
            Hungry in Manhattan
          </Typography>
          {/* ****************************** NAV BAR STUFF ****************************** */}
            <Link href='/restaurants' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title' ><strong>RESTAURANTS</strong></p></Link>
            <Link href='/attractions' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title'><strong>ATTRACTIONS</strong></p></Link>
            <Link href='/hotels' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title'><strong>HOTELS</strong></p></Link>
            <Link href='/flights' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title'><strong>FLIGHTS</strong></p></Link>
        </Toolbar>
      </AppBar>
      {/* ****************************** MAIN TITLE ****************************** */}
      {/* <Box sx={styles.heroBox}>Hungry  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box> */}
    
        </>
      
    )
}

export default Navbar;