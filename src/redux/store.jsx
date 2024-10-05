import { createStore } from "redux";
import counterreducer from "./reducers";

const store = createStore(counterreducer);
export default store;
