import api from './api';

const getBlocks = async () => {
  try {
    const response = await api.get(`/blocks-findall`);
    return response.data;
  } catch (err) {
    return [];
  }
};

const getDwellers = async () => {
  try {
    const response = await api.get(`/dwellers-findall`);
    return response.data;
  } catch (err) {
    return [];
  }
};

const getApartments = async () => {
  try {
    const response = await api.get(`/apartments-findall`);
    return response.data;
  } catch (err) {
    return [];
  }
};

export { getBlocks, getDwellers, getApartments };
