import Delete from "../../UseForm/UseAgregar"
import { Link, Redirect } from "react-router-dom"
import { getStorageArray, setStorage } from "../../Utils/UtilsStorage"

const FormStatict = (props) => {
    //const { OnDelete } = Delete()

    const OnDelete = (id) => {
        const idDate = (`${props.article.id}`)
        const cuentas = getStorageArray("comida");
        const filteredUsers = cuentas.filter((cuenta) => cuenta.id !== idDate);
        setStorage("comida", filteredUsers);
        window.location.href = "/home";
    }

    return (
        <tr className="DatosVista">
            <td>{props.article.dia}</td>
            <td>{props.article.comida}</td>
            <td>{props.article.temperatura}</td>
            <td>
                <button className="btn btn-outline-danger Buttonss" onClick={OnDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}
export default FormStatict;