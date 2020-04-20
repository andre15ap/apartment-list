import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroller';
import {
  listRequest,
  saveRequest,
  deleteRequest,
} from '../../store/modules/dweller/actions';

import PAGES from '../../constants/pagesPagination';

import FormDwellerComponent from '../../components/formDweller/FormDwellerComponent';
import ContainerScrollComponent from '../../components/containerScroll/ContainerScrollComponent';
import FiltersDwellersComponent from '../../components/filtersDwellers/FiltersDwellersComponent';
import ContainerTitleComponent from '../../components/containerTitle/ContainerTitleComponent';
import CardBodyComponent from '../../components/cardBody/CardBodyComponent';

import { Container } from './styles';

function DwellersPage() {
  const [openForm, setOpenForm] = useState(false);
  const [edit, setEdit] = useState(null);

  const dispatch = useDispatch();
  const dwellers = useSelector((state) => state.dweller.dwellers);
  const loading = useSelector((state) => state.dweller.loading);
  const hasMore = useSelector((state) => state.dweller.hasMore);
  const page = useSelector((state) => state.dweller.page);

  const getAllDwellers = () => {
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

  const loadMore = () => {
    if (dwellers.length >= PAGES && !loading) {
      dispatch(listRequest(page));
    }
  };

  useEffect(() => {
    getAllDwellers();
  }, []);

  return (
    <>
      {openForm && (
        <FormDwellerComponent
          close={() => setOpenForm(false)}
          onSubmit={onSave}
          initialData={edit}
        />
      )}
      <Container>
        <ContainerScrollComponent>
          <ContainerTitleComponent title="Moradores" action={openSaveForm} />
          <FiltersDwellersComponent />
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
            {dwellers &&
              dwellers.map((card) => (
                <CardBodyComponent
                  key={card.id}
                  title={card.name}
                  subTitle={`Apartamento: ${
                    card.apartment ? card.apartment.identifier : ' - '
                  }`}
                  subSubTitle={`${card.responsible ? 'Responsável' : ''}`}
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

export default DwellersPage;
