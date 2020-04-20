import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaTrashAlt, FaEdit } from 'react-icons/fa';

import InfiniteScroll from 'react-infinite-scroller';
import {
  listRequest,
  saveRequest,
  deleteRequest,
} from '../../store/modules/apartment/actions';

import COLORS from '../../constants/colors';

import FormApartmentComponent from '../../components/formApartment/FormApartmentComponent';
import ContainerScrollComponent from '../../components/containerScroll/ContainerScrollComponent';
import ContainerTitleComponent from '../../components/containerTitle/ContainerTitleComponent';

import { Container, Card } from './styles';

function ApartmentPage() {
  const [openForm, setOpenForm] = useState(false);
  const [edit, setEdit] = useState(null);

  const dispatch = useDispatch();
  const apartments = useSelector((state) => state.apartment.apartments);
  const loading = useSelector((state) => state.apartment.loading);
  const hasMore = useSelector((state) => state.apartment.hasMore);
  const page = useSelector((state) => state.apartment.page);

  const getAllApartments = () => {
    dispatch(listRequest(1));
  };

  const onSave = (data) => {
    dispatch(saveRequest(data));
  };

  const onDelete = (id) => {
    dispatch(deleteRequest(id));
  };

  const openEditForm = (data) => {
    setEdit(data);
    setOpenForm(true);
  };

  const openSaveForm = () => {
    setEdit(null);
    setOpenForm(true);
  };

  const getResponsible = (listDwellers) => {
    const responsible = listDwellers.filter(
      (value) => value.responsible === true
    );
    return responsible[0].label;
  };

  const loadMore = () => {
    if (apartments.length >= 15 && !loading) {
      dispatch(listRequest(page));
    }
  };

  useEffect(() => {
    getAllApartments();
  }, []);

  return (
    <>
      {openForm && (
        <FormApartmentComponent
          close={() => setOpenForm(false)}
          onSubmit={onSave}
          initialData={edit}
        />
      )}
      <Container>
        <ContainerScrollComponent>
          <ContainerTitleComponent title="Apartamentos" action={openSaveForm} />
          <InfiniteScroll
            pageStart={0}
            threshold={10}
            loadMore={loadMore}
            hasMore={hasMore}
            useWindow={false}
            loader={
              <div className="loader" key={0}>
                Buscando ...
              </div>
            }
          >
            {apartments &&
              apartments.map((card) => (
                <Card key={card.id}>
                  <div>
                    <p>{card.identifier}</p>
                    <span>Bloco: {card.block ? card.block.label : ' - '}</span>
                    <br />
                    <span>Responsável: {getResponsible(card.dwellers)}</span>
                  </div>
                  <div>
                    <button onClick={() => openEditForm(card)} type="button">
                      <FaEdit color={COLORS.SECONDARY_DARK} size={20} />
                    </button>
                    <button onClick={() => onDelete(card.id)} type="button">
                      <FaTrashAlt color={COLORS.DANGER} size={20} />
                    </button>
                  </div>
                </Card>
              ))}
          </InfiniteScroll>
        </ContainerScrollComponent>
      </Container>
    </>
  );
}

export default ApartmentPage;
