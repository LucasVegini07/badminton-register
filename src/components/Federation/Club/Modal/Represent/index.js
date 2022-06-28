import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Text,
  Modal,
  Grid,
} from '@develop-fapp/ui-kit-fapp';
import CreateModal from '@components/Federation/Club/Modal/Represent/create';
import EditModal from '@components/Federation/Club/Modal/Represent/edit';
import DeleteModal from '@components/Federation/Club/Modal/Represent/delete';
import { Edit2, Trash } from 'iconsax-react';

import { useGeneralContext } from '~/context/GeneralContext';

const representantModal = ({ open, onClose, selectedClub }) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const [openCreate, setOpenCreate] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [representantes, setRepresentantes] = useState([]);
  const [selectedRepresentant, setSelectedRepresentant] = useState([]);

  useEffect(() => {
    updatRepresentants();
  }, []);

  const updatRepresentants = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/usuario/clube/${selectedClub.id}`)
      .then(response => setRepresentantes(response.data));
  };

  const content = () => {
    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px', width: '60vh' }}
      >
        <Text weight="bold" style={{ marginBottom: '16px' }}>
          Representantes do(a) {selectedClub.nome}
        </Text>

        {representantes.length === 0 ? (
          <Text
            variant="h6"
            style={{ textAlign: 'center', marginBottom: '16px' }}
          >
            Você ainda não cadastrou nenhum representante
          </Text>
        ) : (
          <>
            {representantes.map(representante => {
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
                  key={representante.id}
                >
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Usuário
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {representante.username}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Senha
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {representante.senha}
                    </Text>
                  </Container>
                  <Container justifyContent="center">
                    <Edit2
                      style={{ marginRight: '12px' }}
                      onClick={() => {
                        setSelectedRepresentant(representante);
                        setOpenEditModal(true);
                      }}
                    />
                    <Trash
                      onClick={() => {
                        setSelectedRepresentant(representante);
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
            Cadastrar novo representante
          </Button>
        </Grid>

        <CreateModal
          open={openCreate}
          onClose={() => setOpenCreate(false)}
          selectedClub={selectedClub}
          updatRepresentants={updatRepresentants}
        />

        <DeleteModal
          open={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
          selectedRepresentant={selectedRepresentant}
          updatRepresentants={updatRepresentants}
          selectedClub={selectedClub}
        />

        <EditModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          selectedRepresentant={selectedRepresentant}
          updatRepresentants={updatRepresentants}
          setSelectedRepresentant={setSelectedRepresentant}
          selectedClub={selectedClub}
        />
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default representantModal;
