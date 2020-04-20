import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { FaSearch } from 'react-icons/fa';

import { listRequest } from '../../store/modules/dweller/actions';
import { getApartments } from '../../services/serviceSelect';

import COLORS from '../../constants/colors';

import { Container } from './styles';

function FiltersDwellersComponent() {
  const [apartment, setApartment] = useState('');
  const [name, setName] = useState('');
  const [allApartments, setAllApartments] = useState([]);

  const dispatch = useDispatch();

  const handleClick = () => {
    const apartmentId = apartment ? apartment.value : null;
    dispatch(listRequest(1, name, apartmentId));
  };

  const getAllApartmetns = async () => {
    const all = await getApartments();
    setAllApartments(all);
  };

  useEffect(() => {
    getAllApartmetns();
  }, []);

  return (
    <Container>
      <div className="filter">
        <input
          value={name}
          onChange={(value) => setName(value.target.value)}
          name="name"
          placeholder="Buscar por Nome"
        />
        <Select
          value={apartment}
          isClearable
          onChange={(value) => setApartment(value)}
          name="apartment"
          placeholder="Buscar por Apartamento"
          options={allApartments}
        />
        <button onClick={handleClick} type="button">
          <FaSearch color={COLORS.PRIMARY} size={14} />
          <span>Filtrar</span>
        </button>
      </div>
    </Container>
  );
}

export default FiltersDwellersComponent;
