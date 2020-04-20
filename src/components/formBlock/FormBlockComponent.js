import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';

import ModalCarFormComponent from '../modalCardForm/ModalCardFormComponent';

function FormBlockComponent({ onSubmit, close, initialData }) {
  const handleSubmit = (data) => {
    const newData = initialData ? { ...data, id: initialData.id } : data;
    onSubmit(newData);
    close();
  };
  return (
    <ModalCarFormComponent>
      <p>{initialData ? 'Editar Bloco' : 'Novo Bloco'}</p>
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <Input
          label="Identificador"
          minLength={2}
          name="identifier"
          placeholder="digite o nome do bloco"
        />

        <button type="submit">Salvar</button>
      </Form>
      <button onClick={close} type="submit">
        Cancelar
      </button>
    </ModalCarFormComponent>
  );
}

FormBlockComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  initialData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

FormBlockComponent.defaultProps = {
  initialData: null,
};

export default FormBlockComponent;
