import { Options } from "sequelize";
import jsonConfig from "./config.json";

export const config: Record<"development" | "test" | "production", Options> = jsonConfig as Record<"development" | "test" | "production", Options>;
