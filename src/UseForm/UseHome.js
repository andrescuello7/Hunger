import Axios from "axios"
import { useEffect, useState } from "react"

const UseHome = () => {
    const [input, setInput] = useState("")
    const [temperatura, setTemperatura] = useState("")
    const promedio = parseInt(23)

    const Final = () => {
        if (input > promedio) {
            setTemperatura('Frio')
        } else {
            setTemperatura('Calor')
        }
    }

    useEffect(() => {
        ApiClima()
        Final()
    }, [])

    const ApiClima = async () => {
        try {
            const traer = await Axios.get(`http://api.weatherstack.com/current?access_key=cb7b3da9b1bbc62baf2d7fb20db82de2&query=Tucuman`)
            setInput(traer.data.current.temperature)
        } catch (error) {
            console.log(error)
        }
    }
    return {
        useEffect,
        ApiClima,
        Final,
        temperatura,
        promedio,
        input
    }
}

export default UseHome;