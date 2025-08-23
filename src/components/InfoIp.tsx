import { type JSX } from "react"
import type { Data } from "../types/dataType"

interface InfoIpProps {
  data: Data | undefined
}

const InfoIp = ({ data }: InfoIpProps): JSX.Element => {
  if (!data) {
    return (
      <section>
        <h1>FETCHING THE DATA...</h1>
      </section>
    )
  }

  return (
    <section className="absolute left-1/2 -translate-x-1/2 -bottom-14 z-10 flex flex-row gap-10 justify-center items-center w-[83%] bg-white mx-auto p-5 rounded-2xl shadow-lg">
      <div className="w-2/6">
        <h1 className="text-[10px] text-gray-900 mb-1.5 font-bold">IP ADDRESS</h1>
        <span className="flex flex-wrap">
          <p className="font-bold text-xl">{data.ip}</p>
        </span>
      </div>
      <div className="w-px h-14 bg-black mx-4" />
      <div className="w-2/6">
        <h1 className="text-[10px] text-gray-900 mb-1.5 font-bold">LOCATION</h1>
        <span className="flex flex-wrap">
          <p className="font-bold text-xl">
            {data.country_code_iso3}, {data.country_name}, {data.country_capital}
          </p>
        </span>
      </div>
      <div className="w-px h-14 bg-black mx-4" />
      <div className="w-2/6">
        <h1 className="text-[10px] text-gray-900 mb-1.5 font-bold">TIMEZONE</h1>
        <span className="flex flex-wrap">
          <p className="font-bold text-xl">{data.timezone}</p>
        </span>
      </div>
      <div className="w-px h-14 bg-black mx-4" />
      <div className="w-2/6">
        <h1 className="text-[10px] text-gray-900 mb-1.5 font-bold">ISP</h1>
        <span className="flex flex-wrap">
          <p className="font-bold text-xl">{data.org}</p>
        </span>
      </div>
    </section>
  )
}

export default InfoIp