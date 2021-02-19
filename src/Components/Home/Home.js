import UseHome from "../../UseForm/UseHome"

const Home = () => {
  const { temperatura, input } = UseHome()

  return (
    <div className="dataso">
      <div className="w-100">
        <h1 className="text-center vistaDeHoy"><b>Hoy hace {temperatura}</b></h1>
      </div>
      <div className="w-100">
        <h1 className="text-center vistaDeHoy"><b>{input}º</b></h1>
      </div>
    </div>
  );
}

export default Home;