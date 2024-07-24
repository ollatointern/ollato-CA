import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container, Box } from '@mui/material';
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
          image: CounsellorImg,
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
    navigate(`/counsellor/${counsellor.id}`, { state: { counsellor } })
  };

  const [expertise, setExpertise] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [language, setLanguage] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [mode, setMode] = React.useState('');

  const handleExpertise = (event) => {
    setExpertise(event.target.value);
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

  return (
    <>
      <Container style={{
        // border:'1px solid red',
        width: '100%',
        padding: '40px',
        borderRadius: '3px',
        background: '#ffffff',
        boxShadow: ' 6px 6px 8px #d5d5d5  -6px -6px 8px #ebebeb',
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
        <Typography variant="h5" component="h3" style={{ border: '2px solid ' }}>
          Filter</Typography>

          <Box mb={2} mt={2} component="section" style={{
            // border:'1px solid blue',
            width: '100%',
            display: 'flex',
            flexDirection: 'row'
            // marginBottom: '115px'
          }}>

            {/* date select -------------------------------------- */}

            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Basic date picker" />
              </DemoContainer>
            </LocalizationProvider>

            {/* time select -------------------------------------- */}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker label="Basic time picker" />
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
                <MenuItem value={10}>Career Counsellor</MenuItem>
                <MenuItem value={20}>Career Guidance</MenuItem>
                <MenuItem value={30}>Subject Expertise</MenuItem>
                <MenuItem value={40}>Mentor</MenuItem>
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
                <MenuItem value={10}>Online Video Calling</MenuItem>
                <MenuItem value={20}>Online Voice Calling</MenuItem>
                <MenuItem value={30}>Online Chat</MenuItem>
                <MenuItem value={40}>Offline In Person</MenuItem>
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
                <MenuItem value={10}>30 minutes</MenuItem>
                <MenuItem value={20}>60 minutes</MenuItem>
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
              >
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>Hindi</MenuItem>
                <MenuItem value={30}>Gujrati</MenuItem>
                <MenuItem value={40}>Bengali</MenuItem>
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
                <MenuItem value={10}>Mumbai</MenuItem>
                <MenuItem value={20}>Ahemdabad</MenuItem>
                <MenuItem value={30}>Bengalore</MenuItem>
                <MenuItem value={40}>Hyderabad</MenuItem>
              </Select>
            </FormControl>

          </Box>
        {/* filtering end********************************************* */}

        <Grid container spacing={1} className={styles.cardWrapper} style={{
          // border:'1px solid red',
          padding: '10px',
          marginRight: '0',
          margin: '10px',
          background: '#ffffff',


          // width:'100%',

        }}>
          {counsellors.map(counsellor => (
            <Grid item key={counsellor.id} xs={12} sm={6} md={4} style={{
              // border:'2px solid green',
              padding: '4px'
            }}>
              <Card style={{
                height: '430px',
                borderRadius: '12px',
                width: '300px',
                margin: '24px',
                // border:'2px solid pink',
                position: 'relative'
              }}>
                <CardMedia
                  component="img"
                  alt={counsellor.name}
                  height="300px"

                  image={counsellor.image}
                  title={counsellor.name}
                  style={{
                    borderEndStartRadius: '12px',
                    borderBottomRightRadius: '12px',
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