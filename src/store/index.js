import { createStore } from "redux";

const INICIO = {
  isOpenHist: false,
};

function reducer(state = INICIO, action) {
  if (action.type === "SET_HIST_OPEN") {
    console.log(action);
    return !action.isOpenHist;
  }
}

const store = createStore(reducer);

export default store;
