import React, { useState, useEffect } from 'react';
import { Profile2User, Add } from 'iconsax-react';
import { Container, Text } from '@develop-fapp/ui-kit-fapp';
import axios from 'axios';
import { useRouter } from 'next/router';
import CategoryModal from '../../../components/Club/Competition/category';
import Template from '../../../components/Template/Club';
import { DataFromBackend } from '~/shared/utils/utils';
import AddAthelteModal from '../../../components/Club/Competition/category/addAtlhete';

const Competitions = () => {
  const router = useRouter();
  const [openRegisterAthlete, setOpenRegisterAthlete] = useState(false);

  const [selectedCompetition, setSelectedCompetition] = useState({
    nome: '',
    data_inicio: '',
    data_fim: '',
    data_prazo_inscricoes: '',
  });

  const [competitions, setCompetitions] = useState([]);
  const [openAddAthlete, setOpenAddAthlete] = useState(false);

  useEffect(() => {
    updatCompetitions();
  }, []);

  const updatCompetitions = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/competicao`, {})
      .then(response => setCompetitions(response.data));
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
                    <Add
                      style={{ marginRight: '12px' }}
                      onClick={() => {
                        localStorage.setItem('competicaoId', competicao.id);
                        router.push('/clube/competicoes/register');
                      }}
                    />
                  </Container>
                </Container>
              );
            })}
          </>
        )}
      </Container>

      {openRegisterAthlete && (
        <CategoryModal
          open={openRegisterAthlete}
          onClose={() => setOpenRegisterAthlete(false)}
          updatCompetitions={updatCompetitions}
          selectedCompetition={selectedCompetition}
        />
      )}

      {openAddAthlete && (
        <AddAthelteModal
          open={openAddAthlete}
          selectedCompetition={selectedCompetition}
          onClose={() => setOpenAddAthlete(false)}
        />
      )}
    </Template>
  );
};

export default Competitions;
