import * as React from 'react';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import flightsData from '../data/flightsData';

function Flights () {

    const styles = {

        heroBox: {
            backgroundImage: `url('https://images.hdqwalls.com/wallpapers/plane-over-building-ic.jpg')`,
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
            marginBottom: 5      
          },

          heroBoxText: {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            padding: "15px 30px",
        },

        pageDescription: {
            textAlign: 'center',
            marginTop: "30px",
            marginBottom: "50px",
            color: "white",
        },

        boxOuter: {
            marginLeft: "100px",
            marginRight: "100px",
            marginBottom: "50px",
            backgroundColor: '#8bb8c2',
            borderColor: '#74a7b3',
            borderStyle: 'solid',
            paddingBottom: "50px",
            paddingTop: "20px",
            paddingRight: '20px',
            paddingLeft: '20px',
            alignItems: "center",
        },

        foodType: {
            color: "grey",
            marginTop: "15px"
        },

        foodItem: {
            marginBottom: "30px",
            marginTop: "30px"
        },

        foodItemContainer: {
            marginLeft: "75px",
            marginRight: "75px"
        } ,

        learnMore: {
            marginTop: "10px",
            color: "black",
            borderColor: "black",
            '&:hover': {
                borderColor: "black",
                backgroundColor: "lightgray"
            }
        },

        foodTitle: {
            marginBottom: "5px"
        }
        
    }

        

    return(
        
        <div className="flights">
            <Navbar/>
{/* ****************************** MAIN TITLE ****************************** */}
            <Box sx={styles.heroBox} style={{color: "black"}}>
                <Box sx={styles.heroBoxText}>Flights  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box>
            </Box>
        
            <Box sx={styles.boxOuter}>
                <Typography sx={styles.pageDescription} variant="h4"><strong>“WELCOME TO THE CONCRETE <span style={{color: "darkred"}}> JUNGLE</span> .”</strong></Typography>
                <List sx={{width: '1500', maxWidth: '1700', bgcolor: 'background.paper'}}>
                {Object.keys(flightsData).map((key, idx) => <>
                        <ListItem sx={styles.foodItem} key={idx}>
                            <Grid container sx={styles.foodItemContainer}>
                                <Grid item md={4}>
                                    <img alt={flightsData[key].airline} className="item-image" src={flightsData[key].image} style={{ height: 200, width: 350 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography sx={styles.foodTitle} variant="h6"><strong>{flightsData[key].airline}</strong></Typography>
                                    <Typography>{flightsData[key].departureAirport} - {flightsData[key].arrivalAirport}</Typography>
                                    <Typography>{flightsData[key].departureDatetime} - {flightsData[key].arrivalDatetime}</Typography>
                                    <Typography>Duration: {flightsData[key].duration}</Typography>
                                    <Typography sx={styles.foodType}>Price: {flightsData[key].price} ({flightsData[key].seatsLeft} seats remaining)</Typography>
                                    <Button sx={styles.learnMore} variant="outlined" href={flightsData[key].website}>Book on Airline Website</Button>
                                </Grid>  
                            </Grid>
                        </ListItem>
                        <Divider component="li" />
                    </>)}
                </List>
            </Box>

        </div>
    )
}

export default Flights;


// HERO IMAGE FLIGHT
// https://loving-newyork.com/wp-content/uploads/2017/11/5-Tips-Tricks-NYC-Trip-171108105604001.jpg