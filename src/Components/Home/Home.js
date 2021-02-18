import UseHome from "../../UseForm/UseHome"

const Home = () => {
  const { temperatura } = UseHome()

  return (
    <div>
      <h1>{temperatura}</h1>
    </div>
  );
}

export default Home;