import type { SQLDatabase } from "../Database.js";

export class PostgreSQLDatabase implements SQLDatabase {
    connect(): void {
        console.log("Connected to PostgreSQL database.");
    }

    disconnect(): void {
        console.log("Disconnected from PostgreSQL database.");
    }
}
