import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Navbar () {
    const styles = {

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

        <AppBar position="sticky" elevation={0} sx={styles.myAppBar}>
        <Toolbar>
          <Link href='/'variant="h6" underline="none" color="inherit" sx={{ flexGrow: 1 }}>
            HUNGRY <span style={{color: "darkred"}}>in</span> MANHATTAN
          </Link>
          {/* ****************************** NAV BAR STUFF ****************************** */}
            <Link href='/restaurants' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title' ><strong>RESTAURANTS</strong></p></Link>
            <Link href='/activities' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title'><strong>ACTIVITIES</strong></p></Link>
            <Link href='/hotels' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title'><strong>HOTELS</strong></p></Link>
            <Link href='/flights' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title'><strong>FLIGHTS</strong></p></Link>
        </Toolbar>
      </AppBar>
    
        </>
      
    )
}

export default Navbar;