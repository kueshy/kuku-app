import React from "react";
import { useSelector } from "react-redux";
import sect1 from "../../assets/images/sec1.jpg";

const Nav = () => {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-dark-purple py-4 md:px-4 px-7">
        <div className="text-2xl text-white cursor-pointer md:flex items-center]">
          <span className="text-3xl mr-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Emonyi's Poultry Farm
        </div>
        <ul className="md:flex md:items-center">
          <li className="md:ml-8 text-xl">
            <a
              href="/"
              className="text-gray-100 hover:text-gray-400 duration-500"
            >
              <span className="text-2xl">
                <ion-icon name="home-outline"></ion-icon>
              </span>
            </a>
          </li>
          {user ? (
            <li className="md:ml-8 text-xl relative">
              <button
                type="button"
                className="text-gray-100 hover:text-gray-400 duration-500 flex flex-row gap-2 items-center"
                data-dropdown-toggle="dropdownAvatar"
                id="dropdownDefault"
              >
                <img src={sect1} className="h-10 w-10 rounded-full" alt="" />
                {user.otherDetails.name}
                <svg
                  className="ml-2 w-4 h-4 mx-1.5"
                  aria-hidden="true"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                ></svg>
              </button>
              <div
                id="dropdownAvatar"
                aria-labelledby="dropdownDefault"
                className="mt-2 hidden bg-white  flex-col p-2 rounded text-md w-36 absolute"
              >
                <ul>
                  <li className="hover:bg-gray-300 hover:text-white">
                    <a className="px-2 py-1 " href="/">
                      Dashboard
                    </a>
                  </li>
                  <li className="hover:bg-gray-300 hover:text-white">
                    <a className="px-2 py-1" href="/">
                      Dashboard
                    </a>
                  </li>
                  <li className="hover:bg-gray-300 hover:text-white">
                    <a className="px-2 py-1 " href="/">
                      Dashboard
                    </a>
                  </li>
                  <li className="hover:bg-gray-300 hover:text-white">
                    <a className="px-2 py-1" href="/">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <li className="md:ml-8 text-xl">
              <a
                href="/auth"
                className="text-gray-100 hover:text-gray-400 duration-500"
              >
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
