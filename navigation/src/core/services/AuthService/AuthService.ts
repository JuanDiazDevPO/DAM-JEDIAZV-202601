import { User } from "../../entities";
import { UserRepository } from "../../repositories";
import AuthRepository from "../../repositories/authRepository/AuthRepository";

const AuthService = {
    register: async (user: User):Promise<User>  => {
        const userExist = UserRepository.findByUsername(user.username);
        if(userExist){
            throw new Error("User already exists");
        }
        const id = UserRepository.create(user);
        if(id == undefined){
          console.error("Error creating user");
    }
     const newUser = {...user, id};
     await AuthRepository.save(user);
        return user; 
}}
export default AuthService;