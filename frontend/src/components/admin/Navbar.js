import React from "react";
import { useSelector } from "react-redux";
import sec1 from "../../assets/images/sec1.jpg";

const Navbar = () => {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="flex justify-between gap-x-4 fixed items-center flex-1">
      {/* <h1>Home Page</h1> */}
      <a href="/profile">
        {user && (
          <div className="flex flex-row items-center gap-x-2 ">
            <img src={sec1} alt="" className="h-14 w-14 rounded-full" />

            <div className="flex flex-col">
              <span className="text-xl font-medium text-gray-900 hover:underline-offset-auto">
                {user.otherDetails.name}
              </span>
              <span className="text-sm text-gray-500">
                @{user.otherDetails.username}
              </span>
            </div>
          </div>
        )}
      </a>
      <div>
        <a href="/">
          <span className="text-2xl p-3 hover:bg-white rounded-lg">
            <ion-icon name="home-outline"></ion-icon>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
