import React from 'react';
import theme from '../theme';
import Navbar from '../Components/Navbar';
// ********** MUI IMPORTS **********
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


function Home() {

  const styles = {

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
      fontSize: "5rem",
      marginBottom: 3      
    },

    heroBoxText: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      padding: "15px 30px",
  },

    articleContainer: {
      paddingTop: theme.spacing(3),
      marginBottom: 10
    },

    articleTitle: {
      fontWeight: 400,
      paddingBottom: theme.spacing(3),
      textAlign: "left",
      marginBottom: 0
    },

    card: {
      maxWidth: '100%',
    },

    media: {
      height: 240,
    },

    authorBox: {
      backgroundImage: `url('https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?cs=srgb&dl=pexels-lex-photography-450597.jpg&fm=jpg')`,
      height: '405px',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position:"relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "5rem",
      marginBottom: 7      
    },

    authorCard: {
      maxWidth: '100%',
    },

    authorText: {
      marginTop: "10px"
    },

    authorTitle: {
      textAlign: "center"
    },

    learnMoreButton: {
      color: "black",
      '&:hover': {
        borderColor: "black",
        borderStyle: "solid 2px",
        backgroundColor: "lightgray"
    }
    }

  }
  
  return (
    <div className="Home">
      <Navbar/>

{/* ****************************** MAIN TITLE ****************************** */}
<Box sx={styles.heroBox}>
  <Box sx={styles.heroBoxText}> HUNGRY  <span style={{color: "darkred", marginLeft: "130px", marginRight: "100px"}}> in</span>  MANHATTAN</Box>
  </Box>

{/* ****************************** FEATURED ****************************** */}
      <Container sx={styles.articleContainer} maxWidth="false">
        <Typography sx={styles.articleTitle} variant="h4">
            Featured:
        </Typography>
        <Grid container spacing={3}>


{/* ****************************** CARD 1 ****************************** */}
          <Grid item md={2}>
          <Card className={styles.card} sx={{ maxWidth: 345, height: 345}}>
            <CardMedia className={styles.media}
              sx={{ height: 140 }}
              image="https://images.squarespace-cdn.com/content/v1/6231ff6bf0d49978468462a8/623bb58f-b406-49d2-95cd-d30f9a9d679e/Screenshot+2022-04-11+at+17.37.38.png"
              title="dead-rabbit-pub"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dead Rabbit Irish Pub
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Visit one of the most awarded pubs in Lower Manhattan!
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={styles.learnMoreButton} size="small" href="/featured/deadRabbit">Learn More</Button>
            </CardActions>
          </Card>          
          </Grid>

{/* ****************************** CARD 2 ****************************** */}
          <Grid item md={2}>
            <Card className={styles.card} sx={{ maxWidth: 345, height: 345 }}>
              <CardMedia className={styles.media}
                sx={{ height: 140 }}
                image="https://res.cloudinary.com/the-infatuation/image/upload/v1656119082/cms/EmilyS_Rubirosa_002_20_1.jpg"
                title="rubirosa-pizza"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Rubirosa Ristorante
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Is the iconic tie-dye pizza worth it?
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={styles.learnMoreButton}  size="small" href="/featured/rubirosa">Learn More</Button>
              </CardActions>
            </Card> 
          </Grid>
          
{/* ****************************** CARD 3 ****************************** */}
          <Grid item md={2}>
            <Card className={styles.card} sx={{ maxWidth: 345, height: 345 }}>
              <CardMedia className={styles.media}
                sx={{ height: 140 }}
                image="https://images.squarespace-cdn.com/content/v1/547bbc7ee4b010fe66ba7834/1615421670140-Q19SN5983VN99236U5X3/image-asset.jpeg"
                title="grace-street"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Grace Street Coffee & Desserts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A hidden gem in Koreatown competing for the title of Best Cheesecake in New York City!
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={styles.learnMoreButton}  size="small" href="/featured/graceStreet">Learn More</Button>
              </CardActions>
            </Card> 
            
          </Grid>

{/* ****************************** CARD 4 ****************************** */}
          <Grid item md={2}>
            <Card className={styles.card} sx={{ maxWidth: 345, height: 345 }}>
              <CardMedia className={styles.media}
                sx={{ height: 140 }}
                image="https://media.cntraveler.com/photos/58599e53857eae6855ec5a5d/16:9/w_2560,c_limit/best-restaurants-NYC-lilia-2016.jpg"
                title="lilia"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lilia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  In a redone auto-body shop, one of New York's most sought-after restaurants offers wood-fired Italian fare & housemade pastas.
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={styles.learnMoreButton} size="small" href="/featured/lilia">Learn More</Button>
              </CardActions>
            </Card>
            
          </Grid>

{/* ****************************** CARD 5 ****************************** */}
          <Grid item md={2}>
            <Card className={styles.card} sx={{ maxWidth: 345, height: 345 }}>
              <CardMedia className={styles.media}
                sx={{ height: 140 }}
                image="https://sweeneytoddbroadway.com/wp-content/uploads/2022/12/tw.png"
                title="sweeney-todd"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Josh Groban's Return to Sweeney Todd
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  How the long awaited return of Josh Groban meets the iconic broadway musical.
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={styles.learnMoreButton} size="small" href="/featured/sweeneyTodd">Learn More</Button>
              </CardActions>
            </Card>
            
          </Grid>

{/* ****************************** CARD 6 ****************************** */}
        <Grid item md={2}>
            <Card className={styles.card} sx={{ maxWidth: 345, height: 345 }}>
              <CardMedia className={styles.media}
                sx={{ height: 140 }}
                image="https://images.squarespace-cdn.com/content/v1/581ff5eef5e231b25f9c12db/1693001710745-2RPHPHOOR0E12V0KOQ5F/NY_Press+FInal-01.png?format=2500w"
                title="sweeney-todd"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hangawi Korean Festival 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Celebrate the vibrant community spirit of Chuseok at a curated pop-up market!
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={styles.learnMoreButton} size="small" href="/featured/hangawi">Learn More</Button>
              </CardActions>
            </Card>
            
          </Grid>
           
        </Grid>
      </Container>

      {/* ****************************** ABOUT THE AUTHOR ****************************** */}
<Box sx={styles.authorBox}>
    <Card className={styles.authorCard} sx={{maxWidth: 500, height: 200}}>
      <CardContent>
        <Typography sx={styles.authorTitle} variant="h5">"New York is not a city. It’s a world."</Typography>
        <Divider/>
        <Typography sx={styles.authorText}>From the bustling streets to the history around every corner, New York City is truly a masterpiece. You could spend a lifetime in New York City and still never fully see it all. So, here is just the first step to getting to know the greatest city in the world. </Typography>
      </CardContent>
    </Card>
</Box>

    </div>
  );
}

export default Home;
