import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getUser = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error getUser')
    }
}

const getUsers = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error getUsers')
    }
}

const updateUser = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error updateUser')
    }
}

const postUser = ({body}: Request, res: Response) => {
    try {
        res.send(body)
    } catch (error) {
        handleHttp(res, 'Error saveUser')
    }
}

const deleteUser = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error deleteUser')
    }
}

export { getUser, getUsers, updateUser, postUser, deleteUser}