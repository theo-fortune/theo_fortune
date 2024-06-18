import React from 'react';
import { MdVerified } from "react-icons/md";


const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        
        <div className="skills__group">
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">Php</h3>
              <span class="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">NodeJs</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">Python</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">Laravel</h3>
              <span class="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">Java</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">C++</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend