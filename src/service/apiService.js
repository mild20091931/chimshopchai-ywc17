import api from '../utils/api';

const Api = {
  getData: async () => {
    let data = await api.get();
    return data;
  },
};

export default Api;
