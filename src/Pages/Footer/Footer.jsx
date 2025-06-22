import { Facebook } from "lucide-react"
import { Youtube } from "lucide-react"
import { Instagram } from "lucide-react"
import { Twitter } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-500 text-base-content px-10 py-14">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-white">
        <div>
          <h2 className="font-bold text-xl mb-3">B2B Marketplace Indonesia</h2>
          <p className="text-sm mb-3">
            IndoTrading.com adalah B2B Marketplace, Direktori Bisnis Supplier
            Terbesar di Indonesia. Situs Jual Beli khusus B2B Marketplace, B2B
            E-commerce, B2B, Pusat Distributor, Pabrik, Trading, Supplier, Agen,
            Grosir, Importir, Exportir dan Penyedia Jasa terlengkap di
            Indonesia.
          </p>
          <p className="text-sm">
            Segera Daftarkan perusahaan anda dan dapatkan akses ke informasi
            projek, tender dan dapatkan website gratis untuk perusahaan anda.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">INFORMASI</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="https://www.indotrading.com/contact-us.aspx">
                Hubungi Kami
              </a>
            </li>
            <li>
              <a href="https://www.indotrading.com/askquestion.aspx">
                Indotrading FAQ
              </a>
            </li>
            <li>
              <a href="https://www.indotrading.com/successstory/">
                Testimonial
              </a>
            </li>
            <li>
              <a href="https://www.indotrading.com/halamankarir.aspx">Karir</a>
            </li>
            <li>
              <a href="https://www.indotrading.com/partner.aspx">Partners</a>
            </li>
            <li>
              <a href="https://www.indotrading.com/event.aspx">
                Event Indotrading
              </a>
            </li>
            <li>
              <a href="https://www.indotrading.com/termandcondition.aspx">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="https://www.indotrading.com/privacypolicy.aspx">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">BELI & JUAL</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="https://www.indotrading.com/product/">Produk Terbaru</a>
            </li>
            <li>
              <a href="https://www.indotrading.com/productcatalog/">
                Kategori Produk
              </a>
            </li>
            <li>
              <a href="https://www.indotrading.com/companycatalog/">
                Kategori Perusahaan
              </a>
            </li>
            <li>
              <a href="https://www.indotrading.com/howtobuy.aspx">
                Cara Belanja
              </a>
            </li>
            <li>
              <a>Register as Buyer</a>
            </li>
            <li>
              <a href="https://www.indotrading.com/company/">
                Perusahaan Terbaru
              </a>
            </li>
            <li>
              <a href="https://www.indotrading.com/rfqlist/">Cari Proyek</a>
            </li>
            <li>
              <a href="https://www.indotrading.com/premiumsupplier/">
                Daftar Jadi Supplier
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">FOLLOW US</h3>
          <ul className="flex gap-5">
            <li>
              <a href="https://www.facebook.com/IndoTrading/">
                <Facebook className="hover:bg-red-500 rounded-sm bg-gray-300 text-gray-600 hover:text-white w-10 h-10" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCsHwn81g7Ie_jj-IbWjKKGw">
                <Youtube className="hover:bg-red-500 rounded-sm bg-gray-300 text-gray-600 hover:text-white w-10 h-10" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/indotrading_official/">
                <Instagram className="hover:bg-red-500 rounded-sm bg-gray-300 text-gray-600 hover:text-white w-10 h-10" />
              </a>
            </li>
            <li>
              <a href="https://x.com/indotrading_">
                <Twitter className="hover:bg-red-500 rounded-sm bg-gray-300 text-gray-600 hover:text-white w-10 h-10" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t pt-5 text-sm text-center">
        <p>
          © 2025 Indotrading - Indonesia B2B Marketplace Direktori Bisnis
          Indonesia All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
