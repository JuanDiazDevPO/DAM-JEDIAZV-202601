import { open } from "react-native-quick-sqlite";

export const db = open({
    name: "navigation_database.sqlite",
});
export const setupDatabase = () => {
    try{
        db.execute(
            'CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY AUTOINCREMENT, nombre TEXT, username TEXT, correo TEXT, fechaNacimiento TEXT, contrasena TEXT)'
        );
    }catch(error){
        console.error("Error setting up the database:", error);
    }
    
};