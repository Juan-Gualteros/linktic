import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertReservation, getAllReservations, getOneReservation, updateAReservation, deleteAReservation, getAllRooms, getTypeOfRooms, getStatuses } from "../services/reservation.service"

const getReservation = async({params}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await getOneReservation(id)
        const data = response ? response : "NOT_FOUND"
        res.send(data)
    } catch (error) {
        handleHttp(res, 'Error getReservation')
    }
}

const getReservations = async (req: Request, res: Response) => {
    try {
        const response = await getAllReservations()
        res.send(response)
    } catch (error) {
        handleHttp(res, 'Error getReservations')
    }
}

const updateReservation = async({params, body}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await updateAReservation(id, body)
        res.send(response)
    } catch (error) {
        handleHttp(res, 'Error updateReservation')
    }
}

const postReservation = async ({body}: Request, res: Response) => {
    console.log(body)
    try {
        const reponse = await insertReservation(body)
        res.send(reponse)
    } catch (error) {
        handleHttp(res, 'Error saveReservation', error)
    }
}

const deleteReservation = async({params}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await deleteAReservation(id)
        res.send(response)
    } catch (error) {
        handleHttp(res, 'Error deleteReservation')
    }
}

const getRooms = async(req: Request, res: Response) => {
    try {
        const response = await getAllRooms()
        res.send(response)
    } catch (error) {
        handleHttp(res, 'Error getRooms')
    }
}

const getTypeRoom = async(req: Request, res: Response) => {
    try {
        const response = await getTypeOfRooms()
        res.send(response)
    } catch (error) {
        handleHttp(res, 'Error getTypeRoom')
    }
}
const getStatus = async(req: Request, res: Response) => {
    try {
        const response = await getStatuses()
        res.send(response)
    } catch (error) {
        handleHttp(res, 'Error getStatus')
    }
}

export { getReservation, getReservations, updateReservation, postReservation, deleteReservation, getRooms, getTypeRoom, getStatus}