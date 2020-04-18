import { toast } from 'react-toastify';
import api from './api';

const getBlocks = async () => {
  try {
    const response = await api.get('/blocks');
    return response.data;
  } catch (err) {
    return [];
  }
};

const saveBlock = async (identifier) => {
  try {
    await api.post('/blocks', identifier);
    toast.success('Criado com sucesso!');
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Error, Verifique os campos');
    }
  }
};

const editBlock = async (data) => {
  try {
    const { identifier, id } = data;
    await api.put(`/blocks/${id}`, { identifier });
    toast.success('Editado com sucesso!');
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

export { getBlocks, saveBlock, editBlock, deleteBlock };
