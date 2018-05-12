import React, { Component } from "react";
import { Image, Popover } from "react-bootstrap";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

class Restaurant extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Card>
          <CardMedia
            image={this.props.url}
            title="Live from space album cover"
            style={{ width: 180, height: 180 }}
          />
          <div>
            <CardContent>
              <Typography variant="headline">{this.props.name}</Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

export default Restaurant;
