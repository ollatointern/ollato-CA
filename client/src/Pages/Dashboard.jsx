// import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom'
// import { IoPieChart } from "react-icons/io5";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// --------PieChart--------
import *  as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useState } from 'react';
import { BiSupport } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
const Dashboard = () => {
  return (
  <>
    <section className="d-wrapper">
        <div className="d-container">
         <div className="block-1">
        <div className="block-1-left"> 
        <div className="recentActivities">
         <RecentActivities />
         </div>
         <div className="PT">
          <ProgressTracker/>
          <div style={{
            border:'1px solid black',
            marginTop:'20px',
            padding:'10px',
            textAlign:'center',
            height:'300px'
          }}>
            Achivements and Badges
          </div>
          </div>
          <div className="support-help" 
          style={{
            width:'800px',
            // border:'1px solid pink',
            margin:'10px',
            padding:'10px',
            display:'felx',
            alignItems:'center'
          }}
          >
          <div className="supportHelp" style={{
            // border:'1px solid blue',
            padding:'10px',
            display:'flex',
            alignItems:'center',
            gap:'50px'
          }}>
            <span 
            style={{
              padding:'10px',
              // border:'1px solid red',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              gap:'10px',
              width:'150px',
              height:'100px',
              borderRadius: '23px',
background:'#e0e0e0' ,
boxShadow: 'inset 6px 6px 8px #cccccc , inset -6px -6px 8px #f4f4f4'
            }}
            > <span><BiSupport  size={32} /></span>Support & Help </span>
          <div className="FAQ">
            <span
               style={{
              padding:'10px',
              // border:'1px solid red',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              gap:'10px',
              width:'150px',
              height:'100px',
              borderRadius: '23px',
background:'#e0e0e0' ,
boxShadow: 'inset 6px 6px 8px #cccccc , inset -6px -6px 8px #f4f4f4'
            }}><span><FaQuestion size={32} /></span> FAQ</span>
          </div>
          <div className="userGuide">
            <span
               style={{
              padding:'10px',
              // border:'1px solid red',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              gap:'10px',
              width:'150px',
              height:'100px',
              borderRadius: '23px',
background:'#e0e0e0' ,
boxShadow: 'inset 6px 6px 8px #cccccc , inset -6px -6px 8px #f4f4f4'
            
            }}
            >
            <span><CiCircleInfo size={32} /></span>
            User Guide
            </span>
          </div>
          </div>
          </div>
         </div>
         <div className="block-1-right">
         <div className='quickLinks' style={{
          width:'400px',
         }}>
          <QuickLinks />
        </div>
          <div className="notifi">
            <Notifications/>
          </div>
        <div className="upcomingEvents">
          <UpcomingEvent />
        </div>
         </div>
         </div>
         <div className="block-2">
        
         </div>
        </div>
    </section>
  </>
  )
}

export default Dashboard;

 




const RecentActivities =() =>{

  const activities = [
    { id: 1, title: 'Activity 1', description: 'Description for activity 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Activity 2', description: 'Description for activity 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Activity 3', description: 'Description for activity 3', imageUrl: 'https://via.placeholder.com/150' },
    // Add more activities as needed
];
return (
  <div className="recent-activities">
      
      <div style={{
        width:'100%',
        height:'250px'
      }}>
      <Carousel
         showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={true}
                showStatus={false}
                interval={3000}
                transitionTime={500}
               
               
      >
          {activities.map(activity => (
              <div key={activity.id}>
              
                  {/* <img src={activity.imageUrl} alt={activity.title} /> */}
                  <div style={{
                  height:250 +"px", 
                  width:100 +"%",
                  padding:'10px',
                  // background:"red",
                  border: "1px solid blue",
                  position:'relative'
                  
                  }}>
                    <h1>
                     {activity.title}
                    </h1>
                    <p>
                      {activity.description}
                    </p>
                    <div style={{
                      width:'300px',
                      height:'150px',
                      background:'pink',
                      display:'flex',
                      flexDirection:'column'
                    }}> 
                    
                    </div>
                    <button style={{
                        width:'100px',
                        padding:'10px',
                        border:'none',
                        outline:'none',
                        borderRadius:'12px',
                        background:'blue',
                        color:'white',
                        position:'absolute',
                        right:'20px',
                        bottom:'20px'
                       }}> 
                        Continue
                       </button>
                  </div>
                  {/* <div className="legend" style={{
                    width:90 + "%",
                    background:"pink",
                  }}>
                      <h3>{activity.title}</h3>
                      <p>{activity.description}</p>
                  </div> */}
              </div>
          ))}
      </Carousel>
      </div>
  </div>
);
};

const QuickLinks =() =>{
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#3FA2F6',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'start',
    color: theme.palette.text.primary,
    transition:'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? '#303B47' : '#5CBAF9', // Change this to your desired hover color
    },
  }));
  return(
    <>
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      <h2>Quick Links</h2>
        <Item><Link 
         style={{
          textDecoration:'none',
          color:'white'
         }}>Start New Assessment</Link></Item>
        <Item>view Summery Report</Item>
        <Item>Book a Session</Item>
      </Stack>
    </Box>
    </>
  )
};

const ProgressTracker=()=>{
  return(
    <>
    <h1>Progress Tracker</h1>
         <PieChart
      series={[
        {
          data: [
            { id: 0, value: 50, color:'green', label: 'Assessments Completed' },
            { id: 1, value: 20, label: 'Traning Modules' },
            // { id: 2, value: 20, label: 'Achivements' },
          ],
 
        },
      ]}
   
      width={600}
      height={200}
    />
    </>
  )
}
const UpcomingEvent=()=>{
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ECB176',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    cursor:'pointer',
    transition:'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? '#303B47' : '#FED8B1', // Change this to your desired hover color
    },
  }));
  return(
    <>
       <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      <h2>Upcoming Events</h2>
        <Item><Link>Start New Assessment</Link></Item>
        <Item>view Summery Report</Item>
        <Item>Book a Session</Item>
      </Stack>
    </Box>
    </>
  )
};

const Notifications =()=>{
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));
const [notifications, setNotifications] = useState([
  { id: 1, type: 'session', message: 'Upcoming Session: React Basics' },
  { id: 2, type: 'training', message: 'Upcoming Training: Advanced React' },
  { id: 3, type: 'deadline', message: 'Important Deadline: Project Submission' },
  { id: 4, type: 'session', message: 'Upcoming Session: Redux Workshop' },
  { id: 5, type: 'training', message: 'Upcoming Training: JavaScript Deep Dive' },
  { id: 6, type: 'deadline', message: 'Important Deadline: Team Meeting' },
  { id: 7, type: 'session', message: 'Upcoming Session: TypeScript Essentials' },
  { id: 8, type: 'training', message: 'Upcoming Training: GraphQL' },
  { id: 9, type: 'deadline', message: 'Important Deadline: Code Review' },
]);
const handleDelete = (id) => {
  setNotifications(notifications.filter(notification => notification.id !== id));
};
  return(
    <>
              <Box sx={{ width: '100%' }}>
            <Stack spacing={1}>
                <h2>Notification Center</h2>
                {notifications.map(notification => (
                    <Item key={notification.id}>
                        <Link>{notification.message}</Link>
                        <IconButton
                            aria-label="delete"
                            onClick={() => handleDelete(notification.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Item>
                ))}
            </Stack>
        </Box>
    </>
  )
}

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';
// // import './Dashboard.css'; // Add styles accordingly

// const Dashboard = () => {
//   const [data, setData] = useState({
//     recentActivities: [],
//     quickLinks: [],
//     notifications: [],
//     progressTracker: {
//       assessmentsCompleted: 0,
//       trainingModulesProgress: 0,
//       achievementsAndBadges: 0,
//     },
//     upcomingEvents: [],
//     accountInformation: {},
//     supportAndHelp: [],
//     feedbackAndSuggestions: [],
//   });

//   useEffect(() => {
//     // Replace with your actual API endpoints
//     axios.get('/api/dashboard').then((response) => {
//       setData(response.data);
//     }).catch(error => {
//       console.error("Error fetching dashboard data", error);
//     });
//   }, []);

//   return (
//     <div className="dashboard">
//       <RecentActivities activities={data.recentActivities} />
//       <QuickLinks links={data.quickLinks} />
//       <Notifications notifications={data.notifications} />
//       <ProgressTracker progress={data.progressTracker} />
//       <UpcomingEvents events={data.upcomingEvents} />
//       <AccountInformation accountInfo={data.accountInformation} />
//       <SupportAndHelp support={data.supportAndHelp} />
//       <FeedbackAndSuggestions feedback={data.feedbackAndSuggestions} />
//       <LogoutButton />
//     </div>
//   );
// };

// const RecentActivities = ({ activities }) => (
//   <div className="section">
//     <h2>Recent Activities</h2>
//     <ul>
//       {activities.map((activity, index) => (
//         <li key={index}>{activity}</li>
//       ))}
//     </ul>
//   </div>
// );

// const QuickLinks = ({ links }) => (
//   <div className="section">
//     <h2>Quick Links</h2>
//     <ul>
//       {links.map((link, index) => (
//         <li key={index}>{link}</li>
//       ))}
//     </ul>
//   </div>
// );

// const Notifications = ({ notifications }) => (
//   <div className="section">
//     <h2>Notifications</h2>
//     <ul>
//       {notifications.map((notification, index) => (
//         <li key={index}>{notification}</li>
//       ))}
//     </ul>
//   </div>
// );

// const ProgressTracker = ({ progress }) => {
//   const data = {
//     labels: ['Assessments Completed', 'Training Modules Progress', 'Achievements and Badges'],
//     datasets: [
//       {
//         label: 'Progress',
//         data: [progress.assessmentsCompleted, progress.trainingModulesProgress, progress.achievementsAndBadges],
//         backgroundColor: ['#007bff', '#28a745', '#ffc107'],
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="section">
//       <h2>Progress Tracker</h2>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// const UpcomingEvents = ({ events }) => (
//   <div className="section">
//     <h2>Upcoming Events</h2>
//     <ul>
//       {events.map((event, index) => (
//         <li key={index}>{event}</li>
//       ))}
//     </ul>
//   </div>
// );

// const AccountInformation = ({ accountInfo }) => (
//   <div className="section">
//     <h2>Account Information</h2>
//     <ul>
//       <li>Package Details: {accountInfo.packageDetails}</li>
//       <li>Subscription Status: {accountInfo.subscriptionStatus}</li>
//       <li>Payment History: {accountInfo.paymentHistory}</li>
//     </ul>
//   </div>
// );

// const SupportAndHelp = ({ support }) => (
//   <div className="section">
//     <h2>Support and Help</h2>
//     <ul>
//       {support.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
// );

// const FeedbackAndSuggestions = ({ feedback }) => (
//   <div className="section">
//     <h2>Feedback and Suggestions</h2>
//     <ul>
//       {feedback.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
// );

// const LogoutButton = () => (
//   <div className="section">
//     <h2>Logout</h2>
//     <button>Secure Logout Option</button>
//   </div>
// );

// export default Dashboard;
// import React from 'react'

// const Dashboard = () => {
//   return (
//     <>
      
//     </>
//   )
// }

// export default Dashboard


