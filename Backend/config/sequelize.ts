import { Sequelize } from "sequelize";
import { config } from "./config";

const databaseConfig = config;

export const sequelize = new Sequelize(config['development']);