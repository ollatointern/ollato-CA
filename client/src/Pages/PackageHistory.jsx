import React from 'react';
import './package.css';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
const packageData = [
    {
      id: '01',
      name: 'Online Testing, Report Generation',
      purchaseDate: '05 Feb 2020 10:32 AM',
      status: 'Active Now',
    },
    {
      id: '02',
      name: 'Online Testing, Report Generation, Virtual Counselling',
      purchaseDate: '01 Jan 2020 18:00 AM',
      status: 'Expired',
    },
    {
        id: '03',
        name: 'Online Testing, Report Generation, Virtual Counselling',
        purchaseDate: '01 Jan 2020 18:00 AM',
        status: 'Expired',
      },
    {
        id: '04',
        name: 'Online Testing, Report Generation, Virtual Counselling',
        purchaseDate: '01 Jan 2020 18:00 AM',
        status: 'Expired',
      },
    {
        id: '05',
        name: 'Online Testing, Report Generation, Virtual Counselling',
        purchaseDate: '01 Jan 2020 18:00 AM',
        status: 'Expired',
      },
    {
        id: '06',
        name: 'Online Testing, Report Generation, Virtual Counselling',
        purchaseDate: '01 Jan 2020 18:00 AM',
        status: 'Expired',
      },
    {
        id: '07',
        name: 'Online sujit, Report Generation, Virtual Counselling',
        purchaseDate: '01 Jan 2020 18:00 AM',
        status: 'Expired',
      },
  ];
const PackageHistory = () => {
    const [packages, setPackages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
      //here we have to  Fetch the package data from an API or a data source
      
      setPackages(packageData);
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };
      const filteredPackages = packages.filter((pkg) =>
        pkg.name.toLowerCase().includes(searchQuery.toLowerCase())
      );  
  return (
    <>
        <div className="phistory-wrapper">
            <div className="phistory-container">
                <div className="back-btn">
                    <Link
                    to='/Package'
                    style={{
                        display:'flex',
                        alignItems:'center',
                        fontSize:'18px',
                        textDecoration:'none',
                        color:'black'
                    }}
                    ><span
                    style={{
                        display:'flex',
                        alignItems:'center',
                        fontSize:'18px',
                        padding:'4px'
                    }}
                    ><FaAngleLeft size={30} /> Back</span> </Link>
                </div>
                <div className="packageHistoryTabel">
                <Container>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Package History
        </Typography>
        <Box sx={{ position: 'relative', width: '200px' }}>
          <SearchIcon sx={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
          <input type="text"    value={searchQuery}
            onChange={handleSearchChange} 
             placeholder="Search..."
              style={{ width: '100%', paddingLeft: '40px', height: '30px', borderRadius: '15px', border: '1px solid #ccc' }} />
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Package ID</TableCell>
              <TableCell>Package Name</TableCell>
              <TableCell>Package Purchased</TableCell>
              <TableCell>Package Status</TableCell>
              <TableCell>Package Invoice</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPackages.map((pkg) => (
              <TableRow key={pkg.id}>
                <TableCell>{pkg.id}</TableCell>
                <TableCell>{pkg.name}</TableCell>
                <TableCell>{pkg.purchaseDate}</TableCell>
                <TableCell>{pkg.status}</TableCell>
                <TableCell>
                  <IconButton>
                    <DownloadIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
                </div>
            </div>
        </div>
    </>
  )
}

export default PackageHistory