import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <p>This {"<p>"}  is split </p>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image" src={profile_pic}  //note this
                // Image goes here
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Nguyen Tran</div>
              <div className="brief_description"> Rising senior at Columbia, curious thinker
                <div> I should read more this summer, one of my to-dos is reading Kafka on the shore</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}