import * as React from 'react';
import Navbar from '../Components/Navbar';
import restaurantData from '../data/restaurantData';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import {useParams} from "react-router-dom";

function RestaurantDisplay() {
    const {name} = useParams();
    const data = restaurantData[name];

    const styles = {

        briefOuterBox: {
            borderColor: '#3f612e',
            backgroundColor: '#5a724e',
            marginLeft: "100px",
            marginRight: "100px",
            marginTop: "30px",
            marginBottom: "30px",
            borderStyle: 'solid',
            paddingBottom: "20px",
            paddingTop: "20px",
            paddingRight: '20px',
            paddingLeft: '20px',
            alignItems: "center",
        },
        
        featureContainer: {
            marginTop: "30px",
            marginBottom: "30px"
        },

        type: {
            color: "inherit",
            marginTop: "15px"
        },
        
        featureImage:{
            marginLeft: "30px",
            alignItems: "center"
        },

        featureDescription: {
            paddingRight: "30px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            color: "white"
        },

        gap: {
            marginTop: "20px"
        },

        tags: {
            fontSize: "20px"
        }

    }

    return <>
        <Navbar />
        
        {/* ********** TOP IMAGE + DESCRIPTION ********** */}
        <Box sx={styles.briefOuterBox}>
            <Grid container sx={styles.featureContainer}>
                {/* ********** IMAGE (LEFT)********** */}
                <Grid item md={6}>
                    <img alt={data.name} src={data.image} style={styles.featureImage} height="450px" width="90%"/>
                </Grid>
                {/* ********** DESCRIPTION (RIGHT) ********** */}
                <Grid item md={6} sx={styles.featureDescription}>
                    <Typography variant="h2"><strong>{data.name}</strong></Typography>
                    <Typography variant="h6" sx={styles.gap}>{data.description}</Typography>
                    <Link variant="h6" href={data.website} sx={styles.type}>{data.website}</Link>
                </Grid>                 
            </Grid>
            <Divider color="white" />
            <Grid container sx={styles.featureContainer}>
                {/* ********** IMAGE (LEFT)********** */}
                <Grid item md={6}>
                    <img alt="Google Maps" src={data.mapImage} style={styles.featureImage} height="450px" width="90%"/>
                </Grid>
                {/* ********** DESCRIPTION (RIGHT) ********** */}
                <Grid item md={6} sx={styles.featureDescription}>
                    <Typography sx={styles.tags}><strong>District:</strong> {data.district}</Typography>
                    <Typography sx={styles.tags}><strong>Price:</strong> {data.costCategory}</Typography>
                    <Typography sx={styles.tags}><strong>Type:</strong> {data.type}</Typography>
                    <Typography sx={styles.tags}><strong>Hours:</strong> {data.hours}</Typography>
                </Grid>                 
            </Grid>
        </Box>
    </>
}

export default RestaurantDisplay;