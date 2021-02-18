import UseFilter from "../../UseForm/UseFilter"

const Vista = () => {
    const { extract, dato, lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = UseFilter()
                    
    const proyectar = extract.map((ext, i) => (<p key={i}>{ext.comida}</p>))

    return (
      <div>
        <div>
        <button onClick={lunes}>Lunes</button>
        <button onClick={Martes}>Martes</button>
        <button onClick={Miercoles}>Mircoles</button>
        <button onClick={Jueves}>Jueves</button>
        <button onClick={Viernes}>Viernes</button>
        <button onClick={Sabado}>Sabado</button>
        <button onClick={Domingo}>Domingo</button>
        </div>
        <div>
          <>{proyectar}</>
        </div>
      </div>
    );
}
export default Vista;