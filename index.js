import express from 'express';
const app = express();
const port = 3000;
import sequelize from './Config/db.js';
import film from './Model/FilmModel.js';
import acteur from './Model/ActeurModel.js';
import film_acteur from './Model/FilmActeursModel.js';

app.use(express.json());


import db from './Config/db.js';

db.authenticate()
    .then(()=>{
        console.log('Connection has been established successfully.');
    })
    .catch(err=>{
        console.error('Unable to connect to the database:',err);
    });


    sequelize.sync({ alter: true })
  .then(() => console.log("Tables créées ✅"))
  .catch(err => console.error(err));

app.get('/',(req,res)=>{
    res.send('Hello World!');
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});