import Agregar from "../Components/Agregar/Agregar"
import Datos from "../Components/Formulario/Datos"

const AgregarPage = () => {
    return (
        <div>
            <Agregar />
            <Datos />
            <div className="p-2 Routes">
                <a href="/"><i><b>Home</b></i></a>
            </div>
        </div>
    )
}
export default AgregarPage;