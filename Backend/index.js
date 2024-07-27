const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
//MiddleWare
// app.use(express.json);

//routes
app.get('/', (req, res) => {
    res.send("mai server se hu bhai!!");
    
} )


//start server here
app.listen(port, ( ) => {
    console.log(`server is running on http://localhost:${port}`);
});