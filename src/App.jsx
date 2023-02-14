// import React, { Component } from "react";
// import ReactDOM from "react-dom";

import users from "./users";

import "./App.css";
import { useState } from "react";

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
            {users.map((user, userIndex) => (
              <li
                key={userIndex}
                className={`${user.unread && "unread"} my-4 flex p-2`}
                onClick={(e) => {
                  e.target.classList.remove("unread");
                  user.unread = false;
                }}
              >
                <img className="px-5" src="#" alt="avatar" />
                <div className="">
                  <div className="flex">
                    <p className="mr-1">{user.name}</p>
                    <p>{user.notification}</p>
                  </div>
                  <p>{user.posted} ago</p>
                </div>
                {user.unread && (
                  <svg height="50" width="50">
                    <circle cx="15" cy="12" r="4" fill="red" />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
