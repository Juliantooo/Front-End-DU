import React, { Component } from "react";
import CardCp from "./card_kontak";
import styles from "../Style/mobile.module.css";

class KontakPerson extends Component {
  state = {
    Kontak: [
      {
        nama: "Tene",
        wa: "081111111",
        instagram: "@hey",
        telegram: "@tene"
      },
      {
        nama: "Tene",
        wa: "081111111",
        instagram: "@hey",
        telegram: "@tene"
      }
    ]
  };

  render() {
    const Kontak = this.state.Kontak;
    return (
      <div className='Kontak' style={{ height: "100vh" }}>
        <div className='title'>
          <h1>Kontak</h1>
          <hr className={styles.underline} />
        </div>
        <div className='row mt-5' style={{ margin: "0" }}>
          <div className='offset-md-1'></div>
          {Kontak.map((cp, key) => {
            return (
              <div className='col-md-5' key={key}>
                <CardCp data={cp} />
              </div>
            );
          })}
          <div className='offset-md-1'></div>
        </div>
      </div>
    );
  }
}

export default KontakPerson;
