import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DateTimePicker from "react-datetime-picker";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import Friend from "./Friend";
import axios from "axios";
import Restaurant from "./Restaurant";
import FacebookLogin from "react-facebook-login";

const distance = (lat1, lon1, lat2, lon2) => {
  let R = 6371e3; // metres
  let phi1 = lat1 * (Math.PI / 180);
  let phi2 = lat2 * (Math.PI / 180);
  let deltaphi = (lat2 - lat1) * (Math.PI / 180);
  let deltaalpha = (lon2 - lon1) * (Math.PI / 180);

  let a =
    Math.sin(deltaphi / 2) * Math.sin(deltaphi / 2) +
    Math.cos(phi1) *
      Math.cos(phi2) *
      Math.sin(deltaalpha / 2) *
      Math.sin(deltaalpha / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      user: null,
      startTime: new Date(),
      endTime: new Date(),
      friendList: [],
      friend: null,
      loading: true,
      restaurants: []
    };
  }
  onChangeStart = startTime => this.setState({ startTime });
  onChangeFinish = endTime => this.setState({ endTime });
  responseFacebook = response => {
    this.setState(
      {
        user: {
          id: response.id,
          email: response.email,
          name: response.name,
          imageURL: response.picture.data.url,
          lat: -33.868944,
          lng: 151.2066781
        }
      },
      () => {
        const geolocation = window.navigator.geolocation;
        let user = this.state.user;
        geolocation.getCurrentPosition(position => {
          user.lat = position.coords.latitude;
          user.lng = position.coords.longitude;
          this.setState({ user });
        });
      }
    );
  };
  getFriend = e => {
    e.preventDefault();
    const friendList = [
      {
        id: 1,
        name: "Thien",
        imageURL:
          "https://scontent.xx.fbcdn.net/v/t1.0-9/31523399_1801450289878270_1480533951670183036_n.jpg?_nc_cat=0&_nc_eui2=AeFD6eTheWzQqnEAPyMwp7NDtEQ-8k9FyGJHv8Z5oi_-KLIpveF9Vuz1to0iLrcfFKmxDx-stsQH7da4Hz-CR0w-AWQAj5ZhvS6cY27RANAmDA&oh=ef743e0e12be7f00a7807af97cdaecc4&oe=5B9B0213",
        lat: -33.868944,
        lng: 151.2066781,
        friends: [3, 4, 5],
        from: new Date("2018-05-12 12:00"),
        to: new Date("2018-05-14 23:00")
      },
      {
        id: 2,
        name: "David",
        imageURL:
          "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        lat: -33.868,
        lng: 151.2066,
        friends: [],
        from: new Date("2018-05-12 12:00"),
        to: new Date("2018-05-12 23:00")
      },
      {
        id: 3,
        name: "Verity",
        imageURL:
          "https://scontent.xx.fbcdn.net/v/t1.0-9/20637875_1724964721140348_1979654844065454056_n.jpg?_nc_cat=0&_nc_eui2=AeENaGKT8cB9FOfMaPuQ_1T0lAqnC-zKiu7OBUJKEmHgtvg2acPQyXD_5qLADZ4jEWL96NShYcQRv8QXnpjDQG-RPfLnfl37QoZBemJULacoug&oh=604a11e24c304d7479d1498bce392d02&oe=5B520106",
        lat: -33.8944,
        lng: 151.2078,
        friends: [1, 4],
        from: new Date("2018-05-12 20:00"),
        to: new Date("2018-05-12 21:00")
      },
      {
        id: 4,
        name: "Archibald",
        imageURL:
          "https://scontent.xx.fbcdn.net/v/t1.0-1/p160x160/24775033_1286621468119744_4291381466659175113_n.jpg?_nc_cat=0&oh=e1a8be403da922612cc6dfabadb53bc3&oe=5B53961D",
        lat: -33.8644,
        lng: 151.2081,
        from: new Date("2018-05-12 12:00"),
        to: new Date("2018-05-12 23:00"),
        friends: [1, 3]
      },
      {
        id: 5,
        name: "Kevin",
        imageURL:
          "https://images.pexels.com/photos/87413/animal-cat-domestic-eye-87413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        lat: -33.868,
        lng: 151.206,
        from: new Date("2018-05-11 12:00"),
        to: new Date("2018-05-13 23:00"),
        friends: [1]
      }
    ];
    const found = friendList.find(
      user => this.state.user.name.indexOf(user.name) !== -1
    );
    this.setState({
      friendList: friendList.filter(
        user =>
          user !== found &&
          found.friends.includes(user.id) &&
          !(this.state.startTime > user.to || this.state.endTime < user.from)
      )
    });
  };

  render() {
    const Login = (
      <FacebookLogin
        appId="404712883272358"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    );
    const Calendars = (
      <form>
        <FormGroup>
          <ControlLabel> Start Time: </ControlLabel>
          <DateTimePicker
            onChange={this.onChangeStart}
            value={this.state.startTime}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <ControlLabel> End Time: </ControlLabel>
          <DateTimePicker
            onChange={this.onChangeFinish}
            value={this.state.endTime}
          />
          <br />
          <br />
          <Button type="button" onClick={this.getFriend}>
            Get Friend List
          </Button>
        </FormGroup>
      </form>
    );
    if (!this.state.user)
      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={8} xsOffset={2} md={6} mdOffset={3}>
              {Login}
            </Col>
          </Row>
        </Grid>
      );
    else if (!this.state.friend)
      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={8} xsOffset={2} md={6} mdOffset={3}>
              <div>{Calendars}</div>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={8} xsOffset={2} md={6} mdOffset={3}>
              <div>
                {this.state.friendList.map((friend, idx) => {
                  return (
                    <Friend
                      user={friend}
                      key={idx}
                      idx={idx}
                      onClick={e => this.setState({ friend })}
                      distance={distance(
                        this.state.user.lat,
                        this.state.user.lng,
                        friend.lat,
                        friend.lng
                      )}
                      from={Math.max(friend.from, this.state.startTime)}
                      to={Math.min(friend.to, this.state.endTime)}
                      style={{ padding: 2 }}
                    />
                  );
                })};
              </div>
            </Col>
          </Row>
        </Grid>
      );
    else if (this.state.loading) {
      axios
        .get("/api", {
          params: {
            lat: (this.state.user.lat + this.state.friend.lat) / 2,
            lon: (this.state.user.lng + this.state.friend.lng) / 2
          }
        })
        .then(result => {
          let restaurants = result.data.businesses;
          this.setState({
            restaurants,
            loading: false
          });
        });
      return <h1>Loading</h1>;
    } else {
      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={8} xsOffset={2} md={6} mdOffset={3}>
              {this.state.restaurants.map((restaurant, idx) => {
                return (
                  <a href={restaurant.url}>
                    <Restaurant
                      name={restaurant.name}
                      key={idx}
                      url={restaurant.image_url}
                      rating={restaurant.rating}
                      address={",".join(restaurant.location.display_address)}
                    />
                  </a>
                );
              })}
            </Col>
          </Row>
        </Grid>
      );
    }
  }
}
