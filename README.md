# fb-hackathon-syd-2018

## the idea
> meeting friends is tough once you leave school, people are busy, plans often fall through. Even when you do finally decide on a date and time that works, it can be even harder finding a place to eat that suits everyone!

## the solution
> Meet people based on common interests like music taste, food and interests, allocate a time slot where you're free

## how
Aggregate a bunch of data regarding restaurants (google places, tip advisor, zomato, etc) and help people find the best place to have a meal with friends.
Hook into the facebook api and analyze the type of group it is and align best places to eat. Based on location, type of food etc.

## the stack
#### Backend
- Python 2.7 (flask) rest api
- flask-sqlalchemy SQLite db

#### Frontend
- Vue.js web app

#### APIs
- Facebook
	- api key = ``
	- graph: [`https://developers.facebook.com/docs/graph-api`](https://developers.facebook.com/docs/graph-api)
	- pages (**may be difficult as a review process is involved**): [`https://developers.facebook.com/docs/pages`](https://developers.facebook.com/docs/pages)
- Google Maps
	- api key = ``
	- js docs: [`https://developers.google.com/maps/documentation/javascript/tutorial`](https://developers.google.com/maps/documentation/javascript/tutorial)
- Google Places
	- api key = ``
	- node.js docs: [`https://googlemaps.github.io/google-maps-services-js/docs/`](https://googlemaps.github.io/google-maps-services-js/docs/)
	- python docs: [`https://googlemaps.github.io/google-maps-services-python/docs/`](https://googlemaps.github.io/google-maps-services-python/docs/)
- Google Calendar
	- api key = ``
	- node.js docs: [`https://developers.google.com/calendar/quickstart/nodejs`](https://developers.google.com/calendar/quickstart/nodejs)
	- python docs: [`https://developers.google.com/calendar/quickstart/python`](https://developers.google.com/calendar/quickstart/python)
- Foursquare
	- api key = ``
	- basic docs: [`https://developer.foursquare.com/docs/api/getting-started#6-make-your-first-api-call`](https://developer.foursquare.com/docs/api/getting-started#6-make-your-first-api-call)
	- all endpoints: [`https://developer.foursquare.com/docs/api/endpoints`](https://developer.foursquare.com/docs/api/endpoints)
- Yelp
	- api key = ``
	- business search docs [`https://www.yelp.com.au/developers/documentation/v3/business_search`](https://www.yelp.com.au/developers/documentation/v3/business_search)
	- business details docs [`https://www.yelp.com.au/developers/documentation/v3/business`](https://www.yelp.com.au/developers/documentation/v3/business)
	- business match docs [`https://www.yelp.com.au/developers/documentation/v3/business_match`](https://www.yelp.com.au/developers/documentation/v3/business_match)
	- autocomplete docs [`https://www.yelp.com.au/developers/documentation/v3/autocomplete`](https://www.yelp.com.au/developers/documentation/v3/autocomplete)
- TripAdvisor
	- ***There content api is looks like it would be more trouble than it would be worth.***
- OpenTable
	- ***Requires application process that looks like it is handled on a case-by-case basis***
- Zomato
	- api key = ``
	- docs: [`https://developers.zomato.com/documentation`](https://developers.zomato.com/documentation)