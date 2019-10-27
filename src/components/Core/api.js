import api from "../../utils/apiService";

const Api = {
  getData: async () => {
    let data = await api.get();
    return data;
  }
}

export default Api;