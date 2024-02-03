import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const remove = async (id) => {
  try {
    const name = (await axios.get(`${baseUrl}/${id}`)).data.name;
    const result = window.prompt(`Type 'yes' to delete ${name}:`);
    if (result === "yes") {
      const response = await axios.delete(`${baseUrl}/${id}`);
      alert(`Deleted ${response.data.name}`);
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove,
};
