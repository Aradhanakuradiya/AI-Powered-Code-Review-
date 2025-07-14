const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
app.get('/',(req,res)=>{
    console.log("Hello World");
})
app.use('/ai', aiRoutes);
module.exports = app;