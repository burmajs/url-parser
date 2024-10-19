## Parse req.url of http.IncomingMessage

### Install

```bash
npm i @burmajs/url-parser
```

```bash
pnpm i @burmajs/url-parser
```

### Example

#### ESM

```ts
import http from "node:http";
import urlParser from "@burmajs/url-parser";

http
  .createServer(function (req, res) {
    const parseedUrl = urlParser(req);
    if (req.url === "/foo/bar?user=foo&pass=bar") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          parseedUrl,
          user: parseedUrl.getParam("user"),
        })
      );
    }
  })
  .listen(3000);

/*
  {
  "parseedUrl": {
    "pathname": "/foo/bar",
    "query": {
      "user": "foo",
      "pass": "bar"
    },
    "rawUrl": "/foo/bar?user=foo&pass=bar",
    "search": "user=foo&pass=bar"
  },
  "user": "foo"
   }
*/
```

#### Common Js

```js
const http = require("node:http");
const urlParser = require("@burmajs/url-parser");

http
  .createServer(function (req, res) {
    const parseedUrl = urlParser(req);
    if (req.url === "/foo/bar?user=foo&pass=bar") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          parseedUrl,
          user: parseedUrl.getParam("user"),
        })
      );
    }
  })
  .listen(3000);

/*
  {
  "parseedUrl": {
    "pathname": "/foo/bar",
    "query": {
      "user": "foo",
      "pass": "bar"
    },
    "rawUrl": "/foo/bar?user=foo&pass=bar",
    "search": "user=foo&pass=bar"
  },
  "user": "foo"
   }
*/
```
