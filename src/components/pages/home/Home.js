import React from "react";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getItem } from "../../../redux/detailSlice/detailSlice";

export const Home = () => {
  const { list } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  return (
    <div className="bg-white border-gray-200  mx-20 p-8   rounded dark:bg-gray-900  grid grid-cols-3 gap-12">
      {list && list.length > 0 ? (
        list.map((item) => (
          <div key={item.id} className="cart  p-8 ">
            <p className="text-4xl font-bold text-gray-900 dark:text-white cartTitle">
              {item.title}
            </p>
            <p className="text-3xl text-gray-500  cartBody">{item.body}</p>
            <Link to={"/detail"}>
              {" "}
              <button
                type="button"
                onClick={() => dispatch(getItem(item.id))}
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 detailBtn"
              >
                Detay
              </button>
            </Link>
          </div>
        ))
      ) : (
        <Link style={{ alignItems: "center" }} to={"/login"}>
          please login{" "}
        </Link>
      )}
    </div>
  );
};
