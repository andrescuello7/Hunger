import Delete from "../../UseForm/UseAgregar"
import { Link, Redirect } from "react-router-dom"
import { getStorageArray, setStorage } from "../../Utils/UtilsStorage"

const FormStatict = (props) => {
    //const { OnDelete } = Delete()

    const OnDelete = (id) =>{
        const idDate = (`${props.article.id}`)
        const cuentas = getStorageArray("comida");
        const filteredUsers = cuentas.filter((cuenta) => cuenta.id !== idDate);
        setStorage("comida", filteredUsers);
        window.location.href = "/home";
    }

    return (
        <tr>
            <td>{props.article.dia}</td>
            <td>{props.article.comida}</td>
            <td>{props.article.temperatura}</td>
            <button className="btn btn-danger" onClick={OnDelete}>delete</button>
        </tr>
    )
}
export default FormStatict;