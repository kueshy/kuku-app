import React, { Fragment } from "react";
import { MDBDataTable } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../../data";

import Sidebar from "../../layout/Sidebar";

const ProductList = () => {
  const dispatch = useDispatch();
  const { poultry } = useSelector((state) => state.poultryReducer);

  const setPoultry = () => {
    const data = {
      columns: [
        { label: "ID", field: "id", sort: "asc" },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Price (Ksh.)",
          field: "price",
          sort: "asc",
        },
        {
          label: "Section",
          field: "sect",
          sort: "asc",
        },
        {
          label: "Total",
          field: "totalCount",
          sort: "asc",
        },
        {
          label: "Age",
          field: "age",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };
    poultry.forEach((p) => {
      data.rows.push({
        id: p._id,
        name: p.name,
        price: p.price,
        sect: p.sect,
        totalCount: p.totalCount,
        age: p.age,
        actions: (
          <Fragment>
            <a href={`/admin/poultry/${p._id}`}>Edit</a>
            <button>Delete</button>
          </Fragment>
        ),
      });
    });
    return data;
  };

  return (
    <Fragment>
      <div className="flex">
        <Sidebar />
        <div className="p-7 flex flex-col h-screen">
          <div>
            <button className="bg-indigo-500 px-3 py-1 mb-2 text-white rounded-md text-xl">
              <a href="/admin/poultry">Add new product</a>
            </button>
          </div>
          <div className="py-2 inline-block">
            <div className="overflow-x-auto">
              <MDBDataTable
                data={setPoultry()}
                className="px-3"
                bordered
                striped
                hover
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
