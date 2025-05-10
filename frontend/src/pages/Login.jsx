import React from 'react'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email is required";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }

      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert("Login Successful");
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <div className="w-full min-h-screen absolute top-0 left-0 bg-[url('/bg.jpg')] bg-cover flex justify-center items-center bg-white px-4 py-10">
      <div className="w-[40%] h-[500px] p-8 border border-neutral-900 rounded-2xl shadow-lg bg-white text-neutral-900 flex flex-col justify-between">
        <h1 className="text-3xl font-bold text-center mt-5">Login</h1>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 mt-6">

          {/* Email */}
          <div className="flex flex-col gap-1 text-left">
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-md border border-neutral-900 outline-none focus:ring-2 focus:ring-neutral-900"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm text-left">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 text-left">
            <label className="text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-md border border-neutral-900 outline-none focus:ring-2 focus:ring-neutral-900"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm text-left">{formik.errors.password}</p>
            )}
          </div>

          {formik.status && (
            <p className="text-red-500 text-sm mt-2 text-center">{formik.status}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-[#FF9B17] text-white font-semibold active:scale-105 border border-white hover:scale-105 transition ease-in-out flex items-center justify-center"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <div className="h-4 w-4 border-t-2 border-white rounded-full"></div>
            ) : (
              <span>Login</span>
            )}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          New user?{" "}
          <span
            onClick={() => navigate("/register")}
            className="font-semibold underline hover:text-gray-600 cursor-pointer transition"
          >
            Register
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login;
