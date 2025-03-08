import axios from 'axios';

export default async (url: string, params: any) => {
  try {
    return await axios.get(url, { params });
  } catch (e) {
    console.log(e);
    throw e;
  }
};
