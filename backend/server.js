const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const adminRoutes = require('./routes/admin');
const studentRoutes = require('./routes/student');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
