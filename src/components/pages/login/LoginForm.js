import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../../redux/listSlice/listSlice";

const LoginForm = ({ login, setLogin }) => {
  const { list } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({ UserId: "" });
  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    console.log(list);
    //    setLogin(true);
  }, [list]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getList(inputs.UserId));
    setLogin(true);
  };
  return login ? (
    <Navigate to={"/"} />
  ) : (
    <>
      <div className="login-wrapper rounded-2xl px-8 md:px-16 pt-14 mt-6">
        <h1
          className={
            "font-thin text-3xl text-center mb-6 flex items-end justify-center items-center"
          }
        >
          <span className={"font-bold pr-2 mr-2 border-gray-500 text-4xl"}>
            login
          </span>
        </h1>
        <p className={"text-center text-sm mb-8 text-gray-800"}>
          Please login with user id
        </p>
        <form onSubmit={handleSubmit}>
          <div className={"my-3"}>
            <label className={"text-sm mb-1 inline-block"}>User id</label>
            <input
              type="text"
              className={
                "p-2 rounded-lg w-full border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700"
              }
              placeholder={"UserId"}
              name={"UserId"}
              onChange={handleChange}
              autoComplete={"off"}
            />
          </div>

          <div className={"flex justify-end mt-6"}>
            <button
              disabled={!inputs.UserId && inputs.UserId === ""}
              type={"submit"}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
