import Sequelize from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  usename: "root",
  database: "portfolio",
  password: "Jesus123!!",
  port: 3306,
  dialect: "postgres",
});

export default sequelize;
