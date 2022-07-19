import React, { useState, useEffect } from 'react';
import { Edit2, Trash, MoreSquare, FolderCloud } from 'iconsax-react';
import { Container, Button, Text } from '@develop-fapp/ui-kit-fapp';
import CreateModal from '@components/Federation/Competition/Modal/create';
import EditModal from '@components/Federation/Competition/Modal/edit';
import DeleteModal from '@components/Federation/Competition/Modal/delete';
import CategoryModal from '@components/Federation/Competition/Modal/Category/index';
import axios from 'axios';
import Template from '../../components/Template/Federation';
import { DataFromBackend } from '~/shared/utils/utils';

const Competitions = () => {
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  const [selectedCompetition, setSelectedCompetition] = useState({
    nome: '',
    data_inicio: '',
    data_fim: '',
    data_prazo_inscricoes: '',
  });

  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    updatCompetitions();
  }, []);

  const updatCompetitions = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/competicao`, {})
      .then(response => setCompetitions(response.data));
  };

  const handleDownload = id => {
    axios({
      url: `${process.env.NEXT_PUBLIC_URL}/competicao/${id}/xlsx`,
      method: 'GET',
      responseType: 'blob',
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.xls');
      document.body.appendChild(link);
      link.click();
    });
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
            Competições
          </Text>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Cadastrar novo competição
          </Button>
        </Container>

        {competitions.length === 0 ? (
          <Text variant="h4" style={{ textAlign: 'center', marginTop: '64px' }}>
            Você ainda não cadastrou nenhuma competição
          </Text>
        ) : (
          <>
            {competitions.map(competicao => {
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
                  key={competicao.nome}
                >
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Nome
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {competicao.nome}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Data início
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {DataFromBackend(competicao.dataInicio)}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Data fim
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {DataFromBackend(competicao.dataFim)}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Data prazo inscrições
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {DataFromBackend(competicao.dataPrazoInscricoes)}
                    </Text>
                  </Container>
                  <Container justifyContent="center">
                    <MoreSquare
                      style={{ marginRight: '12px' }}
                      onClick={() => {
                        setSelectedCompetition(competicao);
                        setOpenCategoryModal(true);
                      }}
                    />
                    <Edit2
                      style={{ marginRight: '12px' }}
                      onClick={() => {
                        setSelectedCompetition(competicao);
                        setOpenEditModal(true);
                      }}
                    />
                    <Trash
                      style={{ marginRight: '12px' }}
                      onClick={() => {
                        setSelectedCompetition(competicao);
                        setOpenDeleteModal(true);
                      }}
                    />
                    <FolderCloud
                      onClick={() => handleDownload(competicao.id)}
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
        updatCompetitions={updatCompetitions}
      />
      {openEditModal && (
        <EditModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          updatCompetitions={updatCompetitions}
          selectedCompetition={selectedCompetition}
          setSelectedCompetition={setSelectedCompetition}
        />
      )}
      <DeleteModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        updatCompetitions={updatCompetitions}
        selectedCompetition={selectedCompetition}
      />

      {openCategoryModal && (
        <CategoryModal
          open={openCategoryModal}
          onClose={() => setOpenCategoryModal(false)}
          updatCompetitions={updatCompetitions}
          selectedCompetition={selectedCompetition}
        />
      )}
    </Template>
  );
};

export default Competitions;
