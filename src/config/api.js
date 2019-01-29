import axios from 'axios';

export const getWeather = data => axios.get('/data/101210101.html', data);