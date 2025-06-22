import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Home from "../Pages/Home/Home"
import Auth from "../Pages/Auth/Auth"
import SignUp from "../Pages/Auth/SignUp/SignUp"
import SignIn from "../Pages/Auth/SignIn/SignIn"
import Error from "../Pages/Error/Error"
import Produk from "../Pages/Produk/Produk"
function MainLayout() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produk" element={<Produk />} />
        <Route path="auth" element={<Auth />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainLayout
