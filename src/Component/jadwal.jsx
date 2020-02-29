import React, { Component } from "react";
import { BtnKelas } from "../Component/button";
import styles from "../Style/mobile.module.css";

class Jadwal extends Component {
  state = {
    classMenu: [
      {
        name: "Web"
      },
      {
        name: "Android"
      },
      {
        name: "Blender"
      },
      {
        name: "Python"
      },
      {
        name: "DevOps"
      }
    ]
  };
  render() {
    const classMenu = this.state.classMenu;
    return (
      <div className='jadwal container-fluid' style={{ height: "140vh" }}>
        <div>
          <h1 className='text-center'>Jadwal</h1>
          <hr className={styles.underline} />
        </div>
        <div
          className='row mt-5 justify-content-center'
          style={{ margin: "0" }}>
          <div className={window.innerWidth > 700 ? `offset-1` : ``}></div>
          {classMenu.map((menu, key) => {
            return (
              <div
                className='col-2 col-xs-2 col-sm-2 col-md-2'
                style={{ margin: "0" }}
                key={key}>
                <BtnKelas>{menu.name}</BtnKelas>
              </div>
            );
          })}
          <div className='offset-1'></div>
        </div>
        {/* main jadwal */}
      </div>
    );
  }
}

export default Jadwal;
