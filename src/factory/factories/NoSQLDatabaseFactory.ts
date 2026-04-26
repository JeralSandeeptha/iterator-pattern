import type { Database } from "../../classes/Database.js";
import { MariaDBDatabase } from "../../classes/dbs/MariaDBDatabase.js";
import { MonogoDBDatabase } from "../../classes/dbs/MongoDBDatabase.js";
import type { IDatabaseFactory } from "../IDatabaseFactory.js";

export class NoSQLDatabaseFactory implements IDatabaseFactory {
    createDatabase(type: string): Database {
        if (type === "MongoDb") {
            return new MonogoDBDatabase();
        } else if (type === "MariaDb") {
            return new MariaDBDatabase();
        } else {
            throw new Error("Unknown database type");
        }
    }
}
