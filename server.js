const express = require("express"); 
const fs = require("fs"); 
const app = express();

app.use(express.static('./docs')); 
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "./index.html"); 
})
app.listen(3000, () =>{
     console.log("server running"); 
})