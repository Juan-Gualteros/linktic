import { Router, Request, Response } from "express";
import {
  deleteReservation,
  getReservation,
  getReservations,
  getRooms,
  getStatus,
  getTypeRoom,
  postReservation,
  updateReservation,
} from "../controllers/reservation";
import { logMiddleware } from "../middleware/log";

const router = Router();

/**
 * @swagger
 * /api/reservation/rooms:
 *   get:
 *     summary: Get all rooms
 *     tags: [Reservation]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 * 
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       properties:
 *         room_number:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 *         max_occupancy:
 *           type: number
 *         id_type_room:
 *           type: string
 * 
 * x-custom-info:
 *   note: This endpoint does not return actual data from the database. It's for documentation purposes only.
 */

/**
 * @swagger
 * /api/reservation/typeRoom:
 *   get:
 *     summary: Get all room types
 *     tags: [Reservation]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   beds:
 *                     type: number
 *                   typeBed:
 *                     type: string
 *                   class:
 *                     type: string
 */

/**
 * @swagger
 * /api/reservation/status:
 *   get:
 *     summary: Get all reservation statuses
 *     tags: [Reservation]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name_status:
 *                     type: string
 *                   description:
 *                     type: string
 */

/**
 * @swagger
 * /api/reservation:
 *   get:
 *     summary: Get all reservations
 *     tags: [Reservation]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 *   post:
 *     summary: Create a new reservation
 *     tags: [Reservation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewReservation'
 *     responses:
 *       201:
 *         description: Reservation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 * 
 * components:
 *   schemas:
 *     Reservation:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         phone:
 *           type: number
 *         email:
 *           type: string
 *         start_time:
 *           type: string
 *           format: date-time
 *         end_time:
 *           type: string
 *           format: date-time
 *         id_status:
 *           type: string
 *         id_room:
 *           type: string
 *         total_price:
 *           type: number
 *         state:
 *           type: number
 *         number_of_people:
 *           type: number
 *     NewReservation:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         phone:
 *           type: number
 *         email:
 *           type: string
 *         start_time:
 *           type: string
 *           format: date-time
 *         end_time:
 *           type: string
 *           format: date-time
 *         id_status:
 *           type: string
 *         id_room:
 *           type: string
 *         total_price:
 *           type: number
 *         state:
 *           type: number
 *         number_of_people:
 *           type: number
 */

/**
 * @openapi
 * /api/reservation/{id}:
 *   get:
 *     summary: Get a reservation by ID
 *     tags: [Reservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: Reservation not found
 *   put:
 *     summary: Update a reservation
 *     tags: [Reservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateReservation'
 *     responses:
 *       200:
 *         description: Reservation updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: Reservation not found
 *   delete:
 *     summary: Delete a reservation
 *     tags: [Reservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Reservation deleted successfully
 *       404:
 *         description: Reservation not found
 * 
 * components:
 *   schemas:
 *     Reservation:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         phone:
 *           type: number
 *         email:
 *           type: string
 *         start_time:
 *           type: string
 *           format: date-time
 *         end_time:
 *           type: string
 *           format: date-time
 *         id_status:
 *           type: string
 *         id_room:
 *           type: string
 *         total_price:
 *           type: number
 *         state:
 *           type: number
 *         number_of_people:
 *           type: number
 *     UpdateReservation:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         phone:
 *           type: number
 *         email:
 *           type: string
 *         start_time:
 *           type: string
 *           format: date-time
 *         end_time:
 *           type: string
 *           format: date-time
 *         id_status:
 *           type: string
 *         id_room:
 *           type: string
 *         total_price:
 *           type: number
 *         state:
 *           type: number
 *         number_of_people:
 *           type: number
 */

router.get("/rooms", getRooms)
router.get("/typeRoom", getTypeRoom)
router.get("/status", getStatus)
router.get("/", getReservations);
router.get("/:id", getReservation);
router.post("/", postReservation);
router.put("/:id", updateReservation);
router.delete("/:id", deleteReservation);



export { router };
