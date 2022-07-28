import React, { useState } from "react";
import NewProduct from "./product/NewProduct";
import sec1 from "../../assets/images/sec1.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./product/ProductList";
import Dashboard from "./Dashboard";
import Egg from "./eggs/Egg";
import Feeds from "./feeds/Feeds";
import Mortality from "./mortality/Mortality";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { name: "Dashboard", Icon: <ion-icon name="home-outline"></ion-icon> },
    {
      name: "Chickens",
      link: "/poultry/new",
      Icon: <ion-icon name="heart-outline"></ion-icon>,
    },
    { name: "Chicks", Icon: <ion-icon name="list-circle-outline"></ion-icon> },
    { name: "Vaccination", Icon: <ion-icon name="add-outline"></ion-icon> },
    { name: "Eggs", Icon: <ion-icon name="egg-outline"></ion-icon> },
    { name: "Feeds", Icon: <ion-icon name="cafe-outline"></ion-icon> },
    { name: "Quarantine", Icon: <ion-icon name="cube-outline"></ion-icon> },
    { name: "Diseases", Icon: <ion-icon name="medkit-outline"></ion-icon> },
    {
      name: "My account",
      gap: true,
      Icon: <ion-icon name="person-outline"></ion-icon>,
    },
  ];
  return (
    <div className="flex ">
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
        {/* <div> */}
        <ul className="pt-4">
          {/* <li className="group relative px-4 dropdown cursor-pointer inline">
            <span>Dashy</span>
            <div className="group-hover:block absolute hidden h-auto pt-1 dropdown-menu">
              <ul className="block bg-white">
                <li>
                  <a href="">Item 1</a>
                </li>
                <li>
                  <a href="">Item 2</a>
                </li>
                <li>
                  <a href="">Item 3</a>
                </li>
              </ul>
            </div>
          </li> */}

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
        {/* </div> */}
      </div>
      {/* <div className="p-7 text-2xl font-semibold flex-1 h-screen"> */}
      <div className="p-7 flex-1 h-screen overflow-y-scroll scroll-smooth ">
        {/* <h1>Home Page</h1> */}
        <div className="flex flex-row items-center gap-x-2 fixed">
          <img src={sec1} alt="" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col">
            <span className="text-xl font-medium text-gray-900">Emonyi</span>
            <span className="text-sm text-gray-500">e@gmail.com</span>
          </div>
        </div>
        {/* <Dashboard /> */}
        {/* <NewProduct /> */}
        {/* <ProductList /> */}
        {/* <Feeds /> */}
        {/* <Egg /> */}
        <Mortality />
        <Routes>
          <Route path="/poultry/new" element={<NewProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default Sidebar;
