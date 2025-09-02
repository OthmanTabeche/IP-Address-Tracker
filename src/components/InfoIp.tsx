import { type JSX } from "react"
import type { Data } from "../types/dataType"
import pattern from "../../public/images/pattern-bg-desktop.png"

interface InfoIpProps {
  data: Data | undefined
}

const InfoIp = ({ data }: InfoIpProps): JSX.Element => {
  if (!data) {
    return (
      <div
        className="relative w-full h-72 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <h1 className="text-white text-3xl font-bold">FETCHING THE DATA...</h1>
      </div>
    )
  }

  return (
    <div
      className="relative w-full h-72 bg-cover bg-center"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold mb-8">IP Address Tracker</h1>
        <section className="flex flex-row gap-6 justify-center items-center w-[90%] max-w-6xl bg-white mx-auto p-6 rounded-2xl shadow-lg">
          <div className="flex-1 text-center">
            <h2 className="text-[10px] text-gray-500 mb-2 font-bold uppercase tracking-wider">IP ADDRESS</h2>
            <p className="font-bold text-xl text-gray-900">{data.ip}</p>
          </div>
          <div className="w-px h-16 bg-gray-300" />
          <div className="flex-1 text-center">
            <h2 className="text-[10px] text-gray-500 mb-2 font-bold uppercase tracking-wider">LOCATION</h2>
            <p className="font-bold text-xl text-gray-900">
              {data.country_code_iso3}, {data.country_name}, {data.country_capital}
            </p>
          </div>
          <div className="w-px h-16 bg-gray-300" />
          <div className="flex-1 text-center">
            <h2 className="text-[10px] text-gray-500 mb-2 font-bold uppercase tracking-wider">TIMEZONE</h2>
            <p className="font-bold text-xl text-gray-900">{data.timezone}</p>
          </div>
          <div className="w-px h-16 bg-gray-300" />
          <div className="flex-1 text-center">
            <h2 className="text-[10px] text-gray-500 mb-2 font-bold uppercase tracking-wider">ISP</h2>
            <p className="font-bold text-xl text-gray-900">{data.org}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default InfoIp