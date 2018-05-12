import React, { Component } from "react";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import StarRatings from 'react-star-ratings';

class Restaurant extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Card>
          <div>
            <CardContent>
              <Typography variant="headline">{this.props.name}</Typography>
            </CardContent>
            <CardContent>{this.props.address}</CardContent>
            <CardContent>
              <StarRatings
                rating={this.props.rating}
                starRatedColor="red"
                widgetDimensions="30px"
                widgetSpacings="10px"
              />
            </CardContent>
          </div>
          <CardMedia
            image={this.props.url}
            title="Live from space album cover"
            style={{ width: 180, height: 180 }}
          />
        </Card>
      </div>
    );
  }
}

export default Restaurant;
