import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroller';
import {
  listRequest,
  saveRequest,
  deleteRequest,
} from '../../store/modules/apartment/actions';

import PAGES from '../../constants/pagesPagination';

import FormApartmentComponent from '../../components/formApartment/FormApartmentComponent';
import ContainerScrollComponent from '../../components/containerScroll/ContainerScrollComponent';
import ContainerTitleComponent from '../../components/containerTitle/ContainerTitleComponent';
import CardBodyComponent from '../../components/cardBody/CardBodyComponent';

import { Container } from './styles';

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
    if (listDwellers.length === 1) {
      return listDwellers[0].label;
    }
    const responsible = listDwellers.filter(
      (value) => value.responsible === true
    );
    return responsible[0].label;
  };

  const loadMore = () => {
    if (apartments.length >= PAGES && !loading) {
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
                <CardBodyComponent
                  key={card.id}
                  title={card.identifier}
                  subTitle={`Bloco: ${card.block ? card.block.label : ' - '}`}
                  subSubTitle={`Responsável: ${getResponsible(card.dwellers)}`}
                  actionEdit={openEditForm}
                  actionDelete={onDelete}
                  item={card}
                />
              ))}
          </InfiniteScroll>
        </ContainerScrollComponent>
      </Container>
    </>
  );
}

export default ApartmentPage;
