import Axios from "./http";
const { pickBy } = require("lodash");

export class CoreApi {
  constructor(_base_path) {
    this.http = Axios;
    this._base_path = _base_path;
  }

  stringifySearchQuery(values) {
    const parsedValues = pickBy(values);
    return Object.keys(parsedValues)
      .map((k) => {
        if (k === "type") {
          return `${k}.slug:${parsedValues[k]};`;
        }
        if (k === "category") {
          return `categories.slug:${parsedValues[k]};`;
        }
        return `${k}:${parsedValues[k]};`;
      })
      .join("")
      .slice(0, -1);
  }

  find(params) {
    const {
      type,
      text: name,
      category,
      status,
      is_active,
      shop_id,
      limit = 30,
    } = params;
    const searchString = this.stringifySearchQuery({
      type,
      name,
      category,
      status,
      shop_id,
      is_active,
    });
    const queryString = `?search=${searchString}&searchJoin=and&limit=${limit}`;
    return this.http.get(this._base_path + queryString);
  }
  findAll() {
    return this.http.get(this._base_path);
  }
  fetchUrl(url) {
    return this.http.get(url);
  }
  postUrl(url, data) {
    return this.http.post(url, data);
  }
  findOne(id) {
    return this.http.get(`${this._base_path}/${id}`);
  }
  create(data, options) {
    return this.http
      .post(this._base_path, data, options)
      .then((res) => res.data);
  }
  update(id, data) {
    return this.http
      .put(`${this._base_path}/${id}`, data)
      .then((res) => res.data);
  }
  delete(id) {
    return this.http.delete(`${this._base_path}/${id}`);
  }
}
