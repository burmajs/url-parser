declare module "urlParser" {
  import { IncomingMessage } from "http";
  import * as qs from "node:querystring";

  type ParsedUrl = {
    pathname: string;
    rawUrl: string;
    search: string;
    query: qs.ParsedUrlQuery;
  };

  function urlParser(request: IncomingMessage): ParsedUrl;
  export = urlParser;
}
