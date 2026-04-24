import { DataTypes } from "sequelize";
import sequelize from "../Config/db.js";

const film = sequelize.define("film", {
  id: {
    type:DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  titre:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  anneesortie:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }

});

export default film;