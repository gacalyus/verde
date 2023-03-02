import React, { useEffect, useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./detail.css";
import { useSelector, useDispatch } from "react-redux";
import { IoIosAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import {
  addItem,
  removeItem,
  updateItem,
} from "../../../redux/listSlice/listSlice";

const Detail = () => {
  const { detail } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  useEffect(() => {
    setInputs({ title: detail.title, body: detail.body });
  }, [detail]);
  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("cda");
  };
  return (
    <div className="bg-white border-gray-200  mx-20 p-14   rounded dark:bg-gray-900 detailPage">
      <Link to={"/"}>
        <BsArrowLeftCircle
          style={{
            fontSize: "48px",
            backgroundColor: "rgb(238, 233, 233)",
            borderRadius: "24px",
          }}
        />
      </Link>
      <div className="detailForm mx-8  ">
        <div className="detailHeader ">
          <p className="text-4xl font-bold text-gray-900 dark:text-white cartTitle">
            Post
          </p>
          <Link to={"/"}>
            <button
              onClick={() =>
                dispatch(addItem({ ...inputs, userId: detail.userId }))
              }
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              <IoIosAdd style={{ marginRight: "1rem", fontSize: "24px" }} />
              New Post
            </button>
          </Link>
        </div>
        <div className="detailTitle">
          <form onSubmit={handleSubmit}>
            <div className={"my-3"}>
              <label
                className={
                  " mb-1 inline-block text-2xl font-normal text-gray-900 dark:text-white"
                }
              >
                Title
              </label>
              <input
                type="text"
                style={{ fontWeight: "bold" }}
                className={
                  "p-2 rounded-lg w-full border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700"
                }
                placeholder={"title"}
                name={"title"}
                onChange={handleChange}
                autoComplete={"off"}
                value={inputs.title}
              />
            </div>
            <div className={"my-3"}>
              <label
                className={
                  " mb-1 inline-block text-2xl font-normal text-gray-900 dark:text-white"
                }
              >
                Detail
              </label>
              <textarea
                style={{ color: "gray" }}
                type="body"
                rows="4"
                className={
                  "p-2 rounded-lg w-full border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700"
                }
                placeholder={"body"}
                name={"body"}
                onChange={handleChange}
                value={inputs.body}
              />
            </div>
            <div className={"flex justify-end mt-6"}>
              <Link to={"/"}>
                <button
                  onClick={() => dispatch(removeItem(detail.id))}
                  type="button"
                  className="text-white bg-red-700 hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <MdDeleteOutline
                    style={{ marginRight: "1rem", fontSize: "24px" }}
                  />
                  Delete
                </button>
              </Link>
              <Link to={"/"}>
                <button
                  onClick={() =>
                    dispatch(updateItem({ ...inputs, id: detail.id }))
                  }
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <MdModeEdit
                    style={{ marginRight: "1rem", fontSize: "24px" }}
                  />
                  Update
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detail;
