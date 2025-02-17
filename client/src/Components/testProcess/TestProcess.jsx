

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, Container, Grid, CircularProgress } from '@mui/material';

const TestProcess = () => {
  const [interestTests, setInterestTests] = useState([]);
  const [aptitudeTests, setAptitudeTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


//     const fetchTests = async () => {
//       try {
//         const interestResponse = await axios.get('http://localhost:5000/admin/tests/category/interest');
//         const aptitudeResponse = await axios.get('http://localhost:5000/admin/tests/category/aptitude');
        
//         // Ensure response data is an array
//         if (Array.isArray(interestResponse.data)) {
//           setInterestTests(interestResponse.data);
//         } else {
//           console.error('Interest tests data is not an array:', interestResponse.data);
//         }

//         if (Array.isArray(aptitudeResponse.data)) {
//           setAptitudeTests(aptitudeResponse.data);
//         } else {
//           console.error('Aptitude tests data is not an array:', aptitudeResponse.data);
//         }

//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch tests.');
//         console.error('Error fetching tests:', err);
//         setLoading(false);
//       }
//     };

//     fetchTests();
//   }, []);


useEffect(() => {
    const fetchTests = async () => {
      try {
        const interestResponse = await axios.get('http://localhost:5000/admin/tests/category/interest');
        const aptitudeResponse = await axios.get('http://localhost:5000/admin/tests/category/aptitude');
        
        setInterestTests(interestResponse.data);
        setAptitudeTests(aptitudeResponse.data);

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tests.');
        console.error('Error fetching tests:', err);
        setLoading(false);
      }
    };

    fetchTests();
  }, []);


  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Test Categories
      </Typography>
      <Typography variant="h6" gutterBottom>
        Interest Tests
      </Typography>
      <Grid container spacing={2}>
        {interestTests.map(test => (
          <Grid item xs={12} sm={6} md={4} key={test.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{test.title}</Typography>
                <Typography>Questions: {test.questions}</Typography>
                <Typography>Duration: {test.duration} minutes</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom>
        Aptitude Tests
      </Typography>
      <Grid container spacing={2}>
        {aptitudeTests.map(test => (
          <Grid item xs={12} sm={6} md={4} key={test.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{test.title}</Typography>
                <Typography>Questions: {test.questions}</Typography>
                <Typography>Duration: {test.duration} minutes</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestProcess;



