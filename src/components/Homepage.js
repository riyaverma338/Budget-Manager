import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from './config/fire';
import NavHome from './NavHome';
import './../css/Homepage.css';
import emp from './../images/emptyCardCont.png';


const Homepage=()=>{
let his=useHistory();

const [createRoom,setCreateRoom]=useState(false);

const signOut=()=>{
  auth.signOut();
  his.push('/');
}

    return(
      <section className="Homepage">
        <NavHome signOut={signOut}/>
        <section className="content-container">
          <div className="cards-container">
            {createRoom===true?
            <CreateRoom/>:""}
            
            <div className="empty-Container">
              <h3>IT'S</h3>
              <img src={emp} alt="empty" height="130px"/>
              <h3>here!</h3>
            </div>
          </div>
          <section className="btns-container d-flex">
            <button>Enter the code for the room</button>
            <button onClick={e=>setCreateRoom(true)}>Create a room</button>
          </section>
        </section>
      </section>
    );
}

const CreateRoom=()=>{
  const addMember=(e)=>{
    e.preventDefault();
    const cont=document.getElementById("memberInputs")
    cont.innerHTML+="<input type='email' placeholder='Gmail id of the member' />"
  }
  return(
    <section className="Create-room">
      <div className="inputModal">
        <h4>Create room</h4>
        <form className="d-flex flex-column">
          <input type="text" placeholder="Name of the Room"/>
          <input type="text" placeholder="Motive of creating a group"/>
          <div id="memberInputs"></div>
          <button type="add_mem" onClick={e=>addMember(e)}>Add Member</button>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Homepage;