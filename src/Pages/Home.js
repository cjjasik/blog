import React from 'react';
import theme from '../theme';
import Navbar from '../Components/Navbar';
// ********** HOME IMPORT **********

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

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
  }
  
  return (
    <div className="Home">
      <Navbar/>
{/* ****************************** MAIN TITLE ****************************** */}
      <Box sx={styles.heroBox}>Hungry  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box>

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
              <Button size="small">Learn More</Button>
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
                <Button size="small">Learn More</Button>
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
                  The best cheesecake in New York City
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card> 
            
          </Grid>

          {/* ****************************** CARD 4 ****************************** */}
          <Grid item md={2}>
            <Card className={styles.card} sx={{ maxWidth: 345, height: 345 }}>
              <CardMedia className={styles.media}
                sx={{ height: 140 }}
                image="https://d1ralsognjng37.cloudfront.net/11148194-5742-4297-9cd9-87e78749b879.webp"
                title="ny-peeps"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  NY Peeps Kitchen
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The ultimate Korean Fried Chicken joint
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            
          </Grid>

{/* ****************************** CARD 5 ****************************** */}
          <Grid item md={2}>
            <Card className={styles.card} sx={{ maxWidth: 345, height: 345 }}>
              <CardMedia className={styles.media}
                sx={{ height: 140 }}
                image="https://sweeneytoddbroadway.com/wp-content/uploads/2022/12/tw.png"
                title="sweeny-todd"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Josh Groban in Sweeny Todd
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  How the long awaited return of Josh Groban meets the iconic broadway musical
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            
          </Grid>

{/* ****************************** CARD 6 ****************************** */}
        <Grid item md={2}>
            <Card className={styles.card} sx={{ maxWidth: 345, height: 345 }}>
              <CardMedia className={styles.media}
                sx={{ height: 140 }}
                image="https://sweeneytoddbroadway.com/wp-content/uploads/2022/12/tw.png"
                title="sweeny-todd"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Josh Groban in Sweeny Todd
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  How the long awaited return of Josh Groban meets the iconic broadway musical
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            
          </Grid>
            
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
