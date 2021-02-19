import UseFilter from "../../UseForm/UseFilter"
import { Button, Modal, Form } from "react-bootstrap"
import Home from "../Home/Home"

const Vista = () => {
  const { temperatura, datos, input, extract, dato, lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = UseFilter()
  const proyectar = extract.map((ext, i) => (<p key={i}>{ext.comida}</p>))
  return (
    <div>
      <div className="Routes">
        <a href="/home">Agregar +</a>
      </div>
      <div className="Buttons w-100">
        <button className="btn btn-info" onClick={lunes}><b>Lu</b></button>
        <button className="btn btn-info" onClick={Martes}><b>Ma</b></button>
        <button className="btn btn-info" onClick={Miercoles}><b>Mie</b></button>
        <button className="btn btn-info" onClick={Jueves}><b>Ju</b></button>
        <button className="btn btn-info" onClick={Viernes}><b>Vi</b></button>
        <button className="btn btn-info" onClick={Sabado}><b>Sa</b></button>
        <button className="btn btn-info" onClick={Domingo}><b>Dom</b></button>
      </div>
      <div>
        <Home />
      </div>
      <div>
        <>{proyectar}</>
      </div>
    </div>
  );
}
export default Vista;