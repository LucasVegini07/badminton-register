import React, { useState, useEffect } from 'react';
import { Container, Button, Text } from '@develop-fapp/ui-kit-fapp';
import { Edit2, Trash } from 'iconsax-react';
import CreateModal from '@components/Federation/Club/Modal/create';
import EditModal from '@components/Federation/Club/Modal/edit';
import DeleteModal from '@components/Federation/Club/Modal/delete';

import axios from 'axios';
import Template from '../../components/Template/Federation';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [clubes, setClubes] = useState([]);

  const [selectedClub, setSelectedClub] = useState({});

  useEffect(() => {
    updatClubs();
  }, []);

  const updatClubs = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/clubes`, {})
      .then(response => setClubes(response.data));
  };

  return (
    <Template>
      <Container container="fluid" flexDirection="column">
        <Container
          container="fluid"
          justifyContent="space-between"
          style={{ marginBottom: '32px' }}
        >
          <Text variant="h4" weight="bold">
            Clubes
          </Text>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Cadastrar novo clube
          </Button>
        </Container>

        {clubes.length === 0 ? (
          <Text variant="h4" style={{ textAlign: 'center', marginTop: '64px' }}>
            Você ainda não cadastrou nenhum clube
          </Text>
        ) : (
          <>
            {clubes.map(clube => {
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
                  key={clube.cnpj}
                >
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Nome
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {clube.nome}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Sigla
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {clube.sigla}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Cidade
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {clube.cidade}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      CNPJ
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {clube.cnpj}
                    </Text>
                  </Container>
                  <Container justifyContent="center">
                    <Edit2
                      style={{ marginRight: '12px' }}
                      onClick={() => {
                        setSelectedClub(clube);
                        setOpenEditModal(true);
                      }}
                    />
                    <Trash
                      onClick={() => {
                        setSelectedClub(clube);
                        setOpenDeleteModal(true);
                      }}
                    />
                  </Container>
                </Container>
              );
            })}
          </>
        )}
      </Container>

      <CreateModal
        open={open}
        onClose={() => setOpen(false)}
        updatClubs={updatClubs}
      />

      <EditModal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        updatClubs={updatClubs}
        selectedClub={selectedClub}
        setSelectedClub={setSelectedClub}
      />

      <DeleteModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        updatClubs={updatClubs}
        selectedClub={selectedClub}
      />
    </Template>
  );
};

export default HomePage;
