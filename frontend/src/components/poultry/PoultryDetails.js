import React, { useEffect } from "react";
import Nav from "../layout/Nav";
import { useParams } from "react-router-dom";
import { getPoultryDetails } from "../../actions/PoultryAction";
import { useDispatch, useSelector } from "react-redux";

const PoultryDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { error, loading, poultry } = useSelector(
    (state) => state.poultryDetailsReducer
  );
  const params = useParams();
  const product = params.id;

  useEffect(() => {
    if (error) {
      return error;
    }
    dispatch(getPoultryDetails(product));
  }, [dispatch, product, error]);

  return (
    <>
      <Nav />
      <div className="m-4">
        <h1 className="mt-5 text-2xl mb-4">Poultry specific details</h1>
        {loading ? (
          "Loading..."
        ) : (
          <div className="flex gap-5">
            <img
              className="w-7/12 mb-7"
              src={
                poultry.image
                  ? process.env.REACT_APP_PUBLIC_FOLDER + poultry.image
                  : ""
              }
              alt={poultry.name}
            />
            <div className="">
              <div>
                <span className="text-2xl opacity-60">{poultry.sect}</span>
              </div>
              <div>
                <h1 className="font-medium text-3xl tracking-wide text-gray-800">
                  {poultry.name}
                </h1>
                <span className="text-sm opacity-50">{poultry._id}</span>
              </div>
              <div className="mt-2 text-2xl text-gray-900">
                Ksh. {poultry.price}
              </div>
              <div className="mt-3">
                <span className="line-through opacity-50">
                  Ksh. {poultry.prevPrice}
                </span>
                <span className="ml-2 p-2 bg-green-400 text-white rounded-md text-sm">
                  Save{" "}
                  {(
                    ((poultry.prevPrice - poultry.price) / poultry.prevPrice) *
                    100
                  ).toFixed(0)}
                  %
                </span>
              </div>
              <div className="mt-2">
                {/* <span className="text-2xl opacity-60">Section A</span> */}
              </div>
              <div className="mt-2 text-xl">{poultry.age} old</div>
              <div className="mt-2">
                <span className="text-xl text-green-400">Available</span>
              </div>
              <div className="mt-2">
                <span className="text-xl">
                  Total Count: {poultry.totalCount}
                </span>
                <span className="ml-4">
                  <select
                    className="px-4 w-24 py-1 rounded-md border-2"
                    name=""
                    id=""
                  >
                    {[...Array(poultry.totalCount).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
              <div className="mt-2">
                <span className="opacity-50 mr-2">Last vaccinated</span>
                <span className="text-xl">2 weeks ago</span>
              </div>
              <div className="mt-2">
                <span className="opacity-50 mr-2">Added by</span>
                <span className="text-xl">{poultry.addedBy}</span>
                <span className="opacity-50 m-2">on</span>
                <span className="text-xl">{poultry.createdAt}</span>
              </div>
              <div className="flex flex-col mt-2">
                <span className="text-xl">Description</span>
                <span>{poultry.description}</span>
              </div>
              <div className="flex flex-col mt-9 mb-7">
                <span>Managed by</span>
                <span className="italic text-xl">
                  Mr and Mrs. Nicholus S.M. Emonyi
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PoultryDetails;
