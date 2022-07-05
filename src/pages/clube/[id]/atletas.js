import React, { useState, useEffect } from 'react';
import { Container, Button, Text } from '@develop-fapp/ui-kit-fapp';
import { Edit2, Trash } from 'iconsax-react';
import CreateModal from '@components/Club/Atleta/Modal/create';
import EditModal from '@components/Club/Atleta/Modal/edit';
import DeleteModal from '@components/Club/Atleta/Modal/delete';
import { useRouter } from 'next/router';
import axios from 'axios';
import Template from '@components/Template/Club';
import { DataFromBackend } from '~/shared/utils/utils';

const CategoryPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [athletes, setAthletes] = useState([]);
  const [selectedAthlete, setSelectedAthlete] = useState({});

  useEffect(() => {
    updatAtlhetes();
  }, [router.query.id]);

  const updatAtlhetes = () => {
    if (router.query.id)
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/atletas/${router.query.id}`)
        .then(response => setAthletes(response.data));
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
            Atleta
          </Text>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Cadastrar novo atleta
          </Button>
        </Container>

        {athletes.length === 0 ? (
          <Text variant="h4" style={{ textAlign: 'center', marginTop: '64px' }}>
            Você ainda não cadastrou nenhuma categoria
          </Text>
        ) : (
          <>
            {athletes.map(atleta => {
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
                  key={atleta.id}
                >
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Nome
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {atleta.nome}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      CPF
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {atleta.cpf}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Data de nascimento
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {DataFromBackend(atleta.dataNascimento)}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Sexo
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {atleta.sexo === 'M' ? 'Masculino' : 'Feminino'}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Identificação
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {atleta.identificacao}
                    </Text>
                  </Container>
                  <Container justifyContent="center">
                    <Edit2
                      style={{ marginRight: '12px' }}
                      onClick={() => {
                        setSelectedAthlete(atleta);
                        setOpenEditModal(true);
                      }}
                    />
                    <Trash
                      onClick={() => {
                        setSelectedAthlete(atleta);
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
        updatAtlhetes={updatAtlhetes}
      />
      {openEditModal && (
        <EditModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          updatAtlhetes={updatAtlhetes}
          selectedAthlete={selectedAthlete}
          setSelectedAthlete={setSelectedAthlete}
        />
      )}
      {openDeleteModal && (
        <DeleteModal
          open={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
          updatAtlhetes={updatAtlhetes}
          selectedAthlete={selectedAthlete}
        />
      )}
    </Template>
  );
};

export default CategoryPage;
