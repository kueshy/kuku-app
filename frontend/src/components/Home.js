import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoultry } from "../actions/PoultryAction";
import Nav from "./layout/Nav";
import Poultry from "./poultry/Poultry";

const Home = () => {
  const dispatch = useDispatch();
  const { poultry, loading } = useSelector((state) => state.poultryReducer);

  useEffect(() => {
    dispatch(getPoultry());
  }, [dispatch]);

  const Menus = [
    { title: "Chicken" },
    { title: "Hen" },
    { title: "Cock" },
    { title: "Chicks" },
    { title: "Between 2-3 weeks" },
    { title: "Between 1-2 months" },
    { title: "Between 2-3 months" },
    { title: "Between 3-4 months" },
    { title: "Between 4-5 months" },
    { title: "Between 4-5 months" },
    { title: "Between 5-6 months" },
    { title: "Between 6-7 months" },
    { title: "Between 7-8 months" },
    { title: "Between 8-9 months" },
    { title: "Between 9-10 months" },
    { title: "Above 10 months" },
  ];
  return (
    <Fragment>
      <Nav />
      <div className="flex">
        <div className="w-48 bg-light-white shadow-lg">
          <div>
            <h1 className="m-4 text-xl tracking-wider">Categories</h1>
            <ul>
              {Menus.map((menu, index) => (
                <li className="text-gray-800 text-sm ml-2 p-2 cursor-pointer">
                  {menu.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h1 className="m-4 font-semibold text-2xl text-gray-800">
            See our latest birds
          </h1>

          <div className="h-screen m-7 mb-8 mt-4 gap-5 flex items-center justify-center flex-wrap overflow-y-scroll">
            {loading
              ? "Fetching products..."
              : poultry.map((data, id) => <Poultry d={data} id={id} />)}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
