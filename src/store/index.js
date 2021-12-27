// import { applyMiddleware, createStore } from "redux";
// import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// const middleware = [thunk];
// // le store prend le combineReducer et le middleware
// const store = createStore(
//   rootReducer,
//   // composeWithDevTools() pour ReduxDevtools goole Chrome
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [];

const store = createStore(
  rootReducer,
  // composeWithDevTools() pour ReduxDevtools goole Chrome
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
