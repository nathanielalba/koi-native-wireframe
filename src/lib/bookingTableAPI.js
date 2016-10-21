import axios from 'axios';

const API_URL = 'https://fierce-bastion-65105.herokuapp.com/api/tables/new';

export const bookNewTable = (params, callback) => {
  const { date } = params;
  const location = params.location.replace(/ /g, '+');
  const time = params.time.toString();
  const partySize = params.partySize.toString();

  axios.post(API_URL, { location, date, time, partySize }).then((response) => {
    if (callback) { callback(response); }
  });
};
