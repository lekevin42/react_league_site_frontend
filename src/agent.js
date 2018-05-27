import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';


const superagent = superagentPromise(_superagent, global.Promise);

const env = process.env.NODE_ENV || 'development';

let API_ROOT = env === 'production' ?  '' : 'http://localhost:3001/api';

//const API_ROOT_SINGLE_CHAMPIONS = 'https://na1.api.riotgames.com/lol/static-data/v3/champions/';

//const encode = encodeURIComponent;

const handleErrors = err => {
  if (err && err.response && err.response.status === 401) {

  }
  return err;
};

const responseBody = res => res.body;


const requests = {
  del: url => superagent.del(`${API_ROOT}${url}`).end(handleErrors).then(responseBody),
  get: url => superagent.get(`${API_ROOT}${url}`).end(handleErrors).then(responseBody),
  put: (url, body) => superagent.put(`${API_ROOT}${url}`, body).end(handleErrors).then(responseBody),
  post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).end(handleErrors).then(responseBody),
  //getSingleChampion: id => superagent.get(`${API_ROOT_SINGLE_CHAMPIONS}${id}?locale=en_US&champData=all&tags=all&api_key=${process.env.REACT_APP_LOL_API_KEY}`).end(handleErrors).then(responseBody)
};




const Champions = {
  getSingleChampion: (id) => requests.get(`/singlechampion/${id}`),
  getAllChampions: () => requests.get('/champions/all'),
  deleteAllChampions: () => requests.del('/champions/deleteall')
}

export default {Champions};
