import axios from 'axios';
import config from '../../config';

class RestRequest {

  /**
   *
   * @returns {(string|{message: string})[]}
   */
  static noDataResponse(){ return ["error", {"message":"No data response"}]; }

  /**
   *
   * @returns {(string|{message: string})[]}
   */
  static noRequestType(){ return ["error", {"message":"No request type given"}]; }

  /**
   *
   * @param data
   * @returns {(string|*)[]}
   */
  static dataResponse(data){ return["success",data] }

  /**
   *
   * @param formData
   * @returns {*}
   */
  static requestSupport(formData){
    return formData;
  }

  /**
   *
   * @param formData
   * @param param
   * @returns {Promise<string|*>}
   */
 static async getData(formData, param) {

   let dataResponse = this.noDataResponse();

   switch(param.type) {
     case 'get_request':
       dataResponse = this.dataResponse(await axios.get(config.default_rest_url+ param.get_variables).then(
         (response) => {
         return response.data;
       }).catch(({response}) => {
         this.subdomLoading = false;
         this.subdomAvail = false;
         console.log(response);
       }).finally(() => {}));
       break;
     case 'issue_request':
       dataResponse = this.dataResponse(await axios.get(config.default_rest_issues+ param.get_variables, { crossdomain: true }).then(
         (response) => {
           return response.data;
         }).catch(({response}) => {
         this.subdomLoading = false;
         this.subdomAvail = false;
         console.log(response);
       }).finally(() => {}));
       break;
     case 'post_request':
       break;
     default:
      dataResponse = this.noRequestType();
   }
   return dataResponse;
  }
}

export default RestRequest;

