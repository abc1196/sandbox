export default class Api {
    static headers = () => {
      return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        dataType: 'json'
      };
    };
  
    static get = route => {
      return this.xhr(route, null, 'GET');
    };
  
    static put = (route, params) => {
      return this.xhr(route, params, 'PUT');
    };
  
    static post = (route, params) => {
      return this.xhr(route, params, 'POST');
    };
  
    static delete = (route, params) => {
      return this.xhr(route, params, 'DELETE');
    };
  
    static xhr = async (route, params, verb) => {
      const host = 'https://ems-backend.appspot.com/_ah/api/ems/v1/';
      //const stagingHost = 'https://staging-ems.appspot.com/_ah/api/ems/v1/';
      const url = `${host}${route}`;
      const options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
      options.headers = Api.headers();
      try {
        const resp = await fetch(url, options);
        const text = await resp.text();
        return text.length ? JSON.parse(text) : {};
      } catch (error) {
        throw error;
      }
    };
  }
  