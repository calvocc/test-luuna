import axios from 'axios';
import {toast} from 'react-toastify';

export const searchGithub = async (search: string, searchType: 'users' | 'repositories') => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/search/${searchType}?q=${search}&per_page=20`
    );
    return data;
  } catch (e:any) {
    return toast.error('API rate limit exceeded for you ip');
  }
};