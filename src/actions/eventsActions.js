import axios from 'axios';
import {baseUrl} from './index.js';

export default () => axios.get(`${baseUrl}/events.json`);