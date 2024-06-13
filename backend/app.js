const express = require('express');
const mongoose = require('mongoose');
const router= require('./routes/book-routes')
const cors=require('cors');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.use('/books', router);  //localhost:5000/books



mongoose.connect("mongodb+srv://hariprasathvk:2004@cluster0.habytmu.mongodb.net/")
.then(() => {
    console.log("connected to Database");
    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });
})
.catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});


//Hari@12345
//hariprasathvk
//mongodb+srv://hariprasathvk:Hari%4012345@cluster0.habytmu.mongodb.net/