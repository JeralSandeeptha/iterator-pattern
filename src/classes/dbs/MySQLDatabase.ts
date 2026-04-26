import type { SQLDatabase } from "../Database.js";

export class MySQLDatabase implements SQLDatabase {
    connect(): void {
        console.log("Connected to MySQL database.");
    }

    disconnect(): void {
        console.log("Disconnected from MySQL database.");
    }
}
