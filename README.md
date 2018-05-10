# fb-hackathon-syd-2018

## the idea
> meeting friends is tough once you leave school, people are busy, plans often fall through. Even when you do finally decide on a date and time that works, it can be even harder finding a place to eat that suits everyone!

## the solution
> Meet people based on common interests like music taste, food and interests, allocate a time slot where you're free

## how
Aggregate a bunch of data regarding restaurants (google places, tip advisor, zomato, etc) and help people find the best place to have a meal with friends.
Hook into the facebook api and analyze the type of group it is and align best places to eat. Based on location, type of food etc.

## the stack
*TBA*
#### frontend
- Vue.js web app

#### backend
- Python 2.7 (flask) rest api
- flask-sqlalchemy SQLite db
- requests

## docs
- deployment: [`http://fbhack2018.surge.sh/`](http://fbhack2018.surge.sh/)

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

u: `fb`

e: `h1220325@nwytg.com` (no access) || `xxj59903@mziqo.com` (no access)

p: `FBhack2018`



google credentials:

e: `fb.hack.2018.syd@gmail.com`

p: `FBhack2018!`

facebook credentials:

e: `fb.hack.2018.syd@gmail.com`

p: `FBhack2018!`


#### APIs
- Facebook
	- app id = `583714395340320`
	- app secret = `d5b5ab85dd654f2617cf94d61b97b20b`
	- graph: [`https://developers.facebook.com/docs/graph-api`](https://developers.facebook.com/docs/graph-api)
	- pages: [`https://developers.facebook.com/docs/pages`](https://developers.facebook.com/docs/pages) (***may be difficult as a review process is involved***)
- Google Maps
	- api key = `AIzaSyB2ubLm9h8RrWVM7dgNh9GC1bxcNynWPl0`
	- js docs: [`https://developers.google.com/maps/documentation/javascript/tutorial`](https://developers.google.com/maps/documentation/javascript/tutorial)
- Google Places
	- api key = `AIzaSyB2ubLm9h8RrWVM7dgNh9GC1bxcNynWPl0`
	- node.js docs: [`https://googlemaps.github.io/google-maps-services-js/docs/`](https://googlemaps.github.io/google-maps-services-js/docs/)
	- python docs: [`https://googlemaps.github.io/google-maps-services-python/docs/`](https://googlemaps.github.io/google-maps-services-python/docs/)
- Google Calendar
	- api key = `AIzaSyB2ubLm9h8RrWVM7dgNh9GC1bxcNynWPl0`
	- node.js docs: [`https://developers.google.com/calendar/quickstart/nodejs`](https://developers.google.com/calendar/quickstart/nodejs)
	- python docs: [`https://developers.google.com/calendar/quickstart/python`](https://developers.google.com/calendar/quickstart/python)
- Foursquare
	- client id: `ZMNAVZJ4FT14MFEB12XZSCPGW4J4BSGZVNNPEFW5FM3J53HH`
	- client secret: `0AIMCJHR1WUYGGUCMWS0AMWNTCKZJMQAWFREGGOUYSR3JGLT`
	- basic docs: [`https://developer.foursquare.com/docs/api/getting-started#6-make-your-first-api-call`](https://developer.foursquare.com/docs/api/getting-started#6-make-your-first-api-call)
	- all endpoints: [`https://developer.foursquare.com/docs/api/endpoints`](https://developer.foursquare.com/docs/api/endpoints)
- Yelp
	- client id = `QauKALZyyaNj9SO6RKiY1Q`
	- api key = `EU8woGIBUQCwNd_U2NQlTjbtTVwsxyhYD-R0NUoLirp1BVQANYJwNyzhFveaNnKN9SLKra0ZL-igg1VjWPyoHPFfXyFnSMUDRTdHewActRWsC7-DsSAXyBb81hr0WnYx`
	- business search docs: [`https://www.yelp.com.au/developers/documentation/v3/business_search`](https://www.yelp.com.au/developers/documentation/v3/business_search)
	- business details docs: [`https://www.yelp.com.au/developers/documentation/v3/business`](https://www.yelp.com.au/developers/documentation/v3/business)
	- business match docs: [`https://www.yelp.com.au/developers/documentation/v3/business_match`](https://www.yelp.com.au/developers/documentation/v3/business_match)
	- autocomplete docs: [`https://www.yelp.com.au/developers/documentation/v3/autocomplete`](https://www.yelp.com.au/developers/documentation/v3/autocomplete)
- Zomato
	- api key = `1cfac169445efa700b5ac7100d476a35`
	- docs: [`https://developers.zomato.com/documentation`](https://developers.zomato.com/documentation)
- TripAdvisor
	- ***Their content api is looks like it would be more trouble than it would be worth.***
- OpenTable
	- ***Requires application process that looks like its handled on a case-by-case basis***