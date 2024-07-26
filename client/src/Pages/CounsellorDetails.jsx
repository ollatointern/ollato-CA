import React from 'react'
import styles from './pages.module.css';
import { useLocation } from 'react-router-dom';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Button, Stack, Chip, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
const CounsellorDetails = () => {
    const location = useLocation();
    const { counsellor } = location.state || {};
  
    if (!counsellor) {
      return <Typography variant="h6">Counsellor not found</Typography>;
    }
  return (
    <>
<Container >
<Stack style={{
      marginBottom:'10px'
    }}>
  <Typography>
    <Link to='/counselling'> 
      Back
    </Link>
  </Typography>
</Stack>
<Card sx={{ display: 'flex', maxWidth: 100 + '%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2c3e50', color: 'white', p: 2, width: '40%' }}>
        <Box sx={{ width: '100%', mb: 2 }}>
          <ReactPlayer url={counsellor.videoUrl} width="100%" height="200px" controls />
        </Box>
        <Typography variant="h4">{counsellor.sessionsTaken}</Typography>
        <Typography>Session Taken</Typography>
        <Typography>Consultation mode: Online</Typography>
        <Typography>(Video, Call, Chat)</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Schedule Now
        </Button>
      </Box>
      <CardContent sx={{ width: '60%' }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={counsellor.name} src={counsellor.image} sx={{ width: 56, height: 56 }} />
          <Stack>
            <Typography variant="h6">{counsellor.name}</Typography>
            <Typography variant="subtitle2">{counsellor.degree}</Typography>
          </Stack>
        </Stack>
        <Typography variant="subtitle1" mt={2}>Expertise</Typography>
        <p>dynamic</p>
        {/* <Stack direction="row" spacing={1} flexWrap="wrap">
          {counsellor.expertise.map((skill, index) => (
            <Chip key={index} label={skill} />
          ))}
        </Stack> */}
        <Typography variant="subtitle1" mt={2}>Languages</Typography>
        <p>dynamic       </p>
        {/* <Stack direction="row" spacing={1}>
          {counsellor.languages.map((language, index) => (
            <Chip key={index} label={language} />
          ))}
        </Stack> */}
        <Typography variant="subtitle1" mt={2}>Counselling</Typography>
        <Chip label={counsellor.counseling} />
      </CardContent>
    </Card>
</Container>
     {/* <Container>
     <Box my={4} style={{
      display:'flex',
      alignItems:'center',
      gap:'60px',
      border:'1px solid green'
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
      <Box >
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
        <Box style={{
          border:'2px solid pink',
          padding:'10px',
          display:'flex',
          alignItems:'center'
        }}>
         <Stack style={{
          border:'1px solid red',
          padding:'10px'
         }}>
           
         </Stack>

        </Box> */}
          {/* <Card style={{
            width:'100%',
            display:'flex',
            padding:'20px',
            border:'1px solid red'

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
          </Card> */}
        {/* </Grid>
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
    </Container> */}
    </>
  )
}

export default CounsellorDetails