import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer hJTvLrz_2v9OMc0yYyFalHFU2PdtUqYlK1HpXToQxd2Sxvvd6eFoRjq_qFlNJ2eq-3pY-Pj-QOiSXk02Gx9zrEfg40M5GWqmTdtvDh3wPGb4q9h4oNa3_0PmqvJIZHYx ',
  },
});
