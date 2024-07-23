import React from 'react'
import styles from './pages.module.css';
import { useLocation } from 'react-router-dom';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const CounsellorDetails = () => {
    const location = useLocation();
    const { counsellor } = location.state || {};
  
    if (!counsellor) {
      return <Typography variant="h6">Counsellor not found</Typography>;
    }
  return (
    <>
     <Container>
     <Box my={4} style={{
      display:'flex',
      alignItems:'center',
      gap:'60px'
     }}>
        <Typography variant="h4" component="h2" gutterBottom>
         Counselling
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
         <Link to="/SessionHistory" style={{
          textDecoration:'none',
          color:'grey'
         }}>Session History</Link>
        </Typography>
     </Box>
      <Box my>
        <Typography variant="h4" component="h2" gutterBottom>
          Book Session
        </Typography>
      </Box>
      <Grid container spacing={0} style={{
        // border:'2px solid pink',
        display:'flex',
        flexDirection:'column',
        padding:'10px'
      }}>
        <Grid item xs={12} sm={12} md={12}>
          <Card style={{
            width:'100%',
            display:'flex',
            padding:'6px'

          }}>
            <CardMedia
              component="img"
              alt={counsellor.name}
              height="250"
              image={counsellor.image}
              title={counsellor.name} 
              style={{
                width:'200px',
                borderRadius:'16px'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {counsellor.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {counsellor.details}
              </Typography>
              <Button size="large" variant="contained" color="primary" style={{
                marginTop:'20px',
                background:'none',
                color:'black',
                boxShadow:'none'
              }}>
                BOOK NOW
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
        <Box mt={2} mb={2} style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          // border:'1px solid blue',
          width:'100%',
          padding:'10px'
        }}>
            <Typography variant="h6" component="h4" gutterBottom>
            Choose Availability Slot
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {counsellor.date}
            </Typography>
          </Box>
         
          <Grid container spacing={0} 
          style={{
            width:'100%',
            // border:'1px solid black'
          }}>
            {counsellor.slots.map((slot, index) => (
              <Grid item key={index} xs={4} sm={3} md={2} margin={2}>
                <Button variant="outlined" fullWidth>
                  {slot}
                </Button>
              </Grid>
            ))}
          </Grid>
          
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default CounsellorDetails