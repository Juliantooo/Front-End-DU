import React, { Component } from "react";
import { Media } from "reactstrap";
import styles from "./style.module.css";

class CardInfoRegis extends Component {
  render() {
    const data = this.props.data;
    return (
      <Media
        style={{ background: "rgb(161, 120, 67)", borderRadius: "20px" }}
        className={`${styles.card_infoRegis} my-3`}>
        <Media left>
          {/* <Media object alt='Generic placeholder image' /> */}
        </Media>
        <Media body>
          <Media body>
            {data.head} <br />
            {data.body} <br />
            {data.foot}
          </Media>
        </Media>
      </Media>
    );
  }
}

export default CardInfoRegis;
