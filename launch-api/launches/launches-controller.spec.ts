// launches-controller.spec.ts

import { LaunchesController } from "./launches-controller";
import { expect } from 'chai';
import 'mocha';

describe('API Launches Controller', () => {

    describe('convertToLaunches', () => {
        it('should convert launch library data to launch object', async () => {
            const launchData = {"launches": [{
                "id": 1678,
                "name": "Safir  | Doosti",
                "windowstart": "February 14, 2019 00:00:00 UTC",
                "windowend": "February 14, 2019 00:00:00 UTC",
                "net": "February 14, 2019 00:00:00 UTC",
                "wsstamp": 0,
                "westamp": 0,
                "netstamp": 0,
                "isostart": "20190214T000000Z",
                "isoend": "20190214T000000Z",
                "isonet": "20190214T000000Z",
                "status": 2,
                "inhold": 0,
                "tbdtime": 1,
                "vidURLs": [],
                "vidURL": null,
                "infoURLs": [],
                "infoURL": null,
                "holdreason": null,
                "failreason": null,
                "tbddate": 1,
                "probability": -1,
                "hashtag": null,
                "changed": "2019-01-24 10:49:43",
                "location": {
                  "pads": [
                    {
                      "id": 120,
                      "name": "Unknown Pad, Iran",
                      "infoURL": "",
                      "wikiURL": null,
                      "mapURL": null,
                      "latitude": 35.258416,
                      "longitude": 53.953567,
                      "agencies": null
                    }
                  ],
                  "id": 6,
                  "name": "Semnan Space Center, Islamic Republic of Iran",
                  "infoURL": "",
                  "wikiURL": "",
                  "countryCode": "IRN"
                },
                "rocket": {
                  "id": 56,
                  "name": "Safir ",
                  "configuration": "",
                  "familyname": "Safir",
                  "agencies": [
                    {
                      "id": 34,
                      "name": "Iranian Space Agency",
                      "abbrev": "ISA",
                      "countryCode": "IRN",
                      "type": 1,
                      "infoURL": "http://www.isa.ir/",
                      "wikiURL": "http://en.wikipedia.org/wiki/Iranian_Space_Agency",
                      "changed": "2017-02-21 00:00:00",
                      "infoURLs": [
                        "http://www.isa.ir/"
                      ]
                    }
                  ],
                  "wikiURL": "https://en.wikipedia.org/wiki/Safir_(rocket)",
                  "infoURLs": [],
                  "imageURL": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                  "imageSizes": [
                    320,
                    480,
                    640,
                    720,
                    768,
                    800,
                    960,
                    1024,
                    1080,
                    1280,
                    1440,
                    1920
                  ]
                },
                "missions": [
                  {
                    "id": 1177,
                    "name": "Doosti",
                    "description": "Doosti (farsi for \"friendship\") is a microsatellite developed and built by the Remote Sensing Laboratory of Iranian Space Agency.",
                    "type": 1,
                    "wikiURL": "",
                    "typeName": "Earth Science",
                    "agencies": [
                      {
                        "id": 34,
                        "name": "Iranian Space Agency",
                        "abbrev": "ISA",
                        "countryCode": "IRN",
                        "type": 1,
                        "infoURL": "http://www.isa.ir/",
                        "wikiURL": "http://en.wikipedia.org/wiki/Iranian_Space_Agency",
                        "changed": "2017-02-21 00:00:00",
                        "infoURLs": [
                          "http://www.isa.ir/"
                        ]
                      }
                    ],
                    "payloads": []
                  }
                ],
                "lsp": {
                  "id": 34,
                  "name": "Iranian Space Agency",
                  "abbrev": "ISA",
                  "countryCode": "IRN",
                  "type": 1,
                  "infoURL": "http://www.isa.ir/",
                  "wikiURL": "http://en.wikipedia.org/wiki/Iranian_Space_Agency",
                  "changed": "2017-02-21 00:00:00",
                  "infoURLs": [
                    "http://www.isa.ir/"
                  ]
                }
              },
              {
                "id": 1591,
                "name": "Falcon 9 Block 5 | Nusantara Satu (PSN VI), Spaceflight GTO-1 & Beresheet",
                "windowstart": "February 19, 2019 02:00:00 UTC",
                "windowend": "February 19, 2019 02:00:00 UTC",
                "net": "February 19, 2019 02:00:00 UTC",
                "wsstamp": 0,
                "westamp": 0,
                "netstamp": 0,
                "isostart": "20190219T020000Z",
                "isoend": "20190219T020000Z",
                "isonet": "20190219T020000Z",
                "status": 2,
                "inhold": 0,
                "tbdtime": 1,
                "vidURLs": [],
                "vidURL": null,
                "infoURLs": [],
                "infoURL": null,
                "holdreason": null,
                "failreason": null,
                "tbddate": 1,
                "probability": -1,
                "hashtag": null,
                "changed": "2018-07-10 11:59:11",
                "location": {
                  "pads": [
                    {
                      "id": 84,
                      "name": "Space Launch Complex 40, Cape Canaveral, FL",
                      "infoURL": "",
                      "wikiURL": "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
                      "mapURL": "http://maps.google.com/maps?q=28.56194122,-80.57735736",
                      "latitude": 28.56194122,
                      "longitude": -80.57735736,
                      "agencies": [
                        {
                          "id": 121,
                          "name": "SpaceX",
                          "abbrev": "SpX",
                          "countryCode": "USA",
                          "type": 3,
                          "infoURL": null,
                          "wikiURL": "http://en.wikipedia.org/wiki/SpaceX",
                          "changed": "2017-02-21 00:00:00",
                          "infoURLs": [
                            "http://www.spacex.com/",
                            "https://twitter.com/SpaceX",
                            "https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA"
                          ]
                        }
                      ]
                    }
                  ],
                  "id": 16,
                  "name": "Cape Canaveral, FL, USA",
                  "infoURL": "",
                  "wikiURL": "",
                  "countryCode": "USA"
                },
                "rocket": {
                  "id": 188,
                  "name": "Falcon 9 Block 5",
                  "configuration": "9 Block 5",
                  "familyname": "Falcon",
                  "agencies": [
                    {
                      "id": 121,
                      "name": "SpaceX",
                      "abbrev": "SpX",
                      "countryCode": "USA",
                      "type": 3,
                      "infoURL": null,
                      "wikiURL": "http://en.wikipedia.org/wiki/SpaceX",
                      "changed": "2017-02-21 00:00:00",
                      "infoURLs": [
                        "http://www.spacex.com/",
                        "https://twitter.com/SpaceX",
                        "https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA"
                      ]
                    }
                  ],
                  "wikiURL": "https://en.wikipedia.org/wiki/Falcon_9_Full_Thrust#Block_5",
                  "infoURLs": [
                    "http://www.spacex.com/falcon9"
                  ],
                  "infoURL": "http://www.spacex.com/falcon9",
                  "imageSizes": [
                    320,
                    480,
                    640,
                    720,
                    768,
                    800,
                    960,
                    1024,
                    1080,
                    1280,
                    1440,
                    1920
                  ],
                  "imageURL": "https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg"
                },
                "missions": [
                  {
                    "id": 838,
                    "name": "Beresheet",
                    "description": "Beresheet is a lunar lander developed by the Israeli nonprofit organisation SpaceIL. It is an entry to win the Google Lunar XPRIZE (GLXP).\nBeresheet is a lunar lander, which has a propulsion system to enable itself to leave earth orbit and to enter a trajectory to the moon. After landing on the lunar surface, the lander will reignite its propulsion system to move a distance of at least 500 m to satisfy the rules of the GLXP.",
                    "type": 6,
                    "wikiURL": "https://en.wikipedia.org/wiki/SpaceIL",
                    "typeName": "Robotic Exploration",
                    "agencies": null,
                    "payloads": [
                      {
                        "id": 259,
                        "name": "SpaceIL Lunar Lander 'Sparrow'"
                      }
                    ]
                  }
                ],
                "lsp": {
                  "id": 121,
                  "name": "SpaceX",
                  "abbrev": "SpX",
                  "countryCode": "USA",
                  "type": 3,
                  "infoURL": null,
                  "wikiURL": "http://en.wikipedia.org/wiki/SpaceX",
                  "changed": "2017-02-21 00:00:00",
                  "infoURLs": [
                    "http://www.spacex.com/",
                    "https://twitter.com/SpaceX",
                    "https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA"
                  ]
                }
              }]
            };

            const expectedResult = {
                name:"Safir  | Doosti",
                agency:{"name":"Iranian Space Agency","url":"http://en.wikipedia.org/wiki/Iranian_Space_Agency"},
                location:{"name":"Semnan Space Center, Islamic Republic of Iran","url":""},
                time:"February 14, 2019 00:00:00 UTC",
                url: undefined
            };
            const result = await LaunchesController.convertToLaunches(JSON.stringify(launchData));
            expect(result[0]).to.deep.equal(expectedResult);
        })
    });
});