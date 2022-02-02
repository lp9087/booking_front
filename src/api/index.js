/* eslint-disable no-restricted-globals */
import axios from 'axios';


const api = axios.create({
    baseURL: location.origin,
    timeout: 25000,
  });
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api
export {tasksApi} from './Tasks'
