import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Avatar,
  TextField,
  Button,
  Paper,
  Box
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import {sessionsData} from './SessionHistory';
import CounsellorImage from '../assets/counsellor.jpg'
const SessionCancelation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state
 

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        setLoading(true); // Set loading to true when starting to fetch
        console.log(`Fetching session with ID: ${id}`); // Log the ID
        
        const sessionData = sessionsData.find(session => session.id === Number(id));
        if (sessionData) {
          console.log('Session found:', sessionData); // Log the session data
          setSession(sessionData);
        } else {
          throw new Error('Session not found');
        }
      } catch (err) {
        console.error(err.message); // Log error message
        setError(err.message); // Set error state
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    fetchSessionData();
  }, [id]);


  const handleCancel = () => {
    if (!session || !session.id) {
      console.error('No valid session available to cancel');
      return;
    }

    const updatedSessions = sessionsData.map(sess => {
      if (sess.id === Number(id)) {
        return { ...sess, status: 'Canceled', cancelReason: reason };
      }
      return sess;
    });

    console.log("Updated Sessions: ", updatedSessions);

    navigate('/SessionHistory');
  };
  if (loading) {
    return <Typography>Loading...</Typography>; // Show loading state
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>; // Show error state
  }

   
  return (
    <>
   <Box display="flex">
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>Cancel Session</Typography>
          <Box display="flex" alignItems="center" mb={3}>
            <Avatar
              src={session.counsellorImage || CounsellorImage} // Provide default image
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <Box>
              <Typography variant="h6">{session.counsellorName || 'No Name'}</Typography>
              <Typography variant="body2">Rating: {session.counsellorRating || 'N/A'}</Typography>
            </Box>
            <Button variant="contained" sx={{ ml: 'auto' }}>Book Now</Button>
          </Box>
          <Typography variant="body1" gutterBottom>
            1. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
          </Typography>
          <Typography variant="body1" gutterBottom>
            2. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Date & Time: {session.date || 'Date not available'} | {session.time || 'Time not available'}
          </Typography>
          <TextField
            label="Enter Reason for Cancel Session"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            sx={{ my: 2 }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCancel}
          >
            Cancel Session
          </Button>
        </Paper>
      </Box>
    </Box>
    </>
  )
}

export default SessionCancelation