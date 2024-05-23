import { Sequelize } from "sequelize";
import { DATABASE_CONNECTION_URL } from "../constants/environment.variables";
const sequelize = new Sequelize(DATABASE_CONNECTION_URL);

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
