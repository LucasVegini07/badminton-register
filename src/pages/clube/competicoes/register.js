import {
  Container,
  Grid,
  Text,
  Button,
  ComboBoxSingleSelect,
  Checkbox,
  Modal,
} from '@develop-fapp/ui-kit-fapp';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Template from '../../../components/Template/Club';

import { useGeneralContext } from '~/context/GeneralContext';

const Registration = () => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const [allAtlhetes, setAllAthletes] = useState([]);
  const [athletesComboBox, setAthletesComboBox] = useState([]);
  const [athleteComboBox, setAthleteComboBox] = useState({});

  const [allAtlhetesClub, setAllAthletesClub] = useState([]);
  const [athletesClubComboBox, setAthletesClubComboBox] = useState([]);
  const [ahtleteClubComboBox, setAthleteClubComboBox] = useState({});

  const [categoriesComboBox, setCategoriesComboBox] = useState([]);
  const [category, setCategory] = useState({});
  const [isDupla, setIsDupla] = useState(false);

  const [registredAhtletes, setRegistredAhtletes] = useState([]);

  const [confirmDecision, setConfirmDecision] = useState(true);

  const [openDecision, setOpenDecision] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/atletas`)
      .then(response => setAllAthletes(response.data));

    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/atletas/${localStorage.getItem(
          'clubeId',
        )}`,
      )
      .then(response => setAllAthletesClub(response.data));

    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/competicao/${localStorage.getItem(
          'competicaoId',
        )}/categoria`,
      )
      .then(response => {
        // eslint-disable-next-line no-shadow
        const categoriesComboBox = [];

        if (response.data.length > 0) {
          setCategory({
            value: response.data[0].id,
            label: `${response.data[0].nome} - ${response.data[0].dupla}`,
          });

          response.data.map(categorie =>
            categoriesComboBox.push({
              value: categorie.id,
              label: `${categorie.nome} - ${categorie.dupla}`,
            }),
          );

          setCategoriesComboBox(categoriesComboBox);
        }
      });
  }, []);

  const getRegistredAhtletes = async () => {
    if (category.value) {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_URL}/competicoes/${localStorage.getItem(
            'competicaoId',
          )}/categoria/${category.value}/atletas`,
          {},
        )
        .then(async response => {
          const newAtlhetes = response.data;

          let i = 0;

          // eslint-disable-next-line no-restricted-syntax
          for await (const athleteAux of response.data) {
            if (athleteAux?.categoriasCompeticoesAtletas?.atletaId2) {
              await axios
                .get(
                  `${process.env.NEXT_PUBLIC_URL}/atletas/id/${athleteAux?.categoriasCompeticoesAtletas?.atletaId2}`,
                  {},
                )
                // eslint-disable-next-line no-loop-func
                .then(response2 => {
                  if (newAtlhetes[i] && response2.data.cpf) {
                    newAtlhetes[i].atlhete2nome = response2.data.nome;
                    newAtlhetes[i].atlhete2cpf = response2.data.cpf;
                  }
                });
            }
            i += 1;
          }

          setRegistredAhtletes(newAtlhetes);
        });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await getRegistredAhtletes();

    if (category.label) {
      const newAtlhetesClubAux = [];
      const newAtlhetesAux = [];

      const typeAux = category.label.split(' ');

      const type = `${typeAux[typeAux.length - 2]} ${typeAux[typeAux.length - 1]}`;

      if (type === 'Individual masculino' || type === 'Dupla masculina') {
        allAtlhetesClub.map(
          athleteAux =>
            athleteAux.sexo === 'M' &&
            newAtlhetesClubAux.push({
              value: athleteAux.id,
              label: athleteAux.nome,
            }),
        );

        allAtlhetes.map(
          athleteAux =>
            athleteAux.sexo === 'M' &&
            newAtlhetesAux.push({
              value: athleteAux.id,
              label: athleteAux.nome,
            }),
        );
      } else if (type === 'Individual feminino' || type === 'Dupla feminina') {
        allAtlhetesClub.map(
          athleteAux =>
            athleteAux.sexo === 'F' &&
            newAtlhetesClubAux.push({
              value: athleteAux.id,
              label: athleteAux.nome,
            }),
        );

        allAtlhetes.map(
          athleteAux =>
            athleteAux.sexo === 'F' &&
            newAtlhetesAux.push({
              value: athleteAux.id,
              label: athleteAux.nome,
            }),
        );
      } else {
        allAtlhetesClub.map(athleteAux =>
          newAtlhetesClubAux.push({
            value: athleteAux.id,
            label: athleteAux.nome,
          }),
        );

        allAtlhetes.map(athleteAux =>
          newAtlhetesAux.push({ value: athleteAux.id, label: athleteAux.nome }),
        );
      }

      if (type === 'Individual masculino' || type === 'Individual feminino') {
        setIsDupla(false);
      } else {
        setIsDupla(true);
      }

      setAthletesComboBox(newAtlhetesAux);
      setAthleteComboBox(newAtlhetesAux[0]);
      setAthletesClubComboBox(newAtlhetesClubAux);
      setAthleteClubComboBox(newAtlhetesClubAux[0]);
    }
  }, [category]);

  const handleRegister = async () => {
    let atleta = {};

    if (isDupla)
      atleta = {
        idCategoria: category.value,
        idAtleta: ahtleteClubComboBox.value,
        idAtleta2: athleteComboBox.value,
      };
    else
      atleta = {
        idCategoria: category.value,
        idAtleta: ahtleteClubComboBox.value,
      };

    if (atleta.idAtleta === atleta.idAtleta2) {
      return setErrorMessage('Atleta 1 não pode ser igual a dupla');
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/competicoes/${localStorage.getItem(
          'competicaoId',
        )}/inscrever`,
        atleta,
        {
          headers: { 'Access-Control-Allow-Origin': '*' },
        },
      );
      await getRegistredAhtletes();
      setOpenDecision(false);
      return setSuccessMessage('Atleta adicionado com sucesso');
    } catch (e) {
      return setErrorMessage('O serviço não conseguiu se conectar na api');
    }
  };

  const handleRegisterAthleta = () => {
    if (confirmDecision) {
      return setOpenDecision(true);
    }

    return handleRegister();
  };

  return (
    <Template>
      <Grid xs="1fr 2fr" spacing="16px">
        <Container
          flexDirection="column"
          style={{
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <Text variant="h8" weight="bold" style={{ marginBottom: '16px' }}>
            Cadastrar atleta
          </Text>
          <ComboBoxSingleSelect
            items={categoriesComboBox}
            placeholder="Categoria"
            style={{ marginBottom: '16px' }}
            value={category}
            onChange={setCategory}
          />
          {athletesClubComboBox.length ? (
            <ComboBoxSingleSelect
              items={athletesClubComboBox}
              placeholder="Atleta"
              style={{ marginBottom: '16px' }}
              value={ahtleteClubComboBox}
              onChange={setAthleteClubComboBox}
            />
          ) : (
            <Text style={{ marginBottom: '16px' }}>
              Você não tem nenhum atleta que se encaixe nessa categoria
            </Text>
          )}

          {isDupla && athletesComboBox.length > 0 && (
            <ComboBoxSingleSelect
              items={athletesComboBox}
              placeholder="Dupla"
              value={athleteComboBox}
              onChange={setAthleteComboBox}
            />
          )}

          <Container alignItems="center">
            <Checkbox
              type="checkbox"
              onChange={e => setConfirmDecision(e.target.checked)}
              checked={confirmDecision}
            />
            <Text> Confirmar decisão </Text>
          </Container>

          <Button variant="contained" onClick={handleRegisterAthleta}>
            Registrar atleta
          </Button>
        </Container>
        <Container
          flexDirection="column"
          style={{
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <Text variant="h8" weight="bold" style={{ marginBottom: '16px' }}>
            Atletas cadastrados na categoria : {category.label}
          </Text>

          {registredAhtletes.map(registredAhtlete => {
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
                key={registredAhtlete.id}
              >
                <Container flexDirection="column">
                  <Text
                    weight="bold"
                    style={{ textAlign: 'center', marginBottom: '8px' }}
                  >
                    Nome
                  </Text>
                  <Text variant="h6" style={{ textAlign: 'center' }}>
                    {registredAhtlete.nome}
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
                    {registredAhtlete.cpf}
                  </Text>
                </Container>
                {registredAhtlete.atlhete2nome && (
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Dupla
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {registredAhtlete.atlhete2nome}
                    </Text>
                  </Container>
                )}
                {registredAhtlete.atlhete2cpf && (
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      CPF Dupla
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {registredAhtlete.atlhete2cpf}
                    </Text>
                  </Container>
                )}
              </Container>
            );
          })}
        </Container>
      </Grid>
      <Modal
        onClose={() => setOpenDecision(false)}
        open={openDecision}
        modalContent={
          <Container
            flexDirection="column"
            style={{ padding: '16px', width: '400px' }}
          >
            <Text weight="bold" style={{ marginBottom: '16px' }}>
              Registrar atleta(s)
            </Text>
            <Text variant="h7" style={{ marginBottom: '16px' }}>
              Ao confirmar, você estára cadastrando{' '}
              <b>
                {' '}
                {isDupla
                  ? `${ahtleteClubComboBox.label} e ${athleteComboBox.label}`
                  : `${ahtleteClubComboBox.label}`}
              </b>{' '}
              na categoria {category.label}
            </Text>
            <Container justifyContent="space-between">
              <Button variant="outlined" onClick={() => setOpenDecision(false)}>
                Não
              </Button>
              <Button variant="contained" onClick={handleRegister}>
                Sim
              </Button>
            </Container>
          </Container>
        }
      />
    </Template>
  );
};

export default Registration;
