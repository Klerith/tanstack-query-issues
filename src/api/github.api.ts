import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});
