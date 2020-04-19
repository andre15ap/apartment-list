import { toast } from 'react-toastify';
import api from './api';

const getBlocks = async (page = 1) => {
  try {
    const response = await api.get(`/blocks?page=${page}`);
    return response.data;
  } catch (err) {
    return [];
  }
};

const saveBlock = async (data) => {
  try {
    const { identifier, id } = data;
    if (id) {
      await api.put(`/blocks/${id}`, { identifier });
      toast.success('Editado com sucesso!');
    } else {
      await api.post('/blocks', { identifier });
      toast.success('Criado com sucesso!');
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Error, Verifique os campos');
    }
  }
};

const deleteBlock = async (id) => {
  try {
    await api.delete(`/blocks/${id}`);
    toast.success('Excluido com sucesso!');
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Error, Algo inesperado aconteceu :(');
    }
  }
};

export { getBlocks, saveBlock, deleteBlock };
