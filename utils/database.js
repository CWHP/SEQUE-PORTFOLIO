import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  username: "postgres",
  database: "portfolio",
  password: "Jesus123!!",
  port: 5433,
  dialect: "postgres",
});

export default sequelize;
