import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  return (
    <div className="window flex justify-center pt-20 ">
      <div className="container h-full w-[800px] bg-white p-6">
        <div className="header flex justify-between pb-2">
          <h2 className="text-xl font-bold">
            Notifications{" "}
            <span className="bg-blue-900 text-base text-white px-2 rounded">
              3
            </span>
          </h2>
          <h5>Mark all as read</h5>
        </div>
        <div className="notifications">
          <ul>
            <li className="my-4 flex bg-blue-100 bg-opacity-30 p-2">
              <img className="px-5" src="#" alt="avatar" />
              <div>
                <p>
                  Mark Webber reacted to your recent post My first tournament
                  today!
                </p>
                <p>1m ago</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
