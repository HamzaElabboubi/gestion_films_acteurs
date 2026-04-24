import film from "./FilmModel.js";
import acteur from "./ActeurModel.js";
import { DataTypes } from "sequelize";
import sequelize from "../Config/db.js";


const film_acteur = sequelize.define("film_acteur", {
  filmId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  acteurId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

film.belongsToMany(acteur, {foreignKey: "acteurId", through: 'film_acteur' });
acteur.belongsToMany(film, { foreignKey: "filmId",through: 'film_acteur' });

export default film_acteur;