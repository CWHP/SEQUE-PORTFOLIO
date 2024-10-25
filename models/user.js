import DataTypes from "sequelize";
import sequelize from "../utils/database.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "users", timestamps: false }
);

User.insertUser = async ({ userName, password }) => {
  await User.create({
    userName: userName,
    password: password,
  });
};

User.fetchUserByUsername = async (userName) => {
  return User.findAll({
    where: { userName: userName },
  });
};

export default User;
