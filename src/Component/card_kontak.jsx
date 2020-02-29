import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class CardCp extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle className='py-4'>{data.name}</CardTitle>
            <CardSubtitle>{data.wa}</CardSubtitle>
            <CardSubtitle>{data.instagram}</CardSubtitle>
            <CardSubtitle>{data.telegram}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardCp;
