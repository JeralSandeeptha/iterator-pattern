import type { Database } from "../../classes/Database.js";
import { MySQLDatabase } from "../../classes/dbs/MySQLDatabase.js";
import { PostgreSQLDatabase } from "../../classes/dbs/PostgreSQLDatabase.js";
import type { IDatabaseFactory } from "../IDatabaseFactory.js";

export class SQLDatabaseFactory implements IDatabaseFactory {
    createDatabase(type: string): Database {
        if (type === "MySql") {
            return new MySQLDatabase();
        } else if (type === "PostgreSql") {
            return new PostgreSQLDatabase();
        } else {
            throw new Error("Unknown database type");
        }
    }
}
