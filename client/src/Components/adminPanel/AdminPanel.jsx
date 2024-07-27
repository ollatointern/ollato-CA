import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../api';
import TestForm from './TestForm';
import { Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const AdminPanel = () => {
    const [tests, setTests] = useState([]);
    const [editTest, setEditTest] = useState(null);

    const fetchTests = async () => {
      try {
          const response = await api.get('/api/tests');
          setTests(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
          console.error('Error fetching tests:', error);
      }
  };

    useEffect(()=>{
        fetchTests();

    },[]);

    const handleEdit = (test) =>{
        setEditTest(test);
    };

     const handleDelete = async (id) =>{
      try {
        await axios.delete(`/api/tests/${id}`);
        fetchTests();
    } catch (error) {
        console.error('Error deleting test:', error);
    }
     }
  return (
    <>
    <h1>Admin Panel</h1>
    <TestForm test={editTest} onSaved={fetchTests} />
    {Array.isArray(tests) && tests.length > 0 ? (
        <List>
            {tests.map((test) => (
                <ListItem
                    key={test.id}
                    secondaryAction={
                        <>
                            <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(test)}>
                                <Edit />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(test.id)}>
                                <Delete />
                            </IconButton>
                        </>
                    }
                >
                    <ListItemText
                        primary={test.title}
                        secondary={`${test.questions} Questions - ${test.duration} minutes`}
                    />
                </ListItem>
            ))}
        </List>
    ) : (
        <p>No tests available</p>
    )}
</>
  )
}

export default AdminPanel