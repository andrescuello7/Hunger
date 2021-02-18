import { getStorageArray } from "../Utils/UtilsStorage"
import { useState, useEffect } from "react"

const Usefilter = () =>{
    const [ dato, setDato ] = useState("")
    const datos = getStorageArray('comida')
    const extract = datos.filter((ext)=>  ext.dia === dato);
    const lunes = () =>{
        setDato("Lunes")
    }
    const Martes = () =>{
        setDato("Martes")
    }
    const Miercoles = () =>{
        setDato("Miercoles")
    }
    const Jueves = () =>{
        setDato("Jueves")
    }
    const Viernes = () =>{
        setDato("Viernes")
    }
    const Sabado = () =>{
        setDato("Sabado")
    }
    const Domingo = () =>{
        setDato("Domingo")
    }
    
    return {
        extract,
        dato,
        lunes,
        Martes,
        Miercoles,
        Jueves,
        Viernes,
        Sabado,
        Domingo
    }
}

export default Usefilter;