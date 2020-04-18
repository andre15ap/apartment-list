import api from './api';

const getBlocks = async () => {
  try {
    const response = await api.get('/blocks');
    return response.data;
  } catch {
    return [];
  }
};

export { getBlocks };
