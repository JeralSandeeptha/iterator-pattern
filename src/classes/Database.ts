export interface Database {
    connect(): void;
    disconnect(): void;
}

export interface NoSQLDatabase extends Database {}

export interface SQLDatabase extends Database {}
