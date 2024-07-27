// import React, { useState, useEffect } from 'react';
// import { createTest, updateTest, getTestById } from '../../services/testService';
// import { useHistory, useParams } from 'react-router-dom';

// const TestForm = () => {
//   const [test, setTest] = useState({
//     title: '',
//     description: '',
//     questions_count: '',
//     duration: ''
//   });
//   const history = useHistory();
//   const { id } = useParams();
//   const isEdit = Boolean(id);

//   useEffect(() => {
//     if (isEdit) {
//       const fetchTest = async () => {
//         const data = await getTestById(id);
//         setTest(data);
//       };
//       fetchTest();
//     }
//   }, [id, isEdit]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTest({ ...test, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isEdit) {
//       await updateTest(id, test);
//     } else {
//       await createTest(test);
//     }
//     history.push('/admin/tests');
//   };

//   return (
//     <div>
//       <h1>{isEdit ? 'Edit Test' : 'Create Test'}</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title</label>
//           <input type="text" name="title" value={test.title} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Description</label>
//           <input type="text" name="description" value={test.description} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Number of Questions</label>
//           <input type="number" name="questions_count" value={test.questions_count} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Duration (minutes)</label>
//           <input type="number" name="duration" value={test.duration} onChange={handleChange} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default TestForm;
