import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../layout/Sidebar";
import Navbar from "./Navbar";

const Dashboard = () => {
  const { poultry } = useSelector((state) => state.poultryReducer);
  const { chick } = useSelector((state) => state.chickReducer);
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 flex-1 h-screen overflow-y-scroll scroll-smooth ">
        <Navbar />
        <div className="my-20">
          <div className="bg-white w-full m-auto h-32 shadow-lg rounded-md flex items-center justify-center flex-col">
            <span className="text-2xl text-indigo-500">Total Count</span>
            <span className="font-bold text-indigo-500 text-2xl">
              {poultry.reduce((acc, c) => acc + c.totalCount, 0)}
            </span>
          </div>
          <div className="flex w-full flex-wrap gap-x-4">
            <div className="bg-indigo-500 p-5 mt-4 text-white w-60 m-auto h-32 shadow-lg rounded-md flex flex-col">
              <span className="text-xl">Chickens</span>
              <span className="font-bold text-2xl">142</span>
              {/* <span className="text-4xl text-white">
            <ion-icon name="male-female-outline"></ion-icon>
          </span> */}
              <div className="border-b"></div>
              <div className="mt-2">
                <a href="">
                  <span className="text-white text-sm">See more &rarr;</span>
                </a>
              </div>
            </div>
            <div className="bg-indigo-500 p-5 mt-4 text-white w-60 m-auto h-32 shadow-lg rounded-md flex flex-col">
              <span className="text-xl">Hen</span>
              <span className="font-bold text-2xl">68</span>
              <div className="border-b"></div>
              {/* <span className="text-4xl text-white">
            <ion-icon name="female-outline"></ion-icon>
          </span> */}
              <div className="mt-2">
                <a href="">
                  <span className="text-white text-sm">See more &rarr;</span>
                </a>
              </div>
            </div>
            <div className="bg-indigo-500 p-5 mt-4 text-white w-60 m-auto h-32 shadow-lg rounded-md flex flex-col">
              <span className="text-xl">Roosters</span>
              <span className="font-bold text-2xl">25</span>
              {/* <span className="text-4xl text-white">
            <ion-icon name="male-outline"></ion-icon>
          </span> */}
              <div className="border-b"></div>
              <div className="mt-2">
                <a href="">
                  <span className="text-white text-sm">See more &rarr;</span>
                </a>
              </div>
            </div>
            <div className="bg-white p-5 mt-4 text-white w-60 m-auto h-32 shadow-lg rounded-md flex flex-col">
              <span className="text-xl text-indigo-500">Chicks</span>
              <span className="font-bold text-2xl text-indigo-500">
                {chick.reduce((a, c) => a + c.totalCount, 0)}
              </span>
              <div className="border-b"></div>
              <div className="mt-2">
                <a href="">
                  <span className="text-indigo-500 text-sm">
                    See more &rarr;
                  </span>
                </a>
              </div>
            </div>
            <div className="bg-white  p-5 mt-4 w-60 m-auto h-32 shadow-lg rounded-md flex flex-col">
              <span className="text-xl">Eggs</span>
              <span className="font-bold text-2xl">85</span>
              <div className="border-b"></div>
              <div className="mt-2">
                <a href="">
                  <span className="text-sm">See more &rarr;</span>
                </a>
              </div>
            </div>
            <div className="bg-indigo-500 p-5 mt-4 text-white w-60 m-auto h-32 shadow-lg rounded-md flex flex-col">
              <span className="text-xl">Mortality</span>
              <span className="font-bold text-2xl">8,500</span>
              <div className="border-b"></div>
              <div className="mt-2">
                <a href="">
                  <span className="text-sm">See more &rarr;</span>
                </a>
              </div>
            </div>
            <div className="bg-indigo-500 p-5 mt-4 text-white w-60 m-auto h-32 shadow-lg rounded-md flex flex-col">
              <span className="text-xl">Chicks Mortality</span>
              <span className="font-bold text-2xl">8,500</span>
              <div className="border-b"></div>
              <div className="mt-2">
                <a href="">
                  <span className="text-sm">See more &rarr;</span>
                </a>
              </div>
            </div>
            <div className="bg-indigo-500 p-5 mt-4 text-white w-60 m-auto h-32 shadow-lg rounded-md flex flex-col">
              <span className="text-xl">Mortality rate</span>
              <span className="font-bold text-2xl">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
