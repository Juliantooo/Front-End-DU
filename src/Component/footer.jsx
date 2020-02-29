import React, { Component } from "react";
import AboutDoscom from "./about_doscom";
import Sosmed from "./sosmed_doscom";

class Footer extends Component {
  render() {
    return (
      <div className='container text-left'>
        <div className='row' style={{ margin: "0" }}>
          <div className='col-md-7'>
            <AboutDoscom />
          </div>
          <div className='col-md-5'>
            <Sosmed />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
