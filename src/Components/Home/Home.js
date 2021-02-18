import UseHome from "../../UseForm/UseHome"

const Home = () => {
  const { temperatura, input } = UseHome()

  return (
    <div>
      <div className="w-100">
        <h1 className="text-center">Hoy hace {temperatura}</h1>
      </div>
      <div className="w-100">
        <h1 className="text-center">{input}º</h1>
      </div>
    </div>
  );
}

export default Home;