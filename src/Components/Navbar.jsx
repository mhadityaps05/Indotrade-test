import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { LogIn } from "lucide-react"
import { CircleQuestionMark } from "lucide-react"
function Navbar() {
  return (
    <div className="navbar sticky top-0 shadow-sm z-50 bg-white">
      <div className="flex ">
        <div className="justify-start flex pl-10 h-20">
          <Link to="/">
            <img src="/assets/Home/indotrading.svg" />
          </Link>
        </div>
      </div>
      <div className="flex container mx-auto justify-start p-5">
        <ul className="menu menu-horizontal textarea-lg gap-5">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Produk">Produk</a>
          </li>
          <li>
            <a href="#Perusahaan">Perusahaan</a>
          </li>
          <li>
            <details>
              <summary>Kategori</summary>
              <ul class="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Bahasa</a>
          </li>
          <li className="w-100">
            <label className="input bg-stone-200 rounded-2xl">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Apa yang Anda Butuhkan?"
              />
            </label>
          </li>
          <div className="flex gap-3">
            <li>
              <Link>
                <button class="btn btn-soft p-2 bg-red-600 text-white rounded-md hover:bg-red-600 transition">
                  <ShoppingCart />
                </button>
              </Link>
            </li>
            <li>
              <Link to="/auth/signin">
                <button class="btn btn-soft p-2 bg-red-600 text-white rounded-md hover:bg-red-600 transition">
                  <LogIn />
                </button>
              </Link>
            </li>
            <li>
              <Link>
                <button class="btn btn-soft p-2 bg-red-600 text-white rounded-md hover:bg-red-600 transition">
                  <CircleQuestionMark />
                </button>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
