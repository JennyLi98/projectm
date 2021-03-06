import Axios from "axios";
import Cookies from "js-cookie";

import Config from "../Config.json";

const { baseUrl, pollLimit} = Config;

const HTTPMethod = Object.freeze({
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE"
});

function initSocket() {
  Axios.defaults.baseURL = baseUrl;
  console.log(Axios.defaults.baseURL);
}

function setHeader(token) {
  const { common } = Axios.defaults.headers;
  common["Authorization"] = 'Token ' + token;
}

async function GET(path) {
  console.log(baseUrl);
  console.log(Axios.defaults.baseURL);
  return await sendHTTP(HTTPMethod.GET, path);
}

async function POST(path, data) {
  return await sendHTTP(HTTPMethod.POST, path, data);
}

async function DELETE(path) {
  return await sendHTTP(HTTPMethod.DELETE, path);
}

async function sendHTTP(method, path, data) {
  let response;

  switch (method) {
    case HTTPMethod.GET:
      response = await Axios.get(path);
      break;
    case HTTPMethod.POST:
      response = await Axios.post(path, data);
      break;
    case HTTPMethod.DELETE:
      response = await Axios.delete(path);
      break;
    default:
    // Should never reach here
  }

  /************************************************
        TODO Do error checking on response
  ************************************************/

  return await response;
}


export default {
  initSocket,
  setHeader,
  GET,
  POST,
  DELETE
};
