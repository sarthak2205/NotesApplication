//Importing libraries
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Importing Routes

//Other things
const app = express();
const PORT = 8000;
dotenv.config();
//Importing the Routes
const authNotes = require('./routes/notes')

app.use(express.json())

//Connecting MongoDB
mongoose.connect(process.env.CONNECTION_URL,  {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(console.log("Your MongoDB has been Connected!!"))
.catch((err) => console.log(err))

app.use("/notes", authNotes)

app.listen(PORT, () => console.log(`Server has started on Port ${PORT}`))