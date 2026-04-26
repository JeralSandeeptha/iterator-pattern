import type { NoSQLDatabase } from "../Database.js";

export class MariaDBDatabase implements NoSQLDatabase {
    connect(): void {
        console.log("Connected to MariaDB database.");
    }           

    disconnect(): void {
        console.log("Disconnected from MariaDB database.");
    }
}
