import * as React from 'react';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import hotelsData from '../data/hotelsData';

function Hotels () {

    const styles = {

        heroBox: {
            backgroundImage: `url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/348980987.jpg?k=015958abac95804ca8a859ec828b3c147936b950964aa59a9e4dab84e560016e&o=&hp=1')`,
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
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            padding: "15px 30px",
        },

        pageDescription: {
            textAlign: 'center',
            marginTop: "30px",
            marginBottom: "50px",
        },

        boxOuter: {
            marginLeft: "100px",
            marginRight: "100px",
            marginBottom: "50px",
            backgroundColor: '#eedcae',
            borderColor: '#fdf1d3',
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
        },

        learnMore: {
            marginTop: "10px",
            color: "black",
            borderColor: "black",
            '&:hover': {
                borderColor: "black",
                backgroundColor: "lightgray"
            }
        },

        location: {
            color: "grey",
            marginBottom: "15px"
        }
              
    }

        
    return(
        <>
            <Navbar/>
{/* ****************************** MAIN TITLE ****************************** */}
        <Box sx={styles.heroBox} style={{color: "black"}}>
            <Box sx={styles.heroBoxText}>Hotels  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box>
        </Box>
        
        <Box sx={styles.boxOuter}>
                <Typography sx={styles.pageDescription} variant="h4"><strong>“SLEEPLESS NIGHTS & CITY <span style={{color: "darkred"}}> LIGHTS</span>.”</strong></Typography>
                <List sx={{width: '1500', maxWidth: '1700', bgcolor: 'background.paper'}}>
                {Object.keys(hotelsData).map((key, idx) => <>
                        <ListItem sx={styles.foodItem} key={idx}>
                            <Grid container sx={styles.foodItemContainer}>
                                <Grid item md={4}>
                                    <img alt={hotelsData[key].name} className="item-image" src={hotelsData[key].image} style={{ height: 200, width: 350 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography sx={styles.foodTitle} variant="h6"><strong>{hotelsData[key].name}</strong></Typography>
                                    <Typography sx={styles.location}>{hotelsData[key].location}</Typography>
                                    <Typography>{hotelsData[key].description}</Typography>
                                    <Typography sx={styles.foodType}>Price: {hotelsData[key].costCategory}</Typography>
                                    <Button sx={styles.learnMore} variant="outlined" href={hotelsData[key].website}>Book on Hotel Website</Button>
                                </Grid>  
                            </Grid>
                        </ListItem>
                        <Divider component="li" />
                    </>)}        
                </List>

            </Box>
        
        </>
    )
}

export default Hotels;