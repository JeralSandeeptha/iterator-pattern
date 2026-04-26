import type { Database } from "../classes/Database.js";
import type { IDatabaseFactory } from "./IDatabaseFactory.js";
import { NoSQLDatabaseFactory } from "./factories/NoSQLDatabaseFactory.js";
import { SQLDatabaseFactory } from "./factories/SQLDatabaseFactory.js";

export class DatabaseFactory {
    getDatabaseType(type: string): IDatabaseFactory {
        if (type === "SQL") {
            return new SQLDatabaseFactory();
        } else if (type === "NoSQL") {
            return new NoSQLDatabaseFactory();
        } else {
            throw new Error("Unknown database type");
        }
    }
}
