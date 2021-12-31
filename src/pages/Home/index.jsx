import React from "react";
import TodoContainer from "../../containers/TodoContainer";
// Toastify link : for error's messages
import { ToastContainer } from "react-toastify";
import "./index.css";

const Home = () => {
  return (
    <div>
      <ToastContainer />
      <TodoContainer />
    </div>
  );
};

export default Home;
