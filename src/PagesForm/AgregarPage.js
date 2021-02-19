import Agregar from "../Components/Agregar/Agregar"
import Datos from "../Components/Formulario/Datos"

const AgregarPage = () => {
    return (
        <div>
            <div className="p-2">
                <a href="/">Home</a>
            </div>
            <Agregar />
            <Datos />
        </div>
    )
}
export default AgregarPage;