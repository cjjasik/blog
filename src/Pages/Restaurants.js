import * as React from 'react';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import restaurantData from '../data/restaurantData';


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
            marginBottom: 5      
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
            borderColor: '#f5e1e1',
            backgroundColor: '#fff7f7',
            borderStyle: 'solid',
            paddingBottom: "50px",
            paddingTop: "20px",
            paddingRight: '20px',
            paddingLeft: '20px',
            alignItems: "center",
        },

        boxOptions: {
            backgroundCOlor: 'white',
            alignItems: "center",
        },

        media: {
            height: 240,
          },

        foodType: {
            color: "grey",
            marginTop: "12px"
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
            left: "70%",
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
        <>
            <Navbar/>
{/* ****************************** MAIN TITLE ****************************** */}
            <Box sx={styles.heroBox} style={{color: "black"}}>Restaurants  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px", textAlight: "center"}}> in</span>  Manhattan</Box>

            <Box sx={styles.boxOuter}>
                <Typography sx={styles.pageDescription} variant="h4"><strong>“LIFE IS UNCERTAIN. EAT DESSERT <span style={{color: "darkred"}}> FIRST</span>.” – Ernestine Ulmer</strong></Typography>
                <List sx={{width: '1500', maxWidth: '1700', bgcolor: 'background.paper'}}>
                    {Object.keys(restaurantData).map((key, idx) => <>
                        <ListItem sx={styles.foodItem} key={idx}>
                            <Grid container sx={styles.foodItemContainer}>
                                <Grid item md={4}>
                                    <img alt={restaurantData[key].name} className="item-image" src={restaurantData[key].image} style={{ height: 200, width: 350 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography sx={styles.foodTitle} variant="h6"><strong>{restaurantData[key].name}</strong></Typography>
                                    <Typography>{restaurantData[key].description}</Typography>
                                    <Grid container>
                                        <Grid item md={6}>
                                            <Typography sx={styles.foodType}>Cuisine: {restaurantData[key].type}</Typography>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Button sx={styles.learnMore} variant="outlined" href={"/restaurants/" + key}>Learn More</Button>
                                        </Grid>
                                    </Grid>
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

export default Restaurants;

// HERO IMAGE RESTAURANTS
// https://media.timeout.com/images/105802468/750/562/image.jpg

// In a five-story, 19th-century townhouse, The Dead Rabbit offers three distinctly different dining and drinking experiences: The Taproom, The Parlor, and the Occasional Room. It’s a concept that works, and the bar remain the most awarded pub in the world. Stop by to try their iconic fish and chips, Irish coffee, and their Bailey's infused tirimisu.