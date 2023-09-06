import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


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
        <AppBar position="static" sx={styles.myAppBar}>
        <Toolbar>
          <Typography variant="h6" component="div"sx={{ flexGrow: 1 }}>
            Manhattan Foodie
          </Typography>
          {/* ****************************** NAV BAR STUFF ****************************** */}
            <Link href='/restaurants' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title' ><strong>RESTAURANTS</strong></p></Link>
            <Link href='/attractions' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title'><strong>ATTRACTIONS</strong></p></Link>
            <Link href='/hotels' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title'><strong>HOTELS</strong></p></Link>
            <Link href='/flights' underline="none" color="inherit" sx={styles.navLinks}><p className='tab-title'><strong>FLIGHTS</strong></p></Link>
        </Toolbar>
      </AppBar>
      
    )
}

export default Navbar;