import { useState } from "react"
import { getStorageArray, setStorage } from "../Utils/UtilsStorage"

const UseAgregar = () => {
    //UseState de Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //UseState de Inputs
    const [ texto, setTexto ] = useState({ comida: " ", dia: " ", temperatura: " " })

    //Funciones
    const ButtonOnSubmit = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        const cuentas = getStorageArray("comida");
        const cuentasUp = [...cuentas, texto];
        setStorage("comida", cuentasUp);
    }
    const OnChange = (e) =>{
        const value = e.target.value;
        const name = e.target["name"];
        const objeto = { ...texto, [name]: value };
        setTexto(objeto);
    }
    return {
        ButtonOnSubmit,
        handleClose,
        handleShow,
        OnChange,
        texto,
        show
    }
}

export default UseAgregar;