// importing express
import express from "express";
const app = express();
// Creating a port constant
const port = 3000;

// Creating a server on port 3000
app.listen(port, () =>{
    //Callback
    console.log(`Server running on port ${port}`)
})