import { Sequelize } from 'sequelize';

const db = new Sequelize('gestion_films_acteurs','root','',{
    host:'localhost',
    dialect:'mysql'
});

export default db;