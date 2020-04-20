import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroller';
import {
  listRequest,
  saveRequest,
  deleteRequest,
} from '../../store/modules/block/actions';

import PAGES from '../../constants/pagesPagination';

import FormBlockComponent from '../../components/formBlock/FormBlockComponent';
import ContainerScrollComponent from '../../components/containerScroll/ContainerScrollComponent';
import ContainerTitleComponent from '../../components/containerTitle/ContainerTitleComponent';
import CardBodyComponent from '../../components/cardBody/CardBodyComponent';

import { Container } from './styles';

function ApartmentPage() {
  const [openForm, setOpenForm] = useState(false);
  const [edit, setEdit] = useState(null);

  const dispatch = useDispatch();
  const blocks = useSelector((state) => state.block.blocks);
  const loading = useSelector((state) => state.block.loading);
  const hasMore = useSelector((state) => state.block.hasMore);
  const page = useSelector((state) => state.block.page);

  const getAllBlocks = () => {
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
    if (blocks.length >= PAGES && !loading) {
      dispatch(listRequest(page));
    }
  };

  useEffect(() => {
    getAllBlocks();
  }, []);

  return (
    <>
      {openForm && (
        <FormBlockComponent
          close={() => setOpenForm(false)}
          onSubmit={onSave}
          initialData={edit}
        />
      )}
      <Container>
        <ContainerScrollComponent>
          <ContainerTitleComponent title="Blocos" action={openSaveForm} />
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
            {blocks.length
              ? blocks.map((card) => (
                  <CardBodyComponent
                    key={card.id}
                    title={card.identifier}
                    actionEdit={openEditForm}
                    actionDelete={onDelete}
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
