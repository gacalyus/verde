import { configureStore } from "@reduxjs/toolkit"; 
import listReducer from "../redux/listSlice/listSlice";
import detailReducer from "../redux/detailSlice/detailSlice";

export const store = configureStore({
  reducer: {
    
    list: listReducer,
    detail:detailReducer,
  },
});
