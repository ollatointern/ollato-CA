import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container, Box, Stack, Avatar, IconButton, TextField } from '@mui/material';
import styles from './pages.module.css';
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CounsellorImg from '../assets/counsellor.jpg'
import { Link } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Phone, VideoCall, Message, Home, Mode } from '@mui/icons-material';

const Counselling = () => {
  const [counsellors, setCounsellors] = useState([]);
  const [filteredCounsellors, setFilteredCounsellors] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [expertise, setExpertise] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [language, setLanguage] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [mode, setMode] = React.useState('');
  const [noCounsellorsFound, setNoCounsellorsFound] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          name: "John Matrin",
          rating: 3.5,
          image: CounsellorImg,
          details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.",
          slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
          date: ['07/27/2024'],
          time: ["10:00 AM"],
          expertise: ['Career Counsellor'],
          mode: ['Online Video Calling', 'Online Voice Calling'],
          duration: ['30 minutes', '60 minutes'],
          languages: ['English', 'Hindi'],
          location: ['Mumbai' , 'Ahemdabad']
        },
        {
          id: 2,
          name: "John Matrin",
          rating: 3.5,
          image: CounsellorImg,
          details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.",
          slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
          date: ['07/28/2024'],
          time: ["10:00 AM", "01:00 PM"],
          expertise: ['Mentor'],
          mode: ['Online Video Calling'],
          duration: ['30 minutes'],
          languages: ['Gujrati', 'Bengali'],
          location: ['Bengalore' , 'Hyderabad']
        },
        {
          id: 3,
          name: "John Matrin",
          rating: 3.5,
          image: CounsellorImg,
          Link: "#",
          details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.",
          slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
          date: ['07/31/2024'],
          time: ["10:00 AM"],
          expertise: ['Career Guidance'],
          mode: ['Online Video Calling', 'Online Voice Calling'],
          duration: ['30 minutes', '60 minutes'],
          languages: ['English', ' Hindi'],
          location: ['Mumbai' , ' Ahemdabad']
        },
        {
          id: 4,
          name: "John Matrin",
          rating: 3.5,
          image: CounsellorImg,
          details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.",
          slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
          date: ['07/27/2024'],
          time: ["10:00 AM" , "12:00 PM", "04:00 PM", "06:00 PM"],
          expertise: ['Subject Expertise'],
          mode: ['Online Video Calling', 'Online Voice Calling'],
          duration: ['30 minutes', '60 minutes'],
          languages: ['English', 'Hindi'],
          location: ['Mumbai' , ' Ahemdabad']
        },
        {
          id: 5,
          name: "John Matrin",
          rating: 3.5,
          image: CounsellorImg,
          Link: "#",
          details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.",
          slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
          date: ['07/27/2024'],
          time: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM"],
          expertise: ['Career Counsellor'],
          mode: ['Online Voice Calling', 'Online Chat', 'Offline In Person'],
          duration: ['30 minutes', '60 minutes'],
          languages: ['English', 'Hindi'],
          location: ['Mumbai' , 'Ahemdabad']
        },
        {
          id: 6,
          name: "John Matrin",
          rating: 3.5,
          image: CounsellorImg,
          Link: "#",
          details: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.",
          slots: ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"],
          date: ['07/31/2024'],
          time: ["10:00 AM", "01:00 PM", "02:00 PM", "06:00 PM"],
          expertise: ['Mentor'],
          mode: ['Online Video Calling', 'Online Voice Calling'],
          duration: ['30 minutes', '60 minutes'],
          languages: ['English', 'Hindi'],
          location: ['Mumbai' , 'Ahemdabad']
        }
      ];
      
      setCounsellors(data);
      setFilteredCounsellors(data);
    };

    fetchData();
  }, []);

  const handelViewProfile = (counsellor) => {
    navigate(`/counsellor/${counsellor.id}`, { state: { counsellor } })
  };

  // const handleDate = (event) => {
  //   setDate(event.target.value);
  // }

  const handleTime = (newTime) => {
    const formattedTime = newTime ? newTime.format('hh:mm A') : '';
  setTime(formattedTime);
  console.log("Selected time:", formattedTime);  // Debug log
  }

  const handleDate = (newDate) => {
    setDate(newDate ? newDate.format('MM/DD/YYYY') : '');
  }


  const handleExpertise = (event) => {
    setExpertise(event.target.value);
    // filterCounsellors(event.target.value);
    // const selected = event.target.value; 
    // setExpertise(selected);
    // filterCounsellors(selected);

  }

  const handleMode = (event) => {
    setMode(event.target.value);
  }

  const handleDuration = (event) => {
    setDuration(event.target.value);
  }

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  }

  const handleLocation = (event) => {
    setLocation(event.target.value);
  }
     
  useEffect(() => {
    const filteredCounsellors = counsellors.filter(counsellor => {
      return (
        (!date || counsellor.date.includes(date)) &&
        (!time || counsellor.time.includes(time)) &&  
        (!expertise || counsellor.expertise.includes(expertise)) &&
        (!location || counsellor.location.includes(location)) &&
        (!language || counsellor.languages.includes(language)) &&
        (!duration || counsellor.duration.includes(duration)) &&
        (!mode || counsellor.mode.includes(mode))
      );
    });

    setFilteredCounsellors(filteredCounsellors);
    setNoCounsellorsFound(filteredCounsellors.length === 0);
    // console.log("filteredCounsellors is working", filteredCounsellors);
  }, [date, time, expertise, location, language, duration, mode, counsellors]);

  return (
    <>
      <Container style={{
        // border:'1px solid red',
        width: '100%',
        padding: '20px',
        borderRadius: '3px',
        background: '#ffffff',
        // boxShadow: ' 6px 6px 8px #d5d5d5  -6px -6px 8px #ebebeb',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

      }}>
        <Box my={1} style={{
          // border:'1px solid yellow',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '60px'
        }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Counselling
          </Typography>
          <Typography variant="h5" color="textSecondary">
            <Link to="/SessionHistory" style={{
              textDecoration: 'none',
              color: 'grey'
            }}>Session History</Link>
          </Typography>
        </Box>

        {/* filtering section ***************************************************** */}
       
        <Box mb={2} mt={2} component="section" style={{
          border:'1px solid blue',
          width: '100%',
          display: 'flex',
          padding: '10px'
          // flexDirection: 'row'
          // marginBottom: '115px'
        }}>

          {/* date select -------------------------------------- */}

          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Date" onChange={handleDate}
               slotProps={{ textField: { fullWidth: true } }} />
            </DemoContainer>
          </LocalizationProvider>

          {/* time select -------------------------------------- */}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
              <TimePicker label="Time" onChange={handleTime} 
              slotProps={{ textField: { fullWidth: true } }}/>
            </DemoContainer>
          </LocalizationProvider>

          {/* expertise select----------------------------  */}

          <FormControl fullWidth className='expertise-select'>
            <InputLabel id="demo-simple-select-label">Expertise</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={expertise}
              label="Expertise"
              onChange={handleExpertise}
            >
              <MenuItem value="Career Counsellor">Career Counsellor</MenuItem>
              <MenuItem value="Career Guidance">Career Guidance</MenuItem>
              <MenuItem value="Subject Expertise">Subject Expertise</MenuItem>
              <MenuItem value="Mentor">Mentor</MenuItem>
            </Select>
          </FormControl>

          {/* mode select------------------------------- */}

          <FormControl fullWidth className='mode-select'>
            <InputLabel id="demo-simple-select-label">Mode</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mode}
              label="Mode"
              onChange={handleMode}
            >
              <MenuItem value="Online Video Calling">Online Video Calling</MenuItem>
              <MenuItem value="Online Voice Calling">Online Voice Calling</MenuItem>
              <MenuItem value="Online Chat">Online Chat</MenuItem>
              <MenuItem value="Offline In Person">Offline In Person</MenuItem>
            </Select>
          </FormControl>

          {/* duration select------------------------------- */}

          <FormControl fullWidth className='duration-select'>
            <InputLabel id="demo-simple-select-label">Duration</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={duration}
              label="duration"
              onChange={handleDuration}
            >
              <MenuItem value="30 minutes">30 minutes</MenuItem>
              <MenuItem value="60 minutes">60 minutes</MenuItem>
            </Select>
          </FormControl>

          {/* language select------------------------------- */}

          <FormControl fullWidth className='language-select'>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="language"
              onChange={handleLanguage}
            >English
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="Gujrati">Gujrati</MenuItem>
              <MenuItem value="Bengali">Bengali</MenuItem>
            </Select>
          </FormControl>

          {/* location select------------------------------- */}

          <FormControl fullWidth className='location-select'>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="location"
              onChange={handleLocation}
            >
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Ahemdabad">Ahemdabad</MenuItem>
              <MenuItem value="Bengalore">Bengalore</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
            </Select>
          </FormControl>

        </Box>
        {/* filtering end********************************************* */}





        {noCounsellorsFound ?( 
          <Typography variant="h6" style={{ color: 'red' }}>
            No counsellors found
            </Typography>
          ) : (
        <Grid container spacing={1} className={styles.cardWrapper} style={{
          // border:'1px solid red',
          padding: '10px',
          marginRight: '0',
          margin: '10px',
          background: '#ffffff',
        }}>
          {filteredCounsellors.map(counsellor => (
            <Grid item key={counsellor.id} xs={12} sm={6} md={4} style={{
              // border:'2px solid green',
              padding: '2px'
            }}>
              <Card style={{
                height: '380px',
                borderRadius: '12px',
                width: '300px',
                margin: '24px',
                // border:'2px solid pink',
                position: 'relative',
                // padding:'10px'
              }} sx={{ maxWidth: 345 }}>
                <Stack direction="row" alignItems="Center" spacing={2} style={{
                  background: 'yellow',
                  padding: '6px'
                }}>
                  <Avatar alt={counsellor.name} src={counsellor.image} sx={{ width: 76, height: 76 }}></Avatar>
                  <Stack>
                    <Typography variant='h6'>{counsellor.name}</Typography>
                    <Typography varient='subtitle2'>Degree</Typography>
                  </Stack>

                </Stack>
                <Stack direction="row" spacing={1} mt={2}>
                  <IconButton>
                    <Phone />
                  </IconButton>
                  <IconButton>
                    <VideoCall />
                  </IconButton>
                  <IconButton>
                    <Message />
                  </IconButton>
                </Stack>
                <Stack sx={{ mt: 1, padding: 1}}>
                  Expertise: {counsellor.expertise.join(", ")} <br/>
                  Mode: {counsellor.mode.join(", ")} <br/>
                  Duration: {counsellor.duration.join(", ")} <br/>
                  Languages : {counsellor.languages.join(", ")} <br/>
                  Location: {counsellor.location.join(", ")} <br />
                  Time: {counsellor.time.join(", ")} <br />
                  Date: {counsellor.date.join(", ")}
                </Stack>
                <Stack style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Button variant="contained" sx={{ mt: 2 }}
                    onClick={() => handelViewProfile(counsellor)}
                    style={{
                      width: '150px'
                    }}
                  >
                    View Profile 
                  </Button>
                </Stack>
                {/* <CardMedia
                  component="img"
                  alt={counsellor.name}
                  height="300px"

                  image={counsellor.image}
                  title={counsellor.name}
                  style={{
                    borderEndStartRadius: '12px',
                    borderBottomRightRadius: '12px',
                  }}
                /> */}
                {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {counsellor.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Rating: {counsellor.rating}/5
                  </Typography>
                </CardContent> */}
                {/* <Button size="large" variant="contained" color="primary"
                  style={{
                    position: 'absolute',
                    right: '6px',
                    bottom: '6px',
                    background: 'none',
                    color: 'black',
                    fontWeight: '600',
                    boxShadow: 'none'

                  }}
                  onClick={() => handelBookNow(counsellor)}
                >
                  BOOK NOW
                </Button> */}
              </Card>
            </Grid>
          ))}
        </Grid>
          )} 
      </Container>
    </>
  )
}

export default Counselling