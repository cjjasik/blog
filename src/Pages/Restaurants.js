import * as React from 'react';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';

function Restaurants () {

    const styles = {

        heroBox: {
            backgroundImage: `url('https://robbreport.com/wp-content/uploads/2018/07/manhatta_dining-room_day_credit-emily-andrews_1.jpg')`,
            height: '500px',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position:"relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "5rem",
            marginBottom: 3      
          },
        }
    
    return(
        <>
            <Navbar/>
{/* ****************************** MAIN TITLE ****************************** */}
<Box sx={styles.heroBox} style={{color: "black"}}>Restaurants  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box>

            <Typography variant="h3">RESTAURANTS</Typography>
            <body>Where to go when you have the all the cultures of the world in one city</body>


    </>
    )
}

export default Restaurants;

// HERO IMAGE RESTAURANTS
// https://media.timeout.com/images/105802468/750/562/image.jpg