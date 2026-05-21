import { open, DB } from "@op-engineering/op-sqlite";

export let db: DB;

export const setupDatabase = () => {
    try {
        db = open({ name: "navigation_database.sqlite" });
        db.executeSync(
            'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, username TEXT, correo TEXT, fechaNacimiento TEXT, contrasena TEXT)'
        );
        db.executeSync(
            'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, nombre TEXT, sku TEXT, cantidadStock INTEGER, costoCompra REAL, precioVenta REAL, descripcion TEXT)'
        );
        db.executeSync(
            'CREATE TABLE IF NOT EXISTS sales (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, productId INTEGER, productName TEXT, cantidad INTEGER, precioVenta REAL, costoCompra REAL, ganancia REAL, fecha TEXT)'
        );
    } catch(error) {
        console.error("Error setting up the database:", error);
    }
};