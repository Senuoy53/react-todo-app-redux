// import { combineReducers } from "redux";
// import counterReducer from "../containers/CounterContainer/reducer";
// import testReducer from "../containers/TestContainer/reducer";

// // c'est un object : il nous aide à englober tous les reducer de l'application
// export default combineReducers({
//   counterState: counterReducer,
//   testState: testReducer,
// });

import { combineReducers } from "redux";
import todoReducer from "../containers/TodoContainer/reducer";

export default combineReducers({
  todoState: todoReducer,
});
