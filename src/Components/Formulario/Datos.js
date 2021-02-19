import React from 'react';
import { getStorageArray, setStorage } from "../../Utils/UtilsStorage"
import FormStatic from "../Statics/FormStatic"
import { Table } from "react-bootstrap"


const Datos = () => {

    const mostrar = getStorageArray("comida")
    const resutExtract = mostrar.map((art, i) => (<FormStatic article={art} id={i} />))

    return (
        <div>
            <div className="visto">
                <table className="vista table">
                        <thead className="DatosVista">
                            <tr>
                                <th scope="col">Dia</th>
                                <th scope="col">Comida</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Opcion</th>
                            </tr>
                        </thead>
                        <tbody className="DatosVista">
                            <>{resutExtract}</>
                        </tbody>
                </table>
            </div>
        </div>
    )
};
export default Datos;