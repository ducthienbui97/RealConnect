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
          <CardMedia
            image={this.props.url}
            title="Live from space album cover"
            style={{ width: 180, height: 180 }}
          />
          <div>
            <CardContent>
              <Typography variant="headline">{this.props.name}</Typography>
            </CardContent>
            <CardContent>
              <StarRatings
                rating={this.props.rating}
                starRatedColor="red"
                widgetDimensions="40px"
                widgetSpacings="15px"
              />
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

export default Restaurant;
