import React from "react";

const Quarantine = () => {
  return (
    <div className="items-center justify-center my-16">
      <form action="">
        <h1 className="text-2xl mb-2">Quarantine</h1>

        <div className="flex flex-col">
          <div className="flex flex-row w-full gap-x-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="name" className="text- text-gray-700 mb-1">
                Number
              </label>
              <input
                type="number"
                className="form-input px-4 py-3 rounded-md border-none outline-none"
                placeholder="Enter name"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="age" className="text- mb-1">
                Disease
              </label>
              <input
                type="date"
                className="form-input px-4 py-3 rounded-md border-none outline-none"
                placeholder="Enter age"
              />
            </div>
          </div>

          <div className="flex flex-row w-full gap-x-4 mt-2">
            <div className="flex flex-col w-1/2">
              <label htmlFor="price" className="text- mb-1">
                Quantity (Kgs)
              </label>
              <input
                type="number"
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

          <div className="border-b mt-4"></div>
          <div className="self-end">
            <button className="mt-4 px-6 py-2 bg-yellow-500/80 hover:bg-yellow-500/90 font-medium rounded-md text-white">
              Add to store{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Quarantine;
