import { Sequelize } from "sequelize";
import { DATABASE_CONNECTION_URL } from "../constants/environment.variables";
const sequelize = new Sequelize(DATABASE_CONNECTION_URL);

export default sequelize;
