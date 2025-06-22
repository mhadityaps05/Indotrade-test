import { Link } from "react-router-dom"
import React from "react"

function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-stone-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <Link to="/auth/signup">
            <div className="mb-2 text text-blue-600 pl-20">
              Don't have account?
            </div>
          </Link>

          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
