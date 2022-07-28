import React, { useState } from "react";
import Sidebar from "../../layout/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { addChick } from "../../../actions/PoultryAction";
import { uploadImage } from "../../../actions/UploadAction";
import Navbar from "../Navbar";

const Chick = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    age: "",
    price: "",
    sect: "",
    totalCount: "",
    addedBy: "",
    description: "",
  });

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setImage(null);
    setData({
      name: "",
      age: "",
      price: "",
      sect: "",
      totalCount: "",
      addedBy: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newChick = {
      userId: user.otherDetails._id,
      name: data.name,
      age: data.age,
      price: data.price,
      sect: data.sect,
      totalCount: data.totalCount,
      addedBy: data.addedBy,
      description: data.description,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      addChick.image = filename;
      console.log(newChick);
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error.message);
      }
    }
    dispatch(addChick(newChick));
    reset();
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 flex-1 h-screen overflow-y-scroll scroll-smooth ">
        <Navbar />
        <div className="items-center justify-center my-16">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="text-2xl mb-2">Chick</h1>

            <div className="flex flex-col">
              <div className="flex flex-row w-full gap-x-4">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="name" className="text- text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Enter name"
                    value={data.name}
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
              <div className="flex gap-x-4 mt-2">
                {/* <div className="flex flex-col w-1/2">
                  <label htmlFor="price" className="text- mb-1">
                    Date Hatched
                  </label>
                  <input
                    type="date"
                    className="form-input px-4 py-3 rounded-md border-none outline-none"
                    placeholder="Last vaccinated"
                  />
                </div> */}
              </div>

              <div className=" items-center mt-4 gap-x-4">
                <input type="file" onChange={onImageChange} className="mt-2" />
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="h-40   mt-4"
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
                >
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

export default Chick;
