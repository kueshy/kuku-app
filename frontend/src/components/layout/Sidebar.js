import React, { useState } from "react";
// import NewProduct from "./product/NewProduct";
// import sec1 from "../../assets/images/sec1.jpg";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProductList from "./product/ProductList";
// import Dashboard from "./Dashboard";
// import Egg from "./eggs/Egg";
// import Feeds from "./feeds/Feeds";
// import Mortality from "./mortality/Mortality";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      name: "Dashboard",
      link: "/admin",
      Icon: <ion-icon name="home-outline"></ion-icon>,
    },
    {
      name: "Chickens",
      link: "/admin/poultrieslist",
      Icon: <ion-icon name="heart-outline"></ion-icon>,
    },
    {
      name: "Chicks",
      link: "/admin/chicks",
      Icon: <ion-icon name="list-circle-outline"></ion-icon>,
    },
    {
      name: "Vaccination",
      link: "/admin/vaccination",
      Icon: <ion-icon name="add-outline"></ion-icon>,
    },
    {
      name: "Eggs",
      link: "/admin/eggs",
      Icon: <ion-icon name="egg-outline"></ion-icon>,
    },
    {
      name: "Feeds",
      link: "/admin/feeds",
      Icon: <ion-icon name="cafe-outline"></ion-icon>,
    },
    {
      name: "Quarantine",
      link: "/admin/quarantine",
      Icon: <ion-icon name="cube-outline"></ion-icon>,
    },
    {
      name: "Mortality",
      link: "/admin/mortality",
      Icon: <ion-icon name="cube-outline"></ion-icon>,
    },
    {
      name: "Diseases",
      link: "/admin/diseases",
      Icon: <ion-icon name="medkit-outline"></ion-icon>,
    },
    {
      name: "My account",
      gap: true,
      Icon: <ion-icon name="person-outline"></ion-icon>,
    },
  ];
  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-500 p-5 pt-7 bg-dark-purple h-screen overflow-y-scroll relative`}
    >
      {/* <img src="" alt="" /> */}
      <span
        onClick={() => setOpen(!open)}
        className={`text-4xl  absolute top-9 -right-4 text-indigo-400 cursor-pointer ${
          !open && "rotate-180"
        }`}
      >
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
      </span>
      <div className="flex gap-x-1 items-center">
        {/* <img src="" alt="" /> */}
        <span className="text-4xl items-center text-white">
          <ion-icon name="logo-ionic"></ion-icon>
        </span>
        <h1
          className={`text-white origin-left font-medium text-xl tracking-wider duration-300 ${
            !open && "scale-0"
          }`}
        >
          Poultry Farm
        </h1>
      </div>

      <ul className="pt-4">
        {Menus.map((menu, index) => (
          <a href={menu.link}>
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-2 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              <span className="text-white items-center text-xl">
                {menu.Icon}
              </span>
              <span className={`${!open && "hidden"} duration-500`}>
                {menu.name}
              </span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
