import React from "react"
import KategoriData from "../../Data/KategoriData"

function Kategori() {
  const grouped = KategoriData.reduce((acc, item) => {
    if (!acc[item.tipe]) {
      acc[item.tipe] = []
    }
    acc[item.tipe].push(item)
    return acc
  }, {})

  return (
    <div className="p-10 flex justify-center bg-stone-50">
      {Object.entries(grouped).map(([tipe, items]) => (
        <div key={tipe} className="mb-10 bg-white p-5 shadow-lg">
          <a
            className="cursor-pointer"
            href="https://www.indotrading.com/jual-bahankimia"
          >
            <h2 className="text-8xl font-semibold mb-3 flex justify-center hover:text-red-400">
              {tipe}
            </h2>
          </a>
          <div className="w-100 h-0.5 bg-red-600 rounded mb-5 mx-auto"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 pt-2 container">
            {items.map((item) => (
              <a
                key={item.id}
                className="card bg-white p-4 hover:shadow-xl shadow-stone-300 transition w-50 cursor-pointer"
                href={item.link}
              >
                <img
                  src={item.image}
                  alt={item.nama}
                  className="w-full h-full object-cover"
                />
                <p className="mt-3 font-semibold text-center">{item.nama}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Kategori
