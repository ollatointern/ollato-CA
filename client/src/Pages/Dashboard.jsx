import React from 'react'
import './dashboard.css'
const Dashboard = () => {
  return (
  <>
    <section className="d-wrapper">
        <div className="d-container">
            <div className="block-1">
            <div className="w-msg">
              <h1>Wellcome to ollato!!</h1>
            </div>
            </div>
            <div className="block-2">
            <div className="recent-tab">
              <h1>Recent Tab</h1>
            </div>
            <div className="quick-links">
              <h1>Quick links</h1>
            </div>
            <div className="p-tracker">
              <h1>Progress Tracker Graph</h1>
            </div>
            </div>
            <div className="block-3">
            <div className="upcoming-events">
                <h1>Upcomnig Events</h1>
             </div>
             <div className="upcoming-events">
                <h1>Upcomnig Events</h1>
             </div>
            </div>
        
        </div>
    </section>
  </>
  )
}

export default Dashboard

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


