import React from 'react'
import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Avatar,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';
import CounsellorImage from '../assets/counsellor.jpg';
// import { sessionsData } from './SessionHistory';
export const sessionsData = [
  { id: 1, studentName: 'Samanta William', studentEmail: 'samanta@mail.com', counsellorName: 'John Matrin', counsellorEmail: 'john@mail.com', date: '01 Feb 2022', time: '10:00 AM', status: 'Pending', counsellorImage: CounsellorImage },
  { id: 2, studentName: 'Samanta William', studentEmail: 'samanta@mail.com', counsellorName: 'John Matrin', counsellorEmail: 'john@mail.com', date: '01 Feb 2022', time: '10:00 AM', status: 'Upcoming', counsellorImage: CounsellorImage },
  { id: 3, studentName: 'Samanta William', studentEmail: 'samanta@mail.com', counsellorName: 'John Matrin', counsellorEmail: 'john@mail.com', date: '01 Feb 2022', time: '10:00 AM', status: 'Pending', counsellorImage: CounsellorImage },
  { id: 4, studentName: 'Samanta William', studentEmail: 'samanta@mail.com', counsellorName: 'John Matrin', counsellorEmail: 'john@mail.com', date: '01 Feb 2022', time: '10:00 AM', status: 'Pending', counsellorImage: CounsellorImage },
  { id: 5, studentName: 'Samanta William', studentEmail: 'samanta@mail.com', counsellorName: 'John Matrin', counsellorEmail: 'john@mail.com', date: '01 Feb 2022', time: '10:00 AM', status: 'Pending', counsellorImage: CounsellorImage },
  { id: 6, studentName: 'Samanta William', studentEmail: 'samanta@mail.com', counsellorName: 'John Matrin', counsellorEmail: 'john@mail.com', date: '01 Feb 2022', time: '10:00 AM', status: 'Pending', counsellorImage: CounsellorImage }
  // Add more sessions here
];
const SessionHistory = () => {
    const [tabValue, setTabValue] = useState(0);
    const [sessions, setSessions] = useState([]);
  
    useEffect(() => {
      // Fetch sessions from API or use static data
      setSessions(sessionsData);
    }, []);
  
    const handleTabChange = (event, newValue) => {
      setTabValue(newValue);
    };
  
    const renderActions = (status, id) => (
      <div style={{
        display:'flex',
        flexDirection:'column',
        gap:'6px',
        width:'150px'
      }}>
        {status === 'Pending' && (
          < >
            <Button variant="contained" color="primary" size="small" style={{}}>
              Reschedule
            </Button>
    
          <Link to={`/cancel-session/${id}`}>
          <Button variant="contained" color="secondary" size="small" style={{
                width:'150px'
            }}>
              Cancel
            </Button>
          </Link>
          </>
        )}
      </div>
    );

    const filterSessions = (status) => {
      if (status === 0) return sessions; // All
      const statuses = ['Pending', 'Upcoming', 'Completed', 'Canceled', 'Rescheduled'];
      return sessions.filter(session => session.status === statuses[status - 1]);
    };
  return (
 <>
<Container>
      <Typography variant="h4" gutterBottom>
        Counselling Session History
      </Typography>
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="session history tabs">
        <Tab label="All" />
        <Tab label="Pending" />
        <Tab label="Upcoming" />
        <Tab label="Completed" />
        <Tab label="Canceled" />
        <Tab label="Rescheduled" />
      </Tabs>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Se. No</TableCell>
              <TableCell>Student Details</TableCell>
              <TableCell>Counsellor Details</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterSessions(tabValue)
             
              .map((session, index) => (
                <TableRow key={session.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar alt={session.studentName} src="/static/images/avatar/1.jpg" style={{ marginRight: 8 }} />
                      <div>
                        {session.studentName}
                        <br />
                        {session.studentEmail}
                      </div>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar alt={session.counsellorName} src={CounsellorImage} style={{ marginRight: 8 }} />
                      <div>
                        {session.counsellorName}
                        <br />
                        {session.counsellorEmail}
                      </div>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {session.date} <br /> {session.time}
                  </TableCell>
                  <TableCell>{renderActions(session.status, session.id)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
 </>
  )
}

export default SessionHistory