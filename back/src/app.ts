import "dotenv/config"
import express from "express";
import cors from "cors";
import { router } from "./routes"
import db from "./config/mongo"
import {swaggerDocs} from "./swagger"
const PORT = process.env.PORT || 3001;

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
db().then(() => console.log('Conectado correctamente'))
app.listen(PORT, ()=> {
  console.log(`Ejecutando por el puerto ${PORT}`)
  swaggerDocs(app, Number(PORT))
})