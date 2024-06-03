import {compare} from "bcrypt"
import { sign } from "jsonwebtoken";
import { UserRepository } from "../../repository/user/UserRepository";
interface AuthUserRequest{
    email:string;
    senha:string;
}

class AuthUserService{
  private userRepository: UserRepository;


  constructor() {
    this.userRepository = new UserRepository();
    
  }
    async execute({email, senha}: AuthUserRequest){
        const usuario = await this.userRepository.findUserByEmail(email);
        
        if(!usuario){
            throw new Error("Email ou senha incorretos")
        }

        const passwordMatch = await compare(senha,usuario?.senha)

        if(!passwordMatch){
            throw new Error("Email ou senha incorretos")
        }

         const token = sign(
            {
                email: usuario.email
            },
            process.env.JWT_SECRET,
            {
                subject: usuario.id_usuario,
                expiresIn: '1d'
            }
         )
        

        return{
            id: usuario?.id_usuario,
            userName: usuario?.nome_usuario,
            email: usuario?.email,
            token : token,
            perfil : usuario.perfil 
        }
    }
}

export {AuthUserService}