import SimpleSlider from "../../Components/SimpleSlider"
import Footer from "../Footer/Footer"
import Perusahaan from "../Perusahaan/Perusahaan"
import Kategori from "../Produk/Kategori"
import Produk from "../Produk/Produk"
function Home() {
  return (
    <div>
      <div
        className="bg-[url(/assets/Home/Ellipse1.png)] bg-cover bg-center "
        id="Home"
      >
        <div className="pt-5">
          <SimpleSlider />
        </div>
        <div className="bg-[url(/assets/Home/writing.svg)] bg-cover bg-center  max-w-5xl h-[300px] w-[400px] mx-10 my-5 drop-shadow-lg container">
          <ul className="menu menu-horizontal pt-15">
            <li>
              <img
                src="//resources.indotrading.com/frontend/images/img/logo-rfq-white-font.png"
                alt="benner"
                className="w-30 h-10"
              />
            </li>
            <li className="text-white text-2xl font-semibold font-sans pt-2 ">
              Requet For Quotion
            </li>
            <li className="text-white text-xl font-semibold font-sans pl-3">
              Satu Permintaan, Banyak Penawaran
            </li>
            <li className="text-white text-3xl font-semibold font-sans pl-3 pt-5">
              5000+
            </li>
            <li className="text-white text-3xl font-semibold font-sans pl-3 pt-5">
              80.000+
            </li>
            <li className="text-white text-3xl font-semibold font-sans pl-3 pt-5">
              15.000+
            </li>
            <li className="text-white text-base font-semibold font-sans pl-3 pt-1">
              RFQ/Bulan
            </li>
            <li className="text-white text-base font-semibold font-sans pl-8 pt-1">
              Suppliers
            </li>
            <li className="text-white text-base font-semibold font-sans pl-16 pt-1">
              Kategori
            </li>
            <li className="pl-3 pt-4">
              <a href="https://www.indotrading.com/requestforquotation.aspx">
                <button className="btn btn-sm sm:btn-sm md:btn-sm lg:btn-sm xl:btn-sm btn-soft bg-red-700 rounded-sm border-0 text-white font-semibold ">
                  PELAJARI LEBIH LANJUT
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="Produk">
        <Produk />
      </div>
      <Kategori />
      <div id="Perusahaan">
        <Perusahaan />
      </div>
      <Footer />
    </div>
  )
}

export default Home
