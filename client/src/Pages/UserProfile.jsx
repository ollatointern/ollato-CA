import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';

const Profile = () => {

    const profileDetails = [{
        Name: 'Priyanka Chaudhary',
        Gender: 'Female',
        MobileNo: '1234567890',
        Email: 'Priyanka@gmail.com',
        Class: '12th',
        Stream: 'Science',
        Board: 'CBSE',
        School: 'St. Marys Convent School'
    }];



    return (
        <>

            <div className='profile-container' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
                <Box component={"div"} sx={{ height: '100vh', width: '400px' }}>
                    <div className='profile-photo' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
                        <Card sx={{ borderRadius: '20px', width: '300px' }}>
                            <CardMedia sx={{ height: 250 }}
                                image="https://img.freepik.com/free-photo/young-woman-wearing-striped-shirt-eyeglasses_273609-13226.jpg"></CardMedia>
                        </Card>
                        <List sx={{ padding: '40px' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <EditIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Edit Profile" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SettingsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Settings" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </div>
                </Box>
                <Box sx={{ height: '100vh', width: '800px' }}>
                    <div className='profile-details' style={{ padding: '40px' }}>
                        {profileDetails.map((detail, index) => (
                            <div key={index} style={{ padding: '10px' }}>
                                <div style={{ padding: '10px' }}>
                                    Name: {detail.Name}
                                </div>

                                <div style={{ padding: '10px' }}>
                                    Gender: {detail.Gender}
                                </div>

                                <div style={{ padding: '10px' }}>
                                    MobileNo: {detail.MobileNo}
                                </div>

                                <div style={{ padding: '10px' }}>
                                    Email: {detail.Email}
                                </div>
                                <Divider sx={{ borderWidth: '2px', background: 'black', width: '500px', margin: '20px', marginLeft: '10px' }}></Divider>
                                <div style={{ padding: '10px' }}>
                                    Class: {detail.Class}
                                </div>

                                <div style={{ padding: '10px' }}>
                                    Stream: {detail.Stream}
                                </div>

                                <div style={{ padding: '10px' }}>
                                    Board: {detail.Board}
                                </div>

                                <div style={{ padding: '10px' }}>
                                    School: {detail.School}
                                </div>
                            </div>
                        ))}
                    </div>
                </Box>
            </div>

        </>
    )
}

export default Profile
