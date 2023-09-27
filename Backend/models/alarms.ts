import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/sequelize";

export const SequelizeAlarmModel = sequelize.define('alarms', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});
