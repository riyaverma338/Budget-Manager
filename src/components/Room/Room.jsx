import React, { useState } from "react";
import Members from "./Member";
import Table from "./Table";
import close from "../../images/cross.png";
import "../../css/Room.css";
import NavHome from "../NavHome";
import setting from "../../images/setting.gif";
export default function Room() {
  const [addExpense, setAddExpense] = useState(false);
  const [addSetting, setAddSetting] = useState(false);
  return (
    <div className="room_main">
      <NavHome />
      {addExpense === true ? <CodeTeam setAddExpense={setAddExpense} /> : ""}
      {addSetting === true ? <Setting setAddSetting={setAddSetting} /> : ""}
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
        <button
          onClick={(e) => setAddExpense(true)}
          className="btn btn-primary"
        >
          ADD AN EXPENSE
        </button>
      </div>
      <img
        className="setting-img"
        src={setting}
        onClick={(e) => setAddSetting(true)}
        alt="setting"
      />
    </div>
  );
}

const CodeTeam = (props) => {
  const closeModal = (e) => {
    e.preventDefault();
    props.setAddExpense(false);
  };
  return (
    <section className="Create-room">
      <div className="inputModal">
        <h4>Expense Details</h4>
        <img
          src={close}
          className="close"
          alt="close"
          onClick={(e) => closeModal(e)}
        />
        <form className="d-flex flex-column">
          <input type="text" placeholder="Spent on?" />
          <input type="text" placeholder="Who Paid?" />
          <input type="text" placeholder="Cost" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

const Setting = (props) => {
  const closeModal = (e) => {
    e.preventDefault();
    props.setAddSetting(false);
  };
  return (
    <section className="Create-room">
      <div className="inputModal">
        <h4>Settings</h4>
        <img
          src={close}
          className="close"
          alt="close"
          onClick={(e) => closeModal(e)}
        />
        <form className="d-flex flex-column">
          <input type="text" placeholder="Name of the Room" />
          <input type="text" placeholder="Date of Payment" />
          <button type="button" class="btn1 btn-outline-secondary">
            Add Member
          </button>
          {/* <button type="button" class="btn1 btn-outline-secondary">Remove Member</button> */}
          <p>Send notification when date of payment is close</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <button type="submit">Done</button>
        </form>
      </div>
    </section>
  );
};
