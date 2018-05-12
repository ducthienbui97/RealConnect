var express = require("express");
var router = express.Router();
var models = require("../models");
var axios = require("axios");
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json({
    "businesses": [
      {
        "id": "xYiGsPaQ0K5_Eut_kK7uMA",
        "alias": "sydney-opera-house-sydney",
        "name": "Sydney Opera House",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/R5FAh1z7LxbvXG21dFNmhQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sydney-opera-house-sydney?adjust_creative=Gi86uNKaMqxHSIIQTht0hw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Gi86uNKaMqxHSIIQTht0hw",
        "review_count": 252,
        "categories": [
          {
            "alias": "venues",
            "title": "Venues & Event Spaces"
          },
          {
            "alias": "landmarks",
            "title": "Landmarks & Historical Buildings"
          },
          {
            "alias": "theater",
            "title": "Performing Arts"
          }
        ],
        "rating": 4.5,
        "coordinates": {
          "latitude": -33.857123,
          "longitude": 151.215016
        },
        "transactions": [],
        "location": {
          "address1": "Bennelong Point",
          "address2": "",
          "address3": null,
          "city": "Sydney",
          "zip_code": "2000",
          "country": "AU",
          "state": "NSW",
          "display_address": [
            "Bennelong Point",
            "Sydney New South Wales 2000",
            "Australia"
          ]
        },
        "phone": "+61292507111",
        "display_phone": "+61 2 9250 7111",
        "distance": 1491.789828963271
      },
      {
        "id": "bnK0bsubQbklgTnfK0of9w",
        "alias": "mamak-haymarket-3",
        "name": "Mamak",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/n5me318b7HUX2oH4CZqytg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/mamak-haymarket-3?adjust_creative=Gi86uNKaMqxHSIIQTht0hw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Gi86uNKaMqxHSIIQTht0hw",
        "review_count": 247,
        "categories": [
          {
            "alias": "malaysian",
            "title": "Malaysian"
          }
        ],
        "rating": 4,
        "coordinates": {
          "latitude": -33.877862,
          "longitude": 151.204231
        },
        "transactions": [],
        "price": "$$",
        "location": {
          "address1": "15 Goulburn St",
          "address2": "",
          "address3": "",
          "city": "Haymarket",
          "zip_code": "2000",
          "country": "AU",
          "state": "NSW",
          "display_address": [
            "15 Goulburn St",
            "Haymarket New South Wales 2000",
            "Australia"
          ]
        },
        "phone": "+61292111668",
        "display_phone": "+61 2 9211 1668",
        "distance": 1044.1223123433667
      },
      {
        "id": "6WAco2HNccHCKe4e1xORMA",
        "alias": "mr-wong-sydney",
        "name": "Mr Wong",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/PnKNq3R9QcuMJIcbkrz6rQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/mr-wong-sydney?adjust_creative=Gi86uNKaMqxHSIIQTht0hw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Gi86uNKaMqxHSIIQTht0hw",
        "review_count": 231,
        "categories": [
          {
            "alias": "chinese",
            "title": "Chinese"
          }
        ],
        "rating": 4,
        "coordinates": {
          "latitude": -33.8640277937522,
          "longitude": 151.20830869577
        },
        "transactions": [],
        "price": "$$$",
        "location": {
          "address1": "3 Bridge Lane",
          "address2": null,
          "address3": "",
          "city": "Sydney",
          "zip_code": "2000",
          "country": "AU",
          "state": "NSW",
          "display_address": [
            "3 Bridge Lane",
            "Sydney New South Wales 2000",
            "Australia"
          ]
        },
        "phone": "+61291147317",
        "display_phone": "+61 2 9114 7317",
        "distance": 539.5786252902229
      },
      {
        "id": "Pg_CNYwywzDZK-LkT6QScQ",
        "alias": "din-tai-fung-sydney-5",
        "name": "Din Tai Fung",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/c9EUDlpluqfZsFQOvJ7kvQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/din-tai-fung-sydney-5?adjust_creative=Gi86uNKaMqxHSIIQTht0hw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Gi86uNKaMqxHSIIQTht0hw",
        "review_count": 249,
        "categories": [
          {
            "alias": "dimsum",
            "title": "Dim Sum"
          },
          {
            "alias": "taiwanese",
            "title": "Taiwanese"
          },
          {
            "alias": "shanghainese",
            "title": "Shanghainese"
          }
        ],
        "rating": 4,
        "coordinates": {
          "latitude": -33.8776765,
          "longitude": 151.2070967
        },
        "transactions": [],
        "price": "$$",
        "location": {
          "address1": "Shop 11.04, Level 1",
          "address2": "644 George St",
          "address3": null,
          "city": "Sydney",
          "zip_code": "2000",
          "country": "AU",
          "state": "NSW",
          "display_address": [
            "Shop 11.04, Level 1",
            "644 George St",
            "Sydney New South Wales 2000",
            "Australia"
          ]
        },
        "phone": "+61292646010",
        "display_phone": "+61 2 9264 6010",
        "distance": 992.9736218225424
      },
      {
        "id": "jwA8o4GoENGN6i34FhKlpQ",
        "alias": "the-baxter-inn-sydney",
        "name": "The Baxter Inn",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/28JXdDsRSkKrJMxkaytoJA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-baxter-inn-sydney?adjust_creative=Gi86uNKaMqxHSIIQTht0hw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Gi86uNKaMqxHSIIQTht0hw",
        "review_count": 108,
        "categories": [
          {
            "alias": "bars",
            "title": "Bars"
          },
          {
            "alias": "restaurants",
            "title": "Restaurants"
          }
        ],
        "rating": 4.5,
        "coordinates": {
          "latitude": -33.869711,
          "longitude": 151.205586
        },
        "transactions": [],
        "price": "$$$",
        "location": {
          "address1": "152-156 Clarence St",
          "address2": "Basement 152",
          "address3": "",
          "city": "Sydney",
          "zip_code": "2000",
          "country": "AU",
          "state": "NSW",
          "display_address": [
            "152-156 Clarence St",
            "Basement 152",
            "Sydney New South Wales 2000",
            "Australia"
          ]
        },
        "phone": "",
        "display_phone": "",
        "distance": 165.32636847616618
      },
      {
        "id": "C9vqxligvlBv6wGRigdYpg",
        "alias": "home-thai-restaurant-sydney",
        "name": "Home Thai Restaurant",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/2ruSj1rpvG5WiDKMYLW1FQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/home-thai-restaurant-sydney?adjust_creative=Gi86uNKaMqxHSIIQTht0hw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Gi86uNKaMqxHSIIQTht0hw",
        "review_count": 137,
        "categories": [
          {
            "alias": "thai",
            "title": "Thai"
          }
        ],
        "rating": 4,
        "coordinates": {
          "latitude": -33.87463,
          "longitude": 151.20408
        },
        "transactions": [],
        "price": "$$",
        "location": {
          "address1": "Shop 1 - 2",
          "address2": "299 Sussex St",
          "address3": null,
          "city": "Sydney",
          "zip_code": "2000",
          "country": "AU",
          "state": "NSW",
          "display_address": [
            "Shop 1 - 2",
            "299 Sussex St",
            "Sydney New South Wales 2000",
            "Australia"
          ]
        },
        "phone": "+61292615058",
        "display_phone": "+61 2 9261 5058",
        "distance": 703.1644173453506
      },
      {
        "id": "wEnq0jZ0YgBxSj7rx0H-Cw",
        "alias": "social-brew-cafe-pyrmont",
        "name": "Social Brew Cafe",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/QaFsfjupO66z-g2wankwMw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/social-brew-cafe-pyrmont?adjust_creative=Gi86uNKaMqxHSIIQTht0hw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Gi86uNKaMqxHSIIQTht0hw",
        "review_count": 80,
        "categories": [
          {
            "alias": "cafes",
            "title": "Cafes"
          },
          {
            "alias": "breakfast_brunch",
            "title": "Breakfast & Brunch"
          },
          {
            "alias": "coffee",
            "title": "Coffee & Tea"
          }
        ],
        "rating": 4.5,
        "coordinates": {
          "latitude": -33.871566,
          "longitude": 151.195107
        },
        "transactions": [],
        "price": "$$",
        "location": {
          "address1": "224 Harris St",
          "address2": "",
          "address3": "",
          "city": "Pyrmont",
          "zip_code": "2009",
          "country": "AU",
          "state": "NSW",
          "display_address": [
            "224 Harris St",
            "Pyrmont New South Wales 2009",
            "Australia"
          ]
        },
        "phone": "+61295718792",
        "display_phone": "+61 2 9571 8792",
        "distance": 1137.4083453599785
      },
      {
        "id": "D9D3tWvXt2XQ2ql0iQB9tg",
        "alias": "tetsuyas-sydney",
        "name": "Tetsuya's",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Tsc97QfzhaOZf6mQVUg0fA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/tetsuyas-sydney?adjust_creative=Gi86uNKaMqxHSIIQTht0hw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Gi86uNKaMqxHSIIQTht0hw",
        "review_count": 65,
        "categories": [
          {
            "alias": "french",
            "title": "French"
          },
          {
            "alias": "japanese",
            "title": "Japanese"
          }
        ],
        "rating": 4.5,
        "coordinates": {
          "latitude": -33.875091,
          "longitude": 151.205037
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
          "address1": "529 Kent St",
          "address2": null,
          "address3": null,
          "city": "Sydney",
          "zip_code": "2000",
          "country": "AU",
          "state": "NSW",
          "display_address": [
            "529 Kent St",
            "Sydney New South Wales 2000",
            "Australia"
          ]
        },
        "phone": "+61292672900",
        "display_phone": "+61 2 9267 2900",
        "distance": 727.1519481754219
      },
      {
        "id": "ZnmfTyS4EsrfM1iz9pqjGA",
        "alias": "rockpool-bar-and-grill-sydney",
        "name": "Rockpool Bar & Grill",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/IYauXI0YN_oVyRqbwikm9w/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/rockpool-bar-and-grill-sydney?adjust_creative=Gi86uNKaMqxHSIIQTht0hw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Gi86uNKaMqxHSIIQTht0hw",
        "review_count": 115,
        "categories": [
          {
            "alias": "steak",
            "title": "Steakhouses"
          }
        ],
        "rating": 4,
        "coordinates": {
          "latitude": -33.866114,
          "longitude": 151.210303
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
          "address1": "66 Hunter St",
          "address2": "",
          "address3": "",
          "city": "Sydney",
          "zip_code": "2000",
          "country": "AU",
          "state": "NSW",
          "display_address": [
            "66 Hunter St",
            "Sydney New South Wales 2000",
            "Australia"
          ]
        },
        "phone": "+61280781900",
        "display_phone": "+61 2 8078 1900",
        "distance": 426.1429876468467
      },
      {
        "id": "6vATEHygz4itkgLtVhsp8A",
        "alias": "queen-victoria-building-sydney",
        "name": "Queen Victoria Building",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/w-kQpPstjbG1jM_t2lSRYg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/queen-victoria-building-sydney?adjust_creative=Gi86uNKaMqxHSIIQTht0hw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Gi86uNKaMqxHSIIQTht0hw",
        "review_count": 76,
        "categories": [
          {
            "alias": "shoppingcenters",
            "title": "Shopping Centers"
          },
          {
            "alias": "landmarks",
            "title": "Landmarks & Historical Buildings"
          }
        ],
        "rating": 4.5,
        "coordinates": {
          "latitude": -33.871632,
          "longitude": 151.20659
        },
        "transactions": [],
        "price": "$$$",
        "location": {
          "address1": "455 George St",
          "address2": "",
          "address3": null,
          "city": "Sydney",
          "zip_code": "2000",
          "country": "AU",
          "state": "NSW",
          "display_address": [
            "455 George St",
            "Sydney New South Wales 2000",
            "Australia"
          ]
        },
        "phone": "+61292656800",
        "display_phone": "+61 2 9265 6800",
        "distance": 322.477351042079
      }
    ],
    "total": 4200,
    "region": {
      "center": {
        "longitude": 151.2069496,
        "latitude": -33.868747299
      }
    }
  });
});

router.post("/webhook", (req,res) => {
  let body = req.body;
  if (body.object === 'page') {
    console.log(body.entry.change);
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array, but
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
});

router.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "356IKJHGNBVFRE76IYUKJHGFERTYUJHNBFDFTYJNBVDSFERT"

  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {

    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

module.exports = router;
