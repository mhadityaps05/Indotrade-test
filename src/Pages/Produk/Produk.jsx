import React from "react"
import Products from "../../Data/Products"

function Produk() {
  const uniqueTypes = [...new Set(Products.map((product) => product.tipe))]

  return (
    <div className="p-10">
      {uniqueTypes.map((type) => (
        <div key={type} className="mb-10">
          <div className="flex gap-2">
            <img src="assets/Home/Rectangle.svg" />
            <h1 className="text-3xl font-semibold mb-5 pt-5">{type}</h1>
          </div>
          <div className="w-full h-1 bg-red-600 rounded mb-5"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Products.filter((product) => product.tipe === type).map(
              (product) => (
                <div
                  key={product.id}
                  className="card bg-white shadow-lg hover:shadow-xl transition"
                >
                  <figure>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover h-full w-full"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <div className="flex items-center gap-2">
                      <img
                        src={product.flag}
                        alt={product.negara}
                        className="w-5 h-5"
                      />
                      <span>{product.negara}</span>
                    </div>
                    <p className="font-semibold text-red-500">
                      {product.price}
                    </p>
                    <div className="badge badge-outline">
                      {product.kategori}
                    </div>
                    <div className="card-actions justify-end mt-2">
                      <a href={product.link}>
                        <button className="btn bg-red-600 text-white border-none hover:bg-red-700 rounded-sm">
                          Lihat Detail
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Produk
