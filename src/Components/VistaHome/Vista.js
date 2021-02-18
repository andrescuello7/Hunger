import UseFilter from "../../UseForm/UseFilter"
import { Button, Modal, Form } from "react-bootstrap"

const Vista = () => {
  const { temperatura, datos, input, extract, dato, lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = UseFilter()
  const proyectar = extract.map((ext, i) => (<p key={i}>{ext.comida}</p>))
  return (
    <div className="">
      <div className="Buttons w-100">
        <button className="btn btn-outline-info m-2" onClick={lunes}>Lunes</button>
        <button className="btn btn-outline-info m-2" onClick={Martes}>Martes</button>
        <button className="btn btn-outline-info m-2" onClick={Miercoles}>Miercoles</button>
        <button className="btn btn-outline-info m-2" onClick={Jueves}>Jueves</button>
        <button className="btn btn-outline-info m-2" onClick={Viernes}>Viernes</button>
        <button className="btn btn-outline-info m-2" onClick={Sabado}>Sabado</button>
        <button className="btn btn-outline-info m-2" onClick={Domingo}>Domingo</button>
      </div>
      <div>
        <>{proyectar}</>
      </div>
      <div className="Routes">
        <a href="/home">Agregar +</a>
      </div>
    </div>
  );
}
export default Vista;