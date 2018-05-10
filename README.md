# fb-hackathon-syd-2018

## the idea
> meeting friends is tough once you leave school, people are busy, plans often fall through. Even when you do finally decide on a date and time that works, it can be even harder finding a place to eat that suits everyone!

## the solution
> Meet people based on common interests like music taste, food and interests, allocate a time slot where you're free

## how
Aggregate a bunch of data regarding restaurants (google places, tip advisor, zomato, etc) and help people find the best place to have a meal with friends.
Hook into the facebook api and analyze the type of group it is and align best places to eat. Based on location, type of food etc.

## the stack TBA
#### frontend
- Vue.js web app

#### backend
- Python 2.7 (flask) rest api
- flask-sqlalchemy SQLite db
- requests

## docs
> our docs go here

## external docs
#### frontend
- vue.js: [`https://vuejs.org/v2/guide/`](https://vuejs.org/v2/guide/)
- vuex: [`https://vuex.vuejs.org/en/intro.html`](https://vuex.vuejs.org/en/intro.html)
- react: [`https://reactjs.org/`](https://reactjs.org/)
- react native: [`https://facebook.github.io/react-native/`](https://facebook.github.io/react-native/)
- redux: [`https://redux.js.org/`](https://redux.js.org/)
- axios: [`https://github.com/axios/axios#axios-api`](https://github.com/axios/axios#axios-api)

#### backend
- flask: [`http://flask.pocoo.org/docs/1.0/`](http://flask.pocoo.org/docs/1.0/)
- sqlalchemy: [`https://docs.sqlalchemy.org/en/latest/orm/index.html`](https://docs.sqlalchemy.org/en/latest/orm/index.html)
- flask-sqlalchemy: [`http://flask-sqlalchemy.pocoo.org/2.3/`](http://flask-sqlalchemy.pocoo.org/2.3/)
- requests: [`http://docs.python-requests.org/en/master/`](http://docs.python-requests.org/en/master/)

> note that harry has an offline copy of (almost) all the external docs on his iPad (not api docs)

#### APIs
- Facebook
	- api key = `NONE`
	- graph: [`https://developers.facebook.com/docs/graph-api`](https://developers.facebook.com/docs/graph-api)
	- pages: [`https://developers.facebook.com/docs/pages`](https://developers.facebook.com/docs/pages) (***may be difficult as a review process is involved***)
- Google Maps
	- api key = `NONE`
	- js docs: [`https://developers.google.com/maps/documentation/javascript/tutorial`](https://developers.google.com/maps/documentation/javascript/tutorial)
- Google Places
	- api key = `NONE`
	- node.js docs: [`https://googlemaps.github.io/google-maps-services-js/docs/`](https://googlemaps.github.io/google-maps-services-js/docs/)
	- python docs: [`https://googlemaps.github.io/google-maps-services-python/docs/`](https://googlemaps.github.io/google-maps-services-python/docs/)
- Google Calendar
	- api key = `NONE`
	- node.js docs: [`https://developers.google.com/calendar/quickstart/nodejs`](https://developers.google.com/calendar/quickstart/nodejs)
	- python docs: [`https://developers.google.com/calendar/quickstart/python`](https://developers.google.com/calendar/quickstart/python)
- Foursquare
	- api key = `NONE`
	- basic docs: [`https://developer.foursquare.com/docs/api/getting-started#6-make-your-first-api-call`](https://developer.foursquare.com/docs/api/getting-started#6-make-your-first-api-call)
	- all endpoints: [`https://developer.foursquare.com/docs/api/endpoints`](https://developer.foursquare.com/docs/api/endpoints)
- Yelp
	- api key = `NONE`
	- business search docs: [`https://www.yelp.com.au/developers/documentation/v3/business_search`](https://www.yelp.com.au/developers/documentation/v3/business_search)
	- business details docs: [`https://www.yelp.com.au/developers/documentation/v3/business`](https://www.yelp.com.au/developers/documentation/v3/business)
	- business match docs: [`https://www.yelp.com.au/developers/documentation/v3/business_match`](https://www.yelp.com.au/developers/documentation/v3/business_match)
	- autocomplete docs: [`https://www.yelp.com.au/developers/documentation/v3/autocomplete`](https://www.yelp.com.au/developers/documentation/v3/autocomplete)
- Zomato
	- api key = `NONE`
	- docs: [`https://developers.zomato.com/documentation`](https://developers.zomato.com/documentation)
- TripAdvisor ***Their content api is looks like it would be more trouble than it would be worth.***
- OpenTable ***Requires application process that looks like its handled on a case-by-case basis***