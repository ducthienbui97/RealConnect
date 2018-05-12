import React, { Component } from "react";
import { Image, Popover } from "react-bootstrap";

class Friend extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Image src={this.props.user.imageURL} width={180} height={180} onClick={this.props.onClick}/>
        <Popover
          id="popover-basic"
          placement="right"
          positionLeft={200}
          positionTop={this.props.idx * 180 + 50}
          title={this.props.user.name}
        >
          {Math.floor(this.props.distance)} meters away!
        </Popover>
      </div>
    );
  }
}

export default Friend;