import mongoose from 'mongoose'; 
import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv'; 
import { testAdministrativo } from './backend/controllers/administrativos.controller.js';
import { testArea } from './backend/controllers/areas.controller.js';
import { testNomina } from './backend/controllers/nominas.controller.js';
import { testOperarios} from './backend/controllers/operarios.controller.js';

dotenv.config();

mongoose.connect(process.env.url) 
.then (()=> {
    console.log("Si funciona la base de datos")
})
.catch((error)=>{
    console.log ("No funciona la base de datos")
})
const app =express(); 
app.use (cors());

app.listen(4000,()=>{ 
    console.log ('Funciona el servidor')
})

testAdministrativo()
testArea()
testNomina()
testOperarios()