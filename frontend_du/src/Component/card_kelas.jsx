import React, { Component } from "react";
import styles from "../Style/mobile.module.css";

class CardKelas extends Component {
  render() {
    const data = this.props.data;
    return (
      <div
        className={
          data.reverse
            ? "d-flex flex-row-reverse bd-highlight row mb-5 text-right"
            : "row mb-5 text-left"
        }
        style={{ padding: "0", marginLeft: "0", marginRight: "0" }}>
        <div className='col-md-5'>
          <img
            src={data.kelasImg}
            className='d-block mx-auto'
            style={{ width: "55%" }}
            alt=''
          />
        </div>
        <div className='col-md-5 my-auto'>
          <h3>{data.namaKelas}</h3>
          <p>{data.deskripsiKelas}</p>
          <p>{data.kuotaKelas}</p>
        </div>
        <div className='offset-md-2'></div>
        <hr className={`mt-5 ${styles.underline}`} />
      </div>
    );
  }
}

export default CardKelas;
