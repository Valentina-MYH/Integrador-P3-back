import { loginService, registerService, getUsersService, getUserByIdService, getUserByEmailService, deleteUserByIdService } from "../services/userService";


const loginController =  async (req, res) =>{
try {
    return await loginService(req, res);
} catch (error) {
    return res.status(500).json({message: "Error"})
    console.log(error)
}
}

const registerController =  async (req, res) =>{
    try {
        return await registerService(req, res);
    } catch (error) {
        return res.status(500).json({message: "Error"})
        console.log(error)
    }    
}
const getUsersController =  async (req, res) =>{
    try {
        return await getUsersService(req, res);
    } catch (error) {
        return res.status(500).json({message: "Error"})
        console.log(error)
    }    
} 
const getUserByIdController =  async (req, res) =>{
    try {
        return await getUserByIdService(req, res);
    } catch (error) {
        return res.status(500).json({message: "Error"})
        console.log(error)
    }    
}
const getUserByEmailController =  async (req, res) =>{
    try {
        return await getUserByEmailService(req, res);
    } catch (error) {
        return res.status(500).json({message: "Error"})
        console.log(error)
    }    
}
const  deleteUserByIdController =  async (req, res) =>{
    try {
        return await  deleteUserByIdService(req, res);
    } catch (error) {
        return res.status(500).json({message: "Error"})
        console.log(error)
    }    
}

export {
    registerController};