import React from 'react'
import { useState, useEffect } from 'react';
import TestCard from './TestCard';
import axios from 'axios';


const TestProcess = () => {
const [tests, setTests] = useState([]);
const [category, setCategory] = useState('Interest');

const fetchTests = async () => {
  try {
    const response = await axios.get(`/api/tests?category=${category}`);
    setTests(response.data);
} catch (error) {
    console.error('Error fetching tests:', error);
    setTests([]);  // Ensure tests is set to an empty array in case of error
}
};

 useEffect(()=>{
    fetchTests();

 }, [category]);
    return (
      <>
      <h1>Test Process</h1>
      <div>
          <button onClick={() => setCategory('Interest')}>Interest</button>
          <button onClick={() => setCategory('Aptitude')}>Aptitude</button>
      </div>
      <div>
          {Array.isArray(tests) && tests.length > 0 ? (
              tests.map((test) => (
                  <TestCard key={test.id} test={test} />
              ))
          ) : (
              <p>No tests available</p>
          )}
      </div>
  </>
  )
}

export default TestProcess