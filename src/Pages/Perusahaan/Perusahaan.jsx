import React from "react"
import PerusahaanData from "../../Data/PerusahaanData"

function Perusahaan() {
  return (
    <div className="p-10 flex bg-stone-50">
      <div className=" p-5 shadow shadow-stone-300 bg-white">
        <div className="flex justify-start items-center mb-3">
          <img src="assets/Home/Rectangle.svg" className="mr-5" />
          <div className="font font-extralight text text-3xl pr-225">
            PERUSAHAAN TERBARU
          </div>
          <a href="https://www.indotrading.com/company/">
            <button className="btn border-none hover hover:bg-red-600 hover:text-white rounded-lg">
              Lihat Semua
            </button>
          </a>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3">
          {PerusahaanData.map((item) => (
            <div key={item.id} className="card p-4 border border-stone-200">
              <img
                src={item.image}
                alt={item.nama}
                className="w-full h-40 object-cover"
              />
              <h2 className="font-bold text-xl mt-2">{item.nama}</h2>
              <p className="text-sm text-gray-600">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Perusahaan
