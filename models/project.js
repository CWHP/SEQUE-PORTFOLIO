import DataTypes from "sequelize";
import sequelize from "../utils/database.js";

const Project = sequelize.define(
  "project",
  {
    id: {
      type: DataTypes.INTERGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overview: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "projects", timestamps: false }
);

export default Project;
