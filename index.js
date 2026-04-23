import express from 'express';
const app = express();
const port = 3000;


app.use(express.json());


import db from './Config/db.js';

db.authenticate()
    .then(()=>{
        console.log('Connection has been established successfully.');
    })
    .catch(err=>{
        console.error('Unable to connect to the database:',err);
    });

app.get('/',(req,res)=>{
    res.send('Hello World!');
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});