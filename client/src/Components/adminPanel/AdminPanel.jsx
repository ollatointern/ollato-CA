// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Typography, Card, CardContent, Container, Grid, CircularProgress, Button, TextField } from '@mui/material';

// const AdminPanel = () => {
//   const [tests, setTests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newTest, setNewTest] = useState({ title: '', questions: '', duration: '', category: 'interest' });

//   useEffect(() => {
//     const fetchTests = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/admin/tests');
//         setTests(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch tests.');
//         console.error('Error fetching tests:', err);
//         setLoading(false);
//       }
//     };

//     fetchTests();
//   }, []);

//   const createTest = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/admin/tests', newTest);
//       setTests([...tests, response.data]);
//     } catch (err) {
//       setError('Error creating test.');
//       console.error('Error creating test:', err);
//     }
//   };

//   if (loading) return <CircularProgress />;
//   if (error) return <Typography color="error">{error}</Typography>;

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Admin Panel
//       </Typography>

//       <Typography variant="h6" gutterBottom>
//         Create New Test
//       </Typography>
//       <TextField
//         label="Title"
//         value={newTest.title}
//         onChange={(e) => setNewTest({ ...newTest, title: e.target.value })}
//       />
//       <TextField
//         label="Questions"
//         type="number"
//         value={newTest.questions}
//         onChange={(e) => setNewTest({ ...newTest, questions: e.target.value })}
//       />
//       <TextField
//         label="Duration"
//         type="number"
//         value={newTest.duration}
//         onChange={(e) => setNewTest({ ...newTest, duration: e.target.value })}
//       />
//       <TextField
//         label="Category"
//         value={newTest.category}
//         onChange={(e) => setNewTest({ ...newTest, category: e.target.value })}
//       />
//       <Button onClick={createTest}>Create Test</Button>

//       <Typography variant="h6" gutterBottom>
//         Existing Tests
//       </Typography>
//       <Grid container spacing={2}>
//         {tests.map((test) => (
//           <Grid item xs={12} sm={6} md={4} key={test.id}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">{test.title}</Typography>
//                 <Typography>Questions: {test.questions}</Typography>
//                 <Typography>Duration: {test.duration} minutes</Typography>
//                 <Typography>Category: {test.category}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default AdminPanel;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, Container, Grid, CircularProgress, Button, TextField, FormControl, MenuItem,  Select, InputLabel, } from '@mui/material';

const AdminPanel = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTest, setNewTest] = useState({ title: '', questions: '', duration: '', category: 'interest' });
  const [editTest, setEditTest] = useState(null);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/tests');
        setTests(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tests.');
        console.error('Error fetching tests:', err);
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  const createTest = async () => {
    try {
      const response = await axios.post('http://localhost:5000/admin/tests', newTest);
      setTests([...tests, response.data]);
      setNewTest({ title: '', questions: '', duration: '', category: ' intrest' });
    } catch (err) {
      setError('Error creating test.');
      console.error('Error creating test:', err);
    }
  };

  const deleteTest = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin/tests/${id}`);
      setTests(tests.filter(test => test.id !== id));
    } catch (err) {
      setError('Error deleting test.');
      console.error('Error deleting test:', err);
    }
  };

  const updateTest = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/admin/tests/${editTest.id}`, editTest);
      setTests(tests.map(test => (test.id === editTest.id ? response.data : test)));
      setEditTest(null);
    } catch (err) {
      setError('Error updating test.');
      console.error('Error updating test:', err);
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>

      <Typography variant="h6" gutterBottom>
        Create New Test
      </Typography>
      <TextField
        label="Title"
        value={newTest.title}
        onChange={(e) => setNewTest({ ...newTest, title: e.target.value })}
      />
      <TextField
        label="Questions"
        type="number"
        value={newTest.questions}
        onChange={(e) => setNewTest({ ...newTest, questions: e.target.value })}
      />
      <TextField
        label="Duration"
        type="number"
        value={newTest.duration}
        onChange={(e) => setNewTest({ ...newTest, duration: e.target.value })}
      />
      {/* <TextField
        label="Category"
        value={newTest.category}
        onChange={(e) => setNewTest({ ...newTest, category: e.target.value })}
      /> */}
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={newTest.category}
          onChange={(e) => setNewTest({ ...newTest, category: e.target.value })}
        >
          <MenuItem value="interest">Interest</MenuItem>
          <MenuItem value="aptitude">Aptitude</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={createTest}>Create Test</Button>

      <Typography variant="h6" gutterBottom>
        Existing Tests
      </Typography>
      <Grid container spacing={2}>
        {tests.map(test => (
          <Grid item xs={12} sm={6} md={4} key={test.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{test.title}</Typography>
                <Typography>Questions: {test.questions}</Typography>
                <Typography>Duration: {test.duration} minutes</Typography>
                <Typography>Category: {test.category}</Typography>
                <Button onClick={() => setEditTest(test)}>Edit</Button>
                <Button onClick={() => deleteTest(test.id)}>Delete</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {editTest && (
        <div>
          <Typography variant="h6" gutterBottom>
            Edit Test
          </Typography>
          <TextField
            label="Title"
            value={editTest.title}
            onChange={(e) => setEditTest({ ...editTest, title: e.target.value })}
          />
          <TextField
            label="Questions"
            type="number"
            value={editTest.questions}
            onChange={(e) => setEditTest({ ...editTest, questions: e.target.value })}
          />
          <TextField
            label="Duration"
            type="number"
            value={editTest.duration}
            onChange={(e) => setEditTest({ ...editTest, duration: e.target.value })}
          />
          <TextField
            label="Category"
            value={editTest.category}
            onChange={(e) => setEditTest({ ...editTest, category: e.target.value })}
          />
          <Button onClick={updateTest}>Update Test</Button>
        </div>
      )}
    </Container>
  );
};

export default AdminPanel;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Typography, Card, CardContent, Container, Grid, CircularProgress, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// const AdminPanel = () => {
//   const [tests, setTests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newTest, setNewTest] = useState({ title: '', questions: '', duration: '', category: 'interest' });
//   const [editTest, setEditTest] = useState(null);

//   useEffect(() => {
//     const fetchTests = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/admin/tests');
//         setTests(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch tests.');
//         console.error('Error fetching tests:', err);
//         setLoading(false);
//       }
//     };

//     fetchTests();
//   }, []);

//   const createTest = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/admin/tests', newTest);
//       setTests([...tests, response.data]);
//       setNewTest({ title: '', questions: '', duration: '', category: 'interest' });
//     } catch (err) {
//       setError('Error creating test.');
//       console.error('Error creating test:', err);
//     }
//   };

//   const deleteTest = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/admin/tests/${id}`);
//       setTests(tests.filter(test => test.id !== id));
//     } catch (err) {
//       setError('Error deleting test.');
//       console.error('Error deleting test:', err);
//     }
//   };

//   const updateTest = async () => {
//     try {
//       const response = await axios.put(`http://localhost:5000/admin/tests/${editTest.id}`, editTest);
//       setTests(tests.map(test => (test.id === editTest.id ? response.data : test)));
//       setEditTest(null);
//     } catch (err) {
//       setError('Error updating test.');
//       console.error('Error updating test:', err);
//     }
//   };

//   if (loading) return <CircularProgress />;
//   if (error) return <Typography color="error">{error}</Typography>;

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Admin Panel
//       </Typography>

//       <Typography variant="h6" gutterBottom>
//         Create New Test
//       </Typography>
//       <TextField
//         label="Title"
//         value={newTest.title}
//         onChange={(e) => setNewTest({ ...newTest, title: e.target.value })}
//       />
//       <TextField
//         label="Questions"
//         type="number"
//         value={newTest.questions}
//         onChange={(e) => setNewTest({ ...newTest, questions: e.target.value })}
//       />
//       <TextField
//         label="Duration"
//         type="number"
//         value={newTest.duration}
//         onChange={(e) => setNewTest({ ...newTest, duration: e.target.value })}
//       />
//       <FormControl fullWidth>
//         <InputLabel>Category</InputLabel>
//         <Select
//           value={newTest.category}
//           onChange={(e) => setNewTest({ ...newTest, category: e.target.value })}
//         >
//           <MenuItem value="interest">Interest</MenuItem>
//           <MenuItem value="aptitude">Aptitude</MenuItem>
//         </Select>
//       </FormControl>
//       <Button onClick={createTest}>Create Test</Button>

//       <Typography variant="h6" gutterBottom>
//         Existing Tests
//       </Typography>
//       <Grid container spacing={2}>
//         {tests.map(test => (
//           <Grid item xs={12} sm={6} md={4} key={test.id}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">{test.title}</Typography>
//                 <Typography>Questions: {test.questions}</Typography>
//                 <Typography>Duration: {test.duration} minutes</Typography>
//                 <Typography>Category: {test.category}</Typography>
//                 <Button onClick={() => setEditTest(test)}>Edit</Button>
//                 <Button onClick={() => deleteTest(test.id)}>Delete</Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {editTest && (
//         <div>
//           <Typography variant="h6" gutterBottom>
//             Edit Test
//           </Typography>
//           <TextField
//             label="Title"
//             value={editTest.title}
//             onChange={(e) => setEditTest({ ...editTest, title: e.target.value })}
//           />
//           <TextField
//             label="Questions"
//             type="number"
//             value={editTest.questions}
//             onChange={(e) => setEditTest({ ...editTest, questions: e.target.value })}
//           />
//           <TextField
//             label="Duration"
//             type="number"
//             value={editTest.duration}
//             onChange={(e) => setEditTest({ ...editTest, duration: e.target.value })}
//           />
//           <FormControl fullWidth>
//             <InputLabel>Category</InputLabel>
//             <Select
//               value={editTest.category}
//               onChange={(e) => setEditTest({ ...editTest, category: e.target.value })}
//             >
//               <MenuItem value="interest">Interest</MenuItem>
//               <MenuItem value="aptitude">Aptitude</MenuItem>
//             </Select>
//           </FormControl>
//           <Button onClick={updateTest}>Update Test</Button>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default AdminPanel;
