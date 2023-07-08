const express = require('express');
const app = express();
const mongoose = require('mongoose');

const url ="mongodb+srv://appdata191:" + encodeURIComponent("Tuananh0304_") +
"@appdata191.qrctotx.mongodb.net/?retryWrites=true&w=majority";
async function connect(){
    try {
        await mongoose.connect(url);
        console.log("connect to mongodb")
    } catch (error){
        console.error(error);
    }
}
connect();

// middleware
app.use(express.json())


// insert api in backend
app.post('/api', (req,res) => {
    const {username, password} = req.body;
    console.log(username, password);
    res.send('received api')
})

app.listen(3000);