import type { NoSQLDatabase } from "../Database.js";

export class MonogoDBDatabase implements NoSQLDatabase {
    connect(): void {
        console.log("Connected to MongoDB database.");
    }

    disconnect(): void {
        console.log("Disconnected from MongoDB database.");
    }
}
