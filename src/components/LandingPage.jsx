import React from 'react'
// import App from '../App'
import {auth, provider} from './config/fire'
import "../css/LandingPage.css"
import logo from "../images/logo.png"
export default function LandingPage() {
    const signin = (e) => {
        auth.signInWithPopup(provider).catch(alert);
    }
    return (
        <div>
            <div className="land">
                <img className="img" src={logo} alt="Logo" />
                <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod
                tempor incididunt ut labore et dolore.</p>
                <button onClick={e=>signin(e)} type="button" class="btn my-5">Try it!!!!</button>
            </div>
        </div>
    )
}
