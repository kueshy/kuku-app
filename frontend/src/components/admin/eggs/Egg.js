import React from "react";
import Sidebar from "../../layout/Sidebar";

const Egg = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 flex-1 h-screen overflow-y-scroll scroll-smooth ">
        <div className="items-center justify-center my-16">
          <form action="">
            <h1 className="text-2xl mb-2">Egg</h1>

            <div className="flex flex-col">
              <div className="flex items-center gap-x-4 mt-2">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="section" className="text- mb-1">
                    Name
                  </label>
                  <select
                    type="number"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Name"
                  >
                    <option value="">Kienyeji</option>
                    <option value="">Grade</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="price" className="text- mb-1">
                    # collected
                  </label>
                  <input
                    type="number"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="The total number being added"
                  />
                </div>
              </div>

              <div className="flex flex-row w-full gap-x-4 mt-2">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="price" className="text- mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Enter new price"
                  />
                </div>
                <div className="flex flex-col w-1/2 ">
                  <label htmlFor="price" className="text- mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="The previous price"
                  />
                </div>
              </div>
              <div className="flex items-center gap-x-4 mt-2">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="section" className="text- mb-1">
                    Section
                  </label>
                  <select
                    type="number"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Name"
                  >
                    <option value="">A</option>
                    <option value="">B</option>
                    <option value="">C</option>
                    <option value="">D</option>
                    <option value="">E</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="price" className="text- mb-1">
                    Broken
                  </label>
                  <input
                    type="number"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="The total number being added"
                  />
                </div>
              </div>
              <div className="flex gap-x-4 mt-2">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="price" className="text- mb-1">
                    Added by
                  </label>
                  <input
                    type="text"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="border-b mt-4"></div>
              <div className="self-end">
                <button className="mt-4 px-6 py-2 bg-yellow-500/80 hover:bg-yellow-500/90 font-medium rounded-md text-white">
                  Add to store{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Egg;
