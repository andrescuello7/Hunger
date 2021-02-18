import Axios from "axios"
import { useEffect, useState, UseState } from "react"

const Home = () => {
  const [ input, setInput ] = useState("")
  const [ temperatura, setTemperatura ] = useState("")
  const promedio = parseInt(23)

  useEffect(() => {
    ApiClima()
    Final()
  }, [])

  const ApiClima = async () => {
    try{
      const traer = await Axios.get(`http://api.weatherstack.com/current?access_key=cb7b3da9b1bbc62baf2d7fb20db82de2&query=Tucuman`)
      setInput(traer.data.current.temperature)
    }catch (error){
      console.log(error)
    }
  }

  const Final = () =>{
    if (input < promedio) {
      setTemperatura('Frio')
    } else {
      setTemperatura('Calor')
    }
  }

  return (
    <div>
      <h1>{temperatura}</h1>
    </div>
  );
}

export default Home;