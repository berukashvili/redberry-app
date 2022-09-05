import axios from 'axios';

export const fetchTeams = axios.create({
  baseURL: `https://pcfy.redberryinternship.ge/api`,
  params: {
    api_key: '484872099759ea173e89461a34157a96',
  },
});
