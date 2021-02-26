import express from "express";
require("./dbConnect");  
const bodyParser = require('body-parser');
const app: express.Application = express(); 

const usersRoute = require("./routes/usersRoute"); 
const postsRoute = require("./routes/postsRoute"); 

app.use(bodyParser.json())
app.use("/api/users", usersRoute)
app.use("/api/posts", postsRoute); 

app.get("/", (req,res) => {
    res.send("Hello Yash!"); 
})

app.listen(3000, () => console.log("Server is running!"))