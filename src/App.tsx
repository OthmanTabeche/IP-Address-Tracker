import {useState, useEffect, type JSX}  from "react"
import Axios from "axios"
import './index.css'


import InfoIp from "./components/InfoIp"
import Map from "./components/Map"

import type { Data } from "./types/dataType"

const App = (): JSX.Element => {
  const [data, setData] = useState<Data | undefined>()
  const [latitude, setLatitude] = useState<number>(51.505)
  const [longitude, setLongitude] = useState<number>(-0.09)

  useEffect(() => {
    Axios
      .get("https://ipapi.co/json/")
      .then(response => {
        setData(response.data)
        setLatitude(response.data.latitude)
        setLongitude(response.data.longitude)
      })
      .catch(error => {
        console.error("Error feching the IP: ", error)
      })
  }, [])

  return (
    <main className="relative">
      <div className="relative h-[300px]">
        <InfoIp data={data} />
        {data && <Map latitude={latitude} longitude={longitude}/>}
      </div>
    </main>
  )
}

export default App
