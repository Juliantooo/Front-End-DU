import React, { Component } from "react";
import CardInfoRegis from "./card_info_regis";
import styles from "../Style/mobile.module.css";

class InfoRegis extends Component {
  state = {
    infoRegis: [
      {
        head: "Biaya Pendaftaran",
        body: "Rp.30000",
        foot: "Sertifikat & Merchendise"
      },
      {
        head: "Waktu Kegiatan",
        body: "12 Mei - 15 Mei 2020",
        foot: "4X Pertemuan"
      },
      {
        head: "Tempat Kegiatan",
        body: "Kampus Udinus Semarang",
        foot: "Google Maps Lokasi"
      }
    ]
  };
  render() {
    const state = this.state;
    return (
      <div className={`${styles.regis_height} info_regis container`}>
        <div className='content_title'>
          <h1>Biaya,Tempat,Waktu</h1>
          <hr className={styles.underline} />
        </div>
        <div className='row' style={{ margin: "0px" }}>
          <div
            className='col-6 col-xs-6 col-sm-6 col-md-6'
            style={{ margin: "auto" }}>
            {state.infoRegis.map((info, key) => {
              return (
                <div key={key}>
                  <CardInfoRegis data={info} />
                </div>
              );
            })}
          </div>
          <div className='col-6 col-xs-6 col-sm-6 col-md-6'>
            {/* for img log*/}
          </div>
        </div>
      </div>
    );
  }
}

export default InfoRegis;
