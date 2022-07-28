import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../actions/AuthAction";

const Auth = () => {
  const loading = useSelector((state) => state.authReducer.loading);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const reset = () => {
    setData({
      username: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(data));
    localStorage.getItem(data);
    // Navigate("/");

    reset();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen items-center justify-center gap-4">
      <div>
        <div className="flex items-center">
          <span className="text-6xl mr-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <div>
            <h1 className="text-3xl uppercase">Poultry Farm</h1>
            <span className="text-sm">
              We grow quality products from our farm
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 bg-white shadow-lg rounded-md w-80">
        <h1 className="text-xl text-center">User account login</h1>
        <div className="mt-4">
          <form action="" onSubmit={handleSubmit}>
            <div className="">
              <input
                type="text"
                name="username"
                className="form-input w-full rounded-md border-1"
                placeholder="e.g. Emonyi"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <input
                type="password"
                name="password"
                className="form-input w-full rounded-md border-1"
                placeholder="**************"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <span className="self-end">
                <a href="/forgotPassword">Forgot password?</a>{" "}
              </span>
            </div>

            <button
              type="submit"
              className="bg-yellow-400 px-4 py-1 mt-4 rounded-md text-white button"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
