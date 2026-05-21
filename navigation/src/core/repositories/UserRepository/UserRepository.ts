import { db } from "../../config";
import { User } from "../../entities";

const UserRepository = {
    create:(user:User): number | undefined=>{
        const query = `INSERT INTO users (nombre, username, correo, fechaNacimiento, contrasena) 
        VALUES (?, ?, ?, ?, ?);`;
        const result = db.executeSync(query,[
            user.nombre,
            user.username,
            user.correo,
            user.fechaNacimiento,
            user.contrasena
        ]);
        return 1;
    },

    findByUsername:(username:string): User | null =>{
        const query = `SELECT * FROM users WHERE username = ? LIMIT 1;`;
        const {rows} = db.executeSync(query, [username]);
        if(rows != undefined && rows.length > 0){
            return rows[0] as unknown as User;
        }
        return null;
    },

    update:(user:User): void =>{
      
    },
    delete:(id:number): void =>{
       const query = `DELETE FROM users WHERE id = ?;`;
       db.executeSync(query, [id]);
    }


}
export default UserRepository;