import React from "react";
import { data } from "../../data";

const Poultry = ({ d }) => {
  return (
    <div>
      <div className="card">
        <a href={`/poultry/${d._id}`}>
          <img
            className="duration-300 w-full h-full object-cover "
            src={d.image ? process.env.REACT_APP_PUBLIC_FOLDER + d.image : ""}
            alt={d.name}
          />
        </a>
        <div className="p-5 flex flex-col gap-3">
          {/* Badge */}
          <div className="flex items-center gap-2">
            {/* <span className="badge">Stock</span> */}
            <span className="badge">Official store</span>
            <span className="text-xs bg-yellow-300 px-3 py-1 rounded-full text-white">
              {d.sect}
            </span>
          </div>
          {/* Product title */}
          <h2 className="product-title" title="Improved Kienyeji">
            {d.name}
          </h2>

          {/* Product price */}
          <div>
            <span className="text-xl font-bold">Ksh. {d.price}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through opacity-50">
                Ksh. {d.prevPrice}
              </span>
              <span className="discount-percent">
                save{" "}
                {(((d.prevPrice - d.price) / d.prevPrice) * 100).toFixed(0)}%
              </span>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <button className="button-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poultry;
