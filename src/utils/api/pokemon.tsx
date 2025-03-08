import get from './base/get';

export default {
  getListPage: () => {
    return get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`, {});
  },
};
