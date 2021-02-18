import { useState } from "react"
import { getStorageArray, setStorage } from "../Utils/UtilsStorage"

const UseAgregar = () => {
    //UseState de Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //UseState de Inputs
    const generateId = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    const [ texto, setTexto ] = useState({ comida: " ", dia: " ", temperatura: " ", id: generateId() })

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
    const OnDelete = () => {
        console.log("nada")
        //const cuentas = getStorageArray("comida");
        //const filteredUsers = cuentas.filter((cuenta) => cuenta.id !== Id);
        //setStorage("comida", filteredUsers);
    }
    return {
        ButtonOnSubmit,
        handleClose,
        handleShow,
        OnDelete,
        OnChange,
        texto,
        show
    }
}

export default UseAgregar;