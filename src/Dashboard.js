import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="mt-[60px] relative">
        <img
          src="assets/image/1.jpg"
          className="h-[100vh] w-[100vw]"
        />
        <div className="absolute top-[50%] flex flex-row justify-center w-[100%]">
          <div className="m-auto px-[20px] py-[10px] rounded-[40px] cursor-pointer newPlanBtn">
            <p
              className="text-blue-500 text-[24px] "
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem('new_plan', true);
                window.location.href = "/main";
              }}
            >
              <span className="text-blue-500 text-[20px]">&#10133;</span> Create
              New Plan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
