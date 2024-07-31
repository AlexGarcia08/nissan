import { ModeloArea } from "../models/areas.model.js";

export const testArea =() =>{
    console.log('Si funcina la conexion de areas')
}

ModeloArea.create({
    area: "motorizacion",
    trabajadores: 50,
})