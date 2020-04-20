import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroller';
import {
  listRequest,
  saveRequest,
  deleteRequest,
} from '../../store/modules/apartment/actions';

import { saveRequest as saveDweller } from '../../store/modules/dweller/actions';

import PAGES from '../../constants/pagesPagination';

import FormApartmentComponent from '../../components/formApartment/FormApartmentComponent';
import ContainerScrollComponent from '../../components/containerScroll/ContainerScrollComponent';
import ContainerTitleComponent from '../../components/containerTitle/ContainerTitleComponent';
import CardBodyComponent from '../../components/cardBody/CardBodyComponent';
import CardDwellersComponent from '../../components/cardDwellers/CardDwellersComponent';

import { Container } from './styles';

function ApartmentPage() {
  const [openForm, setOpenForm] = useState(false);
  const [openDwellers, setOpenDwellers] = useState(false);
  const [dwellers, setDwellers] = useState([]);
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
    setTimeout(() => {
      getAllApartments();
    }, 500);
  };

  const onSaveDweller = (data) => {
    dispatch(saveDweller(data));
    getAllApartments();
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
    try {
      if (listDwellers.length === 1) {
        return listDwellers[0].label;
      }
      const responsible = listDwellers.filter(
        (value) => value.responsible === true
      );
      return responsible[0].label;
    } catch (e) {
      console.log(e);
      return ' - ';
    }
  };

  const handleDwellers = (list) => {
    setDwellers(list);
    setOpenDwellers(true);
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
      {openDwellers && (
        <CardDwellersComponent
          close={() => setOpenDwellers(false)}
          action={onSaveDweller}
          dwellers={dwellers}
        />
      )}

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
            {apartments.length
              ? apartments.map((card) => (
                  <CardBodyComponent
                    key={card.id}
                    title={card.identifier}
                    subTitle={`Bloco: ${card.block ? card.block.label : ' - '}`}
                    subSubTitle={`Responsável: ${getResponsible(
                      card.dwellers
                    )}`}
                    actionEdit={openEditForm}
                    actionDelete={onDelete}
                    actionDwellers={() => handleDwellers(card.dwellers)}
                    item={card}
                  />
                ))
              : !loading && <h4>Lista Vazia</h4>}
          </InfiniteScroll>
        </ContainerScrollComponent>
      </Container>
    </>
  );
}

export default ApartmentPage;
