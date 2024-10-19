import * as qs from "node:querystring";
import * as http from "node:http";

export type ParsedUrl = {
  pathname: string;
  rawUrl: string;
  search: string;
  query: qs.ParsedUrlQuery;
  getParam: (key: string) => string | string[];
};

declare function urlParser(request: http.IncomingMessage): ParsedUrl;

export default urlParser;
