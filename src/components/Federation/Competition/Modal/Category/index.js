import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Text,
  Modal,
  Grid,
} from '@develop-fapp/ui-kit-fapp';
import CreateModal from '@components/Federation/Competition/Modal/Category/create';
import DeleteModal from '@components/Federation/Competition/Modal/Category/delete';
import { Edit2, Trash } from 'iconsax-react';

import { useGeneralContext } from '~/context/GeneralContext';

const representantModal = ({ open, onClose, selectedCompetition }) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const [openCreate, setOpenCreate] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    updatCategories();
  }, []);

  const updatCategories = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/competicao/${selectedCompetition.id}/categoria`,
      )
      .then(response => setCategories(response.data));
  };

  const content = () => {
    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px', width: '60vh' }}
      >
        <Text weight="bold" style={{ marginBottom: '16px' }}>
          Categorias da competição: {selectedCompetition.nome}
        </Text>

        {categories.length === 0 ? (
          <Text
            variant="h6"
            style={{ textAlign: 'center', marginBottom: '16px' }}
          >
            Você ainda não cadastrou nenhum representante
          </Text>
        ) : (
          <>
            {categories.map(categoria => {
              return (
                <Container
                  container="fluid"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{
                    border: '2px solid black',
                    borderRadius: '8px',
                    padding: '8px',
                    marginBottom: '16px',
                  }}
                  key={categoria.id}
                >
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Categoria
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {categoria.nome}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Dupla
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {categoria.isDupla ? 'Sim' : 'Não'}
                    </Text>
                  </Container>
                  <Container justifyContent="center">
                    <Trash
                      onClick={() => {
                        setSelectedCategory(categoria);
                        setOpenDeleteModal(true);
                      }}
                    />
                  </Container>
                </Container>
              );
            })}
          </>
        )}

        <Grid xs="1fr" spacing="16px">
          <Button variant="contained" onClick={() => setOpenCreate(true)}>
            Cadastrar nova categoria
          </Button>
        </Grid>

        {openCreate && (
          <CreateModal
            open={openCreate}
            onClose={() => setOpenCreate(false)}
            selectedCompetition={selectedCompetition}
            updatCategories={updatCategories}
          />
        )}
        <DeleteModal
          open={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
          selectedCompetition={selectedCompetition}
          updatCategories={updatCategories}
          selectedCategory={selectedCategory}
        />
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default representantModal;
