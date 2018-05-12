import React, { Component } from "react";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import StarRatings from "react-star-ratings";
const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151,
    height: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class Restaurant extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Card className={classes.card}>
          <div  className={classes.details}>
            <CardContent>
              <Typography variant="headline">{this.props.name}</Typography>
              <Typography>{this.props.address}</Typography>
              <StarRatings
                rating={this.props.rating}
                starRatedColor="red"
                widgetDimensions="30px"
                widgetSpacings="10px"
              />
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={this.props.url}
            title="Live from space album cover"
            style={{ width: 180, height: 180 }}
          />
        </Card>
      </div>
    );
  }
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Restaurant);

