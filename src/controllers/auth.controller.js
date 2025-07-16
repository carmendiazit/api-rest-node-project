import { generateToken } from "../utils/token-generator.js";

const default_user ={
    id: 1,
    email: "user@gmail.com",
    password: "strongPass123"
}

export async function login (req, res){
    const { email, password} = req.body;
    console.log(email);

//aqui deberias verificar las credenciales de usuario

//ejemplo de usuario autenticado
const user = {id:1 , email };

if(email === default_user.email && password=== default_user.password){
    const token =generateToken(user);   
    
    res.json({token});
}else{
    res.sendStatus(401);
}

}