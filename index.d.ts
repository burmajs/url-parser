import * as qs from "node:querystring";
import * as http from "node:http";

export type ParsedUrl = {
  pathname: string;
  rawUrl: string;
  search: string;
  query: qs.ParsedUrlQuery;
};

declare function urlParser(request: http.IncomingMessage): ParsedUrl;

export default urlParser;
