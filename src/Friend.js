import React, { Component } from "react";
import { Image, Popover } from "react-bootstrap";

class Friend extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Image
          src={this.props.user.imageURL}
          width={180}
          height={180}
          onClick={this.props.onClick}
          style={{ border: 2 }}
        />
        <Popover
          id="popover-basic"
          placement="right"
          positionLeft={200}
          style={{
            width: 400
          }}
          positionTop={this.props.idx * 180 + 50}
          title={this.props.user.name}
        >
          <p>{Math.floor(this.props.distance)} meters away!</p>
          <p>
            Overlap free time: {new Date(this.props.from).toLocaleString()} to{" "}
            {new Date(this.props.to).toLocaleString()}
          </p>
        </Popover>
      </div>
    );
  }
}

export default Friend;
