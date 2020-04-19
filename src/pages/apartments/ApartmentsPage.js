import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaEdit, FaRegPlusSquare } from 'react-icons/fa';

import {
  getBlocks,
  saveBlock,
  deleteBlock,
} from '../../services/blocksService';
import COLORS from '../../constants/colors';

import FormBlockComponent from '../../components/formBlock/FormBlockComponent';
import { Container, Content, Card } from './styles';

function ApartmentsPage() {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  const [edit, setEdit] = useState(null);

  const getAllBlocks = async () => {
    const data = await getBlocks();
    setLoading(false);
    setBlocks(data);
  };

  const onSave = async (data) => {
    setLoading(false);
    await saveBlock(data);
    await getAllBlocks();
  };

  const onDelete = async (id) => {
    await deleteBlock(id);
    await getAllBlocks();
  };

  const openEditForm = (data) => {
    setEdit(data);
    setOpenForm(true);
  };

  const openSaveForm = () => {
    setEdit(null);
    setOpenForm(true);
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
        <Content>
          <div>
            <strong>Apartamentos</strong>
            <button type="button" onClick={openSaveForm}>
              <FaRegPlusSquare color={COLORS.PRIMARY} size={20} />
            </button>
          </div>
          <ul>
            {loading ? (
              <h3> carregando ... </h3>
            ) : (
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
              ))
            )}
          </ul>
        </Content>
      </Container>
    </>
  );
}

export default ApartmentsPage;
