import { User } from "../../entities";
import { UserRepository } from "../../repositories";
import AuthRepository from "../../repositories/authRepository/AuthRepository";

const AuthService = {
    register: async (user: User): Promise<User> => {
        const userExist = UserRepository.findByUsername(user.username);
        if (userExist) {
            throw new Error("El usuario ya existe");
        }
        const id = UserRepository.create(user);
        if (id == undefined) {
            throw new Error("Error al crear el usuario");
        }
        await AuthRepository.save(user);
        return { ...user, id };
    },

    login: async (username: string, password: string): Promise<User> => {
        const user = UserRepository.findByUsername(username);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        if (user.contrasena !== password) {
            throw new Error("Contraseña incorrecta");
        }
        await AuthRepository.save(user);
        return user;
    },
};

export default AuthService;
