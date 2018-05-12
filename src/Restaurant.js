import React, { Component } from "react";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import StarRatings from "react-star-ratings";
import { withStyles } from "material-ui/styles";
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton
} from "react-share";
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
    const { classes, theme } = this.props;
    return (
      <div style={{ margin: 2 }}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={this.props.image_url}
            title="Live from space album cover"
            style={{ width: 180, height: 180 }}
          />
          <div className={classes.details}>
            <CardContent>
              <Typography variant="Display 1">{this.props.name}</Typography>
              <Typography variant="Display 2">{this.props.address}</Typography>
              <StarRatings
                rating={this.props.rating}
                starRatedColor="red"
                widgetDimensions="30px"
                widgetSpacings="10px"
              />
              <FacebookShareButton url={this.props.url} />
              <TelegramShareButton url={this.props.url} />
              <WhatsappShareButton url={this.props.url} />
              <EmailShareButton url={this.props.url} />
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Restaurant);
