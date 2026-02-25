import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";   // ✅ Correct import
import reducer from "./reducer";       // ✅ Make sure file name is reducer.js

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;