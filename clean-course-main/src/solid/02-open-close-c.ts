/* import axios from 'axios';
 */
export class HttpClient {

    /*   async get<T>(url: string): Promise<{ data: T }> {
          const { data } = await axios.get<T>(url);
          return { data };
      } */

    async get<T>(url: string): Promise<{ data: T }> {
        const response = await fetch(url);
        const data = await response.json();
        return { data };
    }
}