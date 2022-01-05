import React from "react";
import Members from "./Member";
import Table from "./Table";
import "../../css/Room.css";
import NavHome from "../NavHome";
import setting from "../../images/setting.gif"
export default function Room() {
  return (
    <div className="room_main">
      <NavHome />
      <h1 className="room_h1">Room Name</h1>
      <div className="tablealign">
        <div className="room_member">
        <h2>Members</h2>
          <Members />
          </div>
       <div>
       <Table />
         </div>
      </div>
      <div className="room_button">
      <button className="btn btn-primary">ADD AN EXPENSE</button>
      </div>
      <img className="setting-img" src={setting} alt="setting"/>
    </div>
  );
}
