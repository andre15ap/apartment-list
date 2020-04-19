import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { CPF_MASK, PHONE_MASK, BIRTHDAY_MASK } from '../../services/masks';
import { validateCpf } from '../../services/validate';
import { Container, Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo E-mail é obrigatório'),
  name: Yup.string().min(6, 'Nome Completo').required('Nome é obrigatório'),
});

function FormDwellerComponent({ onSubmit, close, initialData }) {
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleCpf = (value) => {
    setCpf(CPF_MASK(value.target.value));
  };
  const handlePhone = (value) => {
    setPhone(PHONE_MASK(value.target.value));
  };
  const handleBirthday = (value) => {
    setBirthday(BIRTHDAY_MASK(value.target.value));
  };

  const inValidForm = () => {
    let erro = false;
    if (phone.length < 15) {
      toast.error('Telefone é Inválido');
      erro = true;
    }
    if (cpf.length < 11 || !validateCpf(cpf)) {
      toast.error('CPF Inválido');
      erro = true;
    }
    if (birthday.length < 10) {
      toast.error('Data de Aniversário Inválida');
      erro = true;
    }
    return erro;
  };

  const dateBack = () => {
    const arrayBirthday = birthday.split('/');
    return `${arrayBirthday[1]}/${arrayBirthday[0]}/${arrayBirthday[2]}`;
  };

  const dateFront = () => {
    if (initialData && initialData.birthday) {
      return format(new Date(initialData.birthday), 'dd/MM/yyyy');
    }
    return '';
  };

  const handleSubmit = (data) => {
    console.log(data);

    if (inValidForm()) return;

    const newData = initialData
      ? { ...data, cpf, phone, birthday: dateBack(), id: initialData.id }
      : { ...data, cpf, phone, birthday: dateBack() };
    onSubmit(newData);
    close();
  };

  const valuesInitiais = () => {
    if (initialData && initialData.cpf) {
      setCpf(CPF_MASK(initialData.cpf));
    }
    if (initialData && initialData.phone) {
      setPhone(PHONE_MASK(initialData.phone));
    }
    setBirthday(BIRTHDAY_MASK(dateFront()));
  };

  useEffect(() => {
    valuesInitiais();
  }, []);

  return (
    <Container>
      <Content>
        <p>{initialData ? 'Editar Morador' : 'Novo Morador'}</p>
        <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
          <Input
            label="Nome Completo"
            minLength={3}
            name="name"
            placeholder="digite o nome"
          />

          <Input
            label="Email"
            type="email"
            minLength={3}
            name="email"
            placeholder="digite o e-mail"
          />
          <label htlmFor="birthday">Data de Nascimento</label>
          <input
            onChange={handleBirthday}
            value={birthday}
            placeholder="digite a Data de Nascimento"
            name="birthday"
          />
          <label htlmFor="cpf">CPF do Morador</label>
          <input
            onChange={handleCpf}
            value={cpf}
            placeholder="digite o CPF"
            name="cpf"
          />
          <label htlmFor="phone">Telefone</label>
          <input
            onChange={handlePhone}
            value={phone}
            placeholder="digite o Telefone"
            name="phone"
          />

          <button type="submit">Salvar</button>
        </Form>
        <button onClick={close} type="submit">
          Cancelar
        </button>
      </Content>
    </Container>
  );
}

FormDwellerComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  initialData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

FormDwellerComponent.defaultProps = {
  initialData: null,
};

export default FormDwellerComponent;
