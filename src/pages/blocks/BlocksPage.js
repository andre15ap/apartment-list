import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaTrashAlt, FaEdit, FaRegPlusSquare } from 'react-icons/fa';

import InfiniteScroll from 'react-infinite-scroller';
import {
  listRequest,
  saveRequest,
  deleteRequest,
} from '../../store/modules/block/actions';

import COLORS from '../../constants/colors';

import FormBlockComponent from '../../components/formBlock/FormBlockComponent';
import { Container, Content, ContainerScroll, Card } from './styles';

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
    if (blocks.length >= 15 && !loading) {
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
        <ContainerScroll>
          <Content>
            <div>
              <strong>Blocos</strong>
              <button type="button" onClick={openSaveForm}>
                <FaRegPlusSquare color={COLORS.PRIMARY} size={20} />
              </button>
            </div>
          </Content>
          <InfiniteScroll
            pageStart={0}
            threshold={10}
            loadMore={loadMore}
            hasMore={hasMore}
            useWindow={false}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {blocks &&
              blocks.map((card) => (
                <Card key={card.id}>
                  <p>{card.identifier}</p>
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
        </ContainerScroll>
      </Container>
    </>
  );
}

export default ApartmentPage;
