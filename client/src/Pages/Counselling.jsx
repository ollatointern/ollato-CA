

import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container, Box } from '@mui/material';
import styles from './pages.module.css';
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CounsellorImg from '../assets/counsellor.jpg'
import { Link } from 'react-router-dom';
const Counselling = () => {
    const [counsellors, setCounsellors] = useState([]);
    // const history = useHistory();
    const navigate = useNavigate();
    useEffect(() => {
        // Simulate fetching data
        const fetchData = async () => {
          const data = [
            {
              id: 1,
              name: "John Matrin",
              rating: 3.5,
              image:CounsellorImg,
              bookNowLink: "#",
              details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.    ",
              slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
              date: "05 March 2022"   
            },
            {
              id: 2,
              name: "John Matrin",
              rating: 3.5,
              image: "https://via.placeholder.com/150",
              bookNowLink: "#",
              details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.",
              slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
              date: "05 March 2022"  
            },
            {
              id: 3,
              name: "John Matrin",
              rating: 3.5,
              image: "https://via.placeholder.com/150",
              bookNowLink: "#",
              details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.",
              slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
              date: "05 March 2022"  
            },
            {
              id: 4,
              name: "John Matrin",
              rating: 3.5,
              image: "https://via.placeholder.com/150",
              bookNowLink: "#",
              details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.",
              slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
              date: "05 March 2022"  
            },
            {
              id: 5,
              name: "John Matrin",
              rating: 3.5,
              image: "https://via.placeholder.com/150",
              bookNowLink: "#",
              details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.",
              slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
              date: "05 March 2022"  
            },
            {
              id: 6,
              name: "John Matrin",
              rating: 3.5,
              image: "https://via.placeholder.com/150",
              bookNowLink: "#",
              details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.",
              slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
              date: "05 March 2022"  
            }
          ];
          setCounsellors(data);
        };
    
        fetchData();
      }, []);

      const handelBookNow = (counsellor) => {
        navigate(`/counsellor/${counsellor.id}`, {state: {counsellor}})
      };
  return (
    <>
    <Container style={{
        // border:'1px solid red',
        width:'100%',
        padding:'40px',
        borderRadius: '3px',
        background: '#ffffff',
        boxShadow: ' 6px 6px 8px #d5d5d5  -6px -6px 8px #ebebeb',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',

    }}>
      <Box my={1} style={{
        // border:'1px solid yellow',
        width:'100%', 
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        gap:'60px'
      }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Counselling
        </Typography>
        <Typography variant="h5" color="textSecondary">
        <Link to="/SessionHistory" style={{
          textDecoration:'none',
          color:'grey'
         }}>Session History</Link>
        </Typography>
      </Box>
      <Box mb={2} mt={2} style={{
        // border:'1px solid blue',
        width:'100%'
      }}>
        <Typography variant="h5" component="h3"
        style={{}}
        >
          Book Session
        </Typography>
      </Box>
      <Grid container spacing={1} className={styles.cardWrapper} style={{
        // border:'1px solid red',
        padding:'10px',
        marginRight:'0',
        margin:'10px',
        background: '#ffffff',
       
        
        // width:'100%',

      }}>
        {counsellors.map(counsellor => (
          <Grid item key={counsellor.id} xs={12} sm={6} md={4} style={{
            // border:'2px solid green',
            padding:'4px'
          }}>
            <Card style={{
                height:'430px',
                borderRadius:'12px',
                width:'300px',
                margin:'24px',
                // border:'2px solid pink',
                position:'relative'
            }}>
              <CardMedia
                component="img"
                alt={counsellor.name}
                height="300px"
                
                image={counsellor.image}
                title={counsellor.name}
                style={{
                    borderEndStartRadius:'12px',
                    borderBottomRightRadius:'12px',
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {counsellor.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Rating: {counsellor.rating}/5
                </Typography>
              </CardContent>
              <Button size="large" variant="contained" color="primary" 
              style={{
                position:'absolute',
                right:'6px',
                bottom:'6px',
                background:'none',
                color:'black',
                fontWeight:'600',
                boxShadow:'none'

              }}
              onClick={() => handelBookNow(counsellor)}
              >
                BOOK NOW
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container> 
    </>
  )
}

export default Counselling