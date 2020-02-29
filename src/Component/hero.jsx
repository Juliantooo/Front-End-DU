import React, { Component } from "react";
import { DaftarBtn } from "./button";
import ilustrasi from "../assets/sketch.png";
import styles from "../Style/mobile.module.css";

class Hero extends Component {
  render() {
    return (
      <div
        className={`${styles.heroHeight} pl-5 hero align-items-center d-flex justify-content-center container-fluid`}>
        <div className='row'>
          <div
            className='col-6 col-xs-6 col-sm-6 col-md-6 '
            style={{ textAlign: "left" }}>
            <strong className={styles.heroIntro}>
              AYO KEMBANGKAN <span style={{ color: "green" }}>MINAT </span>
              <br /> & <span style={{ color: "green" }}>BAKATMU</span> BERSAMA
              DOSCOM
            </strong>
            <p>
              Training dengan metode yang memadukan beberapa <br />
              kelas dan pengajar yang menyenangkan sesuai <br />
              minat peserta.
            </p>
            <DaftarBtn>Daftar</DaftarBtn>
          </div>
          <div className='col-4 col-xs-4 col-sm-4 col-md-4'>
            <img className={styles.imgIlu} src={ilustrasi} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
