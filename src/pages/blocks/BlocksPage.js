import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaEdit, FaRegPlusSquare } from 'react-icons/fa';

import { getBlocks } from '../../services/blocksService';
import COLORS from '../../constants/colors';
import { Container, Content, Card } from './styles';

function BlocksPage() {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllBlocks = async () => {
    const data = await getBlocks();
    setLoading(false);
    setBlocks(data);
  };

  useEffect(() => {
    getAllBlocks();
  }, []);

  return (
    <Container>
      <Content>
        <div>
          <strong>Blocos</strong>
          <button type="button">
            <FaRegPlusSquare color={COLORS.PRIMARY} size={20} />
          </button>
        </div>
        <ul>
          {loading ? (
            <h3> carregando ... </h3>
          ) : (
            blocks.map((card) => {
              return (
                <Card key={card.id}>
                  <p>{card.identifier}</p>
                  <div>
                    <button type="button">
                      <FaEdit color={COLORS.SECONDARY_DARK} size={20} />
                    </button>
                    <button type="button">
                      <FaTrashAlt color={COLORS.DANGER} size={20} />
                    </button>
                  </div>
                </Card>
              );
            })
          )}
        </ul>
      </Content>
    </Container>
  );
}

export default BlocksPage;
