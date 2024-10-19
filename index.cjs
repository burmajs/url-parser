const qs = require("node:querystring");
const http = require("node:http");
/**
 * @typedef ParsedUrl
 * @property {string} pathname
 * @property {string} rawUrl
 * @property {string} search
 * @property {qs.ParsedUrlQuery} query
 * @property {(key:string)=> string | string[]} getParam
 */

/**
 * Parse req.url of http.IncomingMessage
 * @param {http.IncomingMessage} request
 * @returns {ParsedUrl}
 */
function urlParser(request) {
  const rawUrl = request.url;
  if (!rawUrl) return undefined;
  /**
   * @type {ParsedUrl | undefined}
   */
  let parsedUrl;
  const prev = parsedUrl;
  if (prev && prev.rawUrl === rawUrl) return prev;
  let [pathname, search] = rawUrl.split("?", 2);
  if (!search) search = "";
  const query = search ? JSON.parse(JSON.stringify(qs.parse(search))) : {};
  /**
   *
   * @param {string} key
   * @returns {string | string[]}
   */
  const getParam = (key) => query[key] ?? "";
  return (parsedUrl = { pathname, query, rawUrl, search, getParam });
}
module.exports = urlParser;
