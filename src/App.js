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
      restaurants:[]
    };
    this.login = this.login.bind(this);
  }
  onChangeStart = startTime => this.setState({ startTime });
  onChangeFinish = endTime => this.setState({ endTime });
  getFriend = e => {
    e.preventDefault();
    const friendList = [
      {
        id: 2,
        name: "David",
        imageURL:
          "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        lat: -33.868,
        lng: 151.2066,
        friends: []
      },
      {
        id: 3,
        name: "Verity",
        imageURL:
          "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        lat: -33.8944,
        lng: 151.2078,
        friends: [1, 4]
      },
      {
        id: 4,
        name: "Archibald",
        imageURL:
          "https://images.pexels.com/photos/17767/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        lat: -33.8644,
        lng: 151.2081,
        friends: [1, 3]
      },
      {
        id: 5,
        name: "Kevin",
        imageURL:
          "https://images.pexels.com/photos/87413/animal-cat-domestic-eye-87413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        lat: -33.868,
        lng: 151.206,
        friends: [1]
      }
    ];
    this.setState({ friendList });
  };
  login = e => {
    e.preventDefault();

    this.setState(
      {
        user: {
          id: 1,
          name: "Thien Bui",
          imageURL:
            "https://avatars2.githubusercontent.com/u/10867758?s=460&v=4",
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

  render() {
    const Login = (
      <Button
        block
        bsSize="large"
        type="submit"
        className="loginBtn loginBtn--facebook"
        onClick={this.login}
      >
        Login with Facebook
      </Button>
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
            <Col xs={6} xsOffset={3} md={4} mdOffset={4}>
              {Login}
            </Col>
          </Row>
        </Grid>
      );
    else if (!this.state.friend)
      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={6} xsOffset={3} md={4} mdOffset={4}>
              <div>{Calendars}</div>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={6} mdOffset={3}>
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
            <Col xs={6} xsOffset={3} md={4} mdOffset={4}>
              {this.state.restaurants.map((restaurant, idx) => {
                return (
                  <a href={restaurant.url}>
                    <Restaurant
                      name={restaurant.name}
                      key={idx}
                      url={restaurant.image_url}
                      rating={restaurant.rating}
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
