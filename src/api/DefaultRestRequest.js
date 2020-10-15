export class DefaultRestRequest {

  /**
   *
   * @param url
   * @param jsonObj
   */
  constructor(url, jsonObj) {
    this.url = url;
    this.jsonObj = jsonObj;
  }

  /**
   *
   * @returns {*}
   */
  get getUrl() {
    return this.url;
  }

  /**
   *
   * @returns {*}
   */
  get getJsonObj() {
    return this.jsonObj;
  }

}
