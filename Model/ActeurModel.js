import { DataTypes } from "sequelize";
import sequelize from "../Config/db.js";

const auteur = sequelize.define("auteur", {
  id: {
    type:DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nom:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateNaissance:{
    type: DataTypes.DATE,
    allowNull: false,
  }

});

export default auteur;