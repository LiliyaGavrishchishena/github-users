import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/users/';

const getReposOfUser = async username => {
  try {
    const response = await axios.get(`${username}/repos`);
    return response.data;
  } catch (error) {
    return alert('There is no such user in GitHub!');
  }
};

export default {
  getReposOfUser,
};
