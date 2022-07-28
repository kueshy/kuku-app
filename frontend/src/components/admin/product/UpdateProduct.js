import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPoultry } from "../../../actions/PoultryAction";
import { uploadImage } from "../../../actions/UploadAction";
import { getPoultryDetails } from "../../../actions/PoultryAction";
import { useParams } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import Navbar from "../Navbar";

const UpdateProduct = () => {
  const loading = useSelector((state) => state.poultryReducer.updateLoading);
  const { poultry } = useSelector((state) => state.poultryDetailsReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.id;
  const user = useSelector((state) => state.authReducer.authData);
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    age: "",
    price: "",
    prevPrice: "",
    sect: "",
    totalCount: "",
    vaccinated: "",
    addedBy: "",
    description: "",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPoultry = {
      userId: user.otherDetails._id,
      name: data.name,
      age: data.age,
      price: data.price,
      prevPrice: data.prevPrice,
      sect: data.sect,
      totalCount: data.totalCount,
      vaccinated: data.vaccinated,
      addedBy: data.addedBy,
      description: data.description,
    };

    if (image) {
      const formData = new FormData();
      const filename = Date.now() + image.name;
      formData.append("name", filename);
      formData.append("file", image);
      newPoultry.image = filename;
      console.log(newPoultry);
      try {
        dispatch(uploadImage(formData));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(addPoultry(newPoultry));
  };

  useEffect(() => {
    dispatch(getPoultryDetails(productId));
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 flex-1 h-screen overflow-y-scroll scroll-smooth ">
        <Navbar />
        <div className="items-center justify-center my-16">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="text-2xl mb-2">Update product</h1>

            <div className="flex flex-col">
              <div className="flex flex-row w-full gap-x-4">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="name" className="text- text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Enter name"
                    value={poultry.name}
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="age" className="text- mb-1">
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Enter age"
                    value={data.age}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="flex flex-row w-full gap-x-4 mt-2">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="price" className="text- mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Enter new price"
                    value={data.price}
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col w-1/2 ">
                  <label htmlFor="price" className="text- mb-1">
                    Previous price
                  </label>
                  <input
                    type="number"
                    name="prevPrice"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="The previous price"
                    value={data.prevPrice}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="flex items-center gap-x-4 mt-2">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="section" className="text- mb-1">
                    Section
                  </label>
                  <input
                    type="text"
                    name="sect"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Name"
                    value={data.sect}
                    onChange={onChange}
                  />
                  {/* <option value="">A</option>
                    <option value="">B</option>
                    <option value="">C</option>
                    <option value="">D</option>
                    <option value="">E</option> */}
                  {/* </input> */}
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="price" className="text- mb-1">
                    Total count
                  </label>
                  <input
                    type="number"
                    name="totalCount"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="The total number being added"
                    value={data.totalCount}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="flex gap-x-4 mt-2">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="price" className="text- mb-1">
                    Vaccinated
                  </label>
                  <input
                    type="date"
                    name="vaccinated"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Last vaccinated"
                    value={data.vaccinated}
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="price" className="text- mb-1">
                    Added by
                  </label>
                  <input
                    type="text"
                    name="addedBy"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Enter your name"
                    value={data.addedBy}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="flex items-center mt-4 gap-x-4">
                <input
                  type="file"
                  name="image"
                  onChange={onImageChange}
                  // value={image}
                  className="mt-2"
                />
              </div>
              <div className="mt-2">
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="h-40 w-60 rounded-lg"
                  />
                )}
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="price" className="text-">
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  className="form-textarea px-4 py-3 mt-2 w-6/12 rounded-md border-none outline-none"
                  value={data.description}
                  onChange={onChange}
                />
              </div>
              <div className="border-b mt-4"></div>
              <div className="self-end">
                <button
                  type="submit"
                  className="mt-4 px-6 py-2 bg-yellow-500/80 hover:bg-yellow-500/90 font-medium rounded-md text-white"
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Update"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
