import React from 'react'
import './package.css'
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import Pimg from '../assets/pimg1.jpg'
import { styled } from '@mui/material';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
const StyledButton=styled(Button)(({theme})=>({
  right: '10px',
  bottom: '10px',
  position: 'absolute',
  background: '#B75B2E',
  color: '#fff',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#fff',
    border: '1px solid #B75B2E',
    color: 'black',
},
}))

const packages = [
  {
    id: 1,
    title: "Online Testing, Report Generation",
    price: "999/- Rs + 18% GST",
    image: Pimg, // replace with actual image path
    details: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on",
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on",
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on"
    ]
  },
  {
    id: 2,
    title: "Online Testing, Report Generation, Virtual Counselling",
    price: "1499/- Rs + 18% GST",
    image:Pimg,
    details: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on",
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on",
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on"
    ]
  },
  {
    id: 3,
    title: "Online Testing, Report Generation.",
    price: "2499/- Rs + 18% GST",
    image: Pimg,
    details: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on",
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on",
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on"
    ]
  }
];


const Package = () => {
   const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const detailsRef = useRef(null);
   const handelViewDetails = (pkg) => {
    setSelectedPackage(pkg);
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
   };
 
  return (
    <>
       <div className="p-wrapper">
        <div className="p-container">
        <Box sx={{ flexGrow: 1, p: 3 }}>
      <div style={{
        display:'flex',
        // gap:'60px',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
      <Typography variant="h4" mb={3} gutterBottom>
        Your courses Package
      </Typography>
       <div  style={{
        display:'flex',
        alignItems:'center',
        gap:'20px'
       }}>
       <Typography variant="h5" mb={3} gutterBottom>
        <Link to='/PackageHistory'  style={{
          textDecoration:'none',
          color:'black'
        }}> <button 
        style={{
          padding:'14px',
          width:'200px',
          background:'#B75B2E',
          color:'#fff',
          border:'none',
          borderRadius:'12px',
          transition: 'background-color 0.3s ease',
          cursor:'pointer',
         '&:hover': {
           backgroundColor: '#fff',
           border: '1px solid #B75B2E',
           color: 'black',
          
        }
        
        }}
        >
          Package History
        </button></Link>
      </Typography>
      <Typography variant="h5" mb={3} gutterBottom>
        <Link to='/ActiveCourses'  style={{
          textDecoration:'none',
          color:'black'
        }}> <button 
        style={{
          padding:'14px',
          width:'200px',
          background:'#B75B2E',
          color:'#fff',
          border:'none',
          borderRadius:'12px',
          transition: 'background-color 0.3s ease',
          cursor:'pointer',
         '&:hover': {
           backgroundColor: '#fff',
           border: '1px solid #B75B2E',
           color: 'black',
          
        }
        
        }}
        >
          Active Courses
        </button></Link>
      </Typography>
       </div>
      </div>
      <Grid container spacing={4}>
        {packages.map((pkg) => (
          <Grid item xs={12} sm={6} md={4} key={pkg.id}>
            <Card style={{
              borderRadius:'16px',
              position:'relative',
              height:'300px'
            }}>
              <CardMedia
                component="img"
                height="150"
                image={pkg.image}
                alt={pkg.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pkg.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pkg.price}
                </Typography>
         
                <StyledButton variant="contained" size="small"
                onClick={() => handelViewDetails(pkg)}
                >
      View Details
    </StyledButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedPackage && (
      <Box mt={5}>
        <Typography variant="h5" mb={3} gutterBottom>
          Package  Details
        </Typography>
        <Grid container spacing={3}>
         <Grid item xs={12} sm={12}>
            <Card  style={{
              display:'flex'
            }}>
            <CardMedia
                component="img"
                height="250"
                width="100px"
                image={Pimg}// replace with actual image path
                alt="Package 01"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {selectedPackage.title}
                </Typography>
                {selectedPackage.details.map((detail, index) => (
                  <Typography key={index} variant="body2" color="text.secondary">
                    {index + 1}. {detail}
                  </Typography>
                ))}
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Active Package Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    )};
    </Box>
        </div>
       </div>
    </>
  )
}

export default Package