const settings = {
  "name": "custom-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "wxpn-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "url": "http://wxpn-wordpress.lndo.site/",
          "url": "https://dev-wxpn-wordpress.pantheonsite.io/",
          "postTypes": [
            {
              type: "artist",
              endpoint: "artist",
              archive: "/artists"
            },
            {
              type: "host",
              endpoint: "host",
              archive: "/hosts"
            },
            {
              type: "video",
              endpoint: "video",
              archive: "/videos"
            },
            {
              type: "news",
              endpoint: "news",
              archive: "/all-news"
            },
            {
              type: "event",
              endpoint: "event",
              archive: "/events"
            },
            {
              type: "track",
              endpoint: "track",
              archive: "/tracks"
            },
            {
              type: "playlist",
              endpoint: "playlist",
              archive: "/playlists"
            },
            {
              type: "program",
              endpoint: "program",
              archive: "/programs"
            },
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
