/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import Select from 'react-select';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { getBlocks, getDwellers } from '../../services/serviceSelect';

import ModalCarFormComponent from '../modalCardForm/ModalCardFormComponent';

const schema = Yup.object().shape({
  identifier: Yup.string().required('Identificador é obrigatório'),
});

function FormApartmentComponent({ onSubmit, close, initialData }) {
  const [block, setBlock] = useState('');
  const [allblocks, setAllBlocks] = useState([]);
  const [dwellers, setDwellers] = useState('');
  const [allDwellers, setAllDwellers] = useState([]);

  const invalidForm = () => {
    let error = false;
    if (!dwellers) {
      toast.error('Necessário ao menos um Morador!');
      error = true;
    }
    if (!block) {
      toast.error('Necessário escolher o Bloco!');
      error = true;
    }
    return error;
  };

  const handleSubmit = (data) => {
    if (invalidForm()) return;
    const idsDwellers = dwellers.map((dweller) => dweller.value);

    const completData = {
      ...data,
      block_id: block.value,
      dwellers: idsDwellers,
    };

    const newData = initialData
      ? { ...completData, id: initialData.id }
      : completData;
    onSubmit(newData);
    close();
  };

  const getAllBlocks = async () => {
    const all = await getBlocks();
    setAllBlocks(all);
  };
  const getAllDwellers = async () => {
    const all = await getDwellers();
    setAllDwellers(all);
  };

  const getInitalState = () => {
    if (initialData && initialData.block) {
      setBlock(initialData.block);
    }
    if (initialData && initialData.dwellers) {
      setDwellers(initialData.dwellers);
    }
  };

  useEffect(() => {
    getAllBlocks();
    getAllDwellers();
    getInitalState();
  }, []);

  return (
    <ModalCarFormComponent>
      <p>{initialData ? 'Editar Apartamento' : 'Novo Apartamento'}</p>
      <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
        <Input
          label="Identificador"
          minLength={2}
          name="identifier"
          placeholder="digite o Número do apartamento"
        />
        <label htmlFor="dwellers">Bloco</label>
        <Select
          value={block}
          onChange={(value) => setBlock(value)}
          name="block"
          placeholder="Escolha o Block"
          options={allblocks}
        />
        <label htmlFor="dwellers">Moradores</label>
        <Select
          value={dwellers}
          isMulti
          onChange={(value) => setDwellers(value)}
          name="dwellers"
          placeholder={`Escolha os Moradores. ${
            !initialData ? 'O primeiro selecionado será o responsável' : ''
          }`}
          options={allDwellers}
        />

        <button type="submit">Salvar</button>
      </Form>
      <button onClick={close} type="submit">
        Cancelar
      </button>
    </ModalCarFormComponent>
  );
}

FormApartmentComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  initialData: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
      PropTypes.number,
    ])
  ),
};

FormApartmentComponent.defaultProps = {
  initialData: null,
};

export default FormApartmentComponent;
