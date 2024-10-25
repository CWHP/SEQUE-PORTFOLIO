import DataTypes from "sequelize";
import sequelize from "../utils/database.js";

const Project = sequelize.define(
  "project",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    projectTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    projectType: {
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
