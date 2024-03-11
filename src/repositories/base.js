// import http from "@utils/api/http";

import http from "@utils/api/http";

export default class Base {
  http = async (url, type, variables, options) => {
    return http[type](url, variables, options);
  };
  all = async (url) => {
    return this.http(url, "get");
  };

  find = async (url) => {
    return this.http(url, "get");
  };

  create = async (url, variables) => {
    return this.http(url, "post", variables);
  };

  update = async (url, variables) => {
    return this.http(url, "put", variables);
  };

  delete = async (url) => {
    return this.http(url, "delete");
  };
}
