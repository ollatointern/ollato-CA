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
const sessionsData = [
    {
      id: 1,
      studentName: 'Samanta William',
      studentEmail: 'samanta@mail.com',
      counsellorName: 'John Matrin',
      counsellorEmail: 'john@mail.com',
      date: '01 Feb 2022',
      time: '10:00 AM',
      status: 'Pending'
    },
    {
        id: 1,
        studentName: 'Samanta William',
        studentEmail: 'samanta@mail.com',
        counsellorName: 'John Matrin',
        counsellorEmail: 'john@mail.com',
        date: '01 Feb 2022',
        time: '10:00 AM',
        status: 'Pending'
      },
      {
        id: 1,
        studentName: 'Samanta William',
        studentEmail: 'samanta@mail.com',
        counsellorName: 'John Matrin',
        counsellorEmail: 'john@mail.com',
        date: '01 Feb 2022',
        time: '10:00 AM',
        status: 'Pending'
      },
      {
        id: 1,
        studentName: 'Samanta William',
        studentEmail: 'samanta@mail.com',
        counsellorName: 'John Matrin',
        counsellorEmail: 'john@mail.com',
        date: '01 Feb 2022',
        time: '10:00 AM',
        status: 'Pending'
      },
      {
        id: 1,
        studentName: 'Samanta William',
        studentEmail: 'samanta@mail.com',
        counsellorName: 'John Matrin',
        counsellorEmail: 'john@mail.com',
        date: '01 Feb 2022',
        time: '10:00 AM',
        status: 'Pending'
      },
      {
        id: 1,
        studentName: 'Samanta William',
        studentEmail: 'samanta@mail.com',
        counsellorName: 'John Matrin',
        counsellorEmail: 'john@mail.com',
        date: '01 Feb 2022',
        time: '10:00 AM',
        status: 'Pending'
      },
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
  
    const renderActions = (status) => (
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
            <Button variant="contained" color="secondary" size="small" style={{
                width:'150px'
            }}>
              Cancel
            </Button>
          </>
        )}
      </div>
    );
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
            {sessions
              .filter(session => tabValue === 0 || session.status === tabValue)
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
                      <Avatar alt={session.counsellorName} src="/static/images/avatar/2.jpg" style={{ marginRight: 8 }} />
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
                  <TableCell>{renderActions(session.status)}</TableCell>
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