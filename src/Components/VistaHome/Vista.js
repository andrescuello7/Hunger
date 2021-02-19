import "./Vista.css"
import UseFilter from "../../UseForm/UseFilter"
import { Button, Modal, Form } from "react-bootstrap"
import Home from "../Home/Home"

const Vista = () => {
  const { proyectar, lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = UseFilter()
  return (
    <div>
      <div className="Buttons w-100">
        <button className="btn btn-outline-info" onClick={lunes}><b>Lu</b></button>
        <button className="btn btn-outline-info" onClick={Martes}><b>Ma</b></button>
        <button className="btn btn-outline-info" onClick={Miercoles}><b>Mie</b></button>
        <button className="btn btn-outline-info" onClick={Jueves}><b>Ju</b></button>
        <button className="btn btn-outline-info" onClick={Viernes}><b>Vi</b></button>
        <button className="btn btn-outline-info" onClick={Sabado}><b>Sa</b></button>
        <button className="btn btn-outline-info" onClick={Domingo}><b>Dom</b></button>
      </div>
      <div className="Routes">
        <a href="/home">Agregar +</a>
      </div>
      <div className="columna">
        <div>
          <Home />
        </div>
        <div className="container">
          <div className="box">
            <>{proyectar}</>
            <a href="https://www.youtube.com/" className="buy">Buy New</a>
            <div className="circle"></div>
            <img src="https://www.seekpng.com/png/full/169-1698224_minus-aleja-pinterest-granjas-sol-minus.png" className="product" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Vista;