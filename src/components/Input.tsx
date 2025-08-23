import { type JSX } from "react"
import arrow from "../../public/images/icon-arrow.svg"
import pattern from "../../public/images/pattern-bg-desktop.png"

const Input = (): JSX.Element => {
  return (
    <div
      className="relative w-full h-72 bg-cover bg-center"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <form className="absolute inset-0 flex flex-col items-center m-12 px-4">
        <legend className="text-white text-3xl font-bold mb-8">
          IP Address Tracker
        </legend>
        <div className="w-full max-w-xl flex">
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter IP address..."
            className="flex-grow bg-white px-4 py-3 rounded-l-xl text-black shadow-sm focus:outline-none"
          />
          <button className="bg-black rounded-r-xl">
            <img
              src={arrow}
              alt="Arrow icon"
              className="w-11 p-3"
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Input