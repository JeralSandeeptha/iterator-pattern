import type { Database } from "../classes/Database.js";

export interface IDatabaseFactory {
    createDatabase(type: string): Database;
}
