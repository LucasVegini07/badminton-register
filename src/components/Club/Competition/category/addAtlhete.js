import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Text,
  Modal,
  Grid,
  ComboBoxSingleSelect,
  InputButton,
} from '@develop-fapp/ui-kit-fapp';

import { useGeneralContext } from '~/context/GeneralContext';

const addAthelteModal = ({ open, onClose, selectedCompetition }) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();
  const [athlete, setAthlete] = useState({});
  const [athlete2, setAthlete2] = useState({});
  const [cpfAtlhete2, setCpfAtlhete2] = useState('');
  const [category, setCategory] = useState({});
  const [athletes, setAthletes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allAthletes, setAllAthletes] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [isDupla, setIsDupla] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    getAthletes();
    getCategories();
  }, []);

  useEffect(() => {
    if (allCategories.length > 0) {
      setCpfAtlhete2('');

      const categoria = allCategories.find(
        categoryAux => categoryAux.id === category.value,
      );

      const newAtlhetes = [];

      if (
        categoria.dupla === 'Individual masculino' ||
        categoria.dupla === 'Dupla masculina'
      ) {
        allAthletes.map(
          athleteAux =>
            athleteAux.sexo === 'M' &&
            newAtlhetes.push({ value: athleteAux.id, label: athleteAux.nome }),
        );
      } else if (
        categoria.dupla === 'Individual feminino' ||
        categoria.dupla === 'Dupla feminina'
      ) {
        allAthletes.map(
          athleteAux =>
            athleteAux.sexo === 'F' &&
            newAtlhetes.push({ value: athleteAux.id, label: athleteAux.nome }),
        );

        setAthlete({ value: newAtlhetes[0].id, label: newAtlhetes[0].nome });
      } else {
        allAthletes.map(athleteAux =>
          newAtlhetes.push({ value: athleteAux.id, label: athleteAux.nome }),
        );
      }

      if (
        categoria.dupla === 'Individual masculino' ||
        categoria.dupla === 'Individual feminino'
      ) {
        setIsDupla(false);
        setDisabledButton(false);
      } else {
        setIsDupla(true);
        setDisabledButton(true);
      }
      setAthletes(newAtlhetes);
      setAthlete(newAtlhetes[0]);
    }
  }, [category]);

  const getCategories = () => {
    if (selectedCompetition.id)
      axios
        .get(
          `${process.env.NEXT_PUBLIC_URL}/competicao/${selectedCompetition.id}/categoria`,
        )
        .then(response => {
          const categoriesAux = [];

          setAllCategories(response.data);

          if (response.data.length > 0) {
            setCategory({
              value: response.data[0].id,
              label: response.data[0].nome,
            });

            response.data.map(categorie =>
              categoriesAux.push({
                value: categorie.id,
                label: categorie.nome,
              }),
            );

            setCategories(categoriesAux);
          }
        });
  };

  const getAthletes = () => {
    if (localStorage.getItem('clubeId')) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_URL}/atletas/${localStorage.getItem(
            'clubeId',
          )}`,
          {},
        )
        .then(response => {
          setAllAthletes(response.data);

          if (response.data.length > 0) {
            setAthlete({
              value: response.data[0].id,
              label: response.data[0].nome,
            });

            const athletesAux = [];

            response.data.map(categorie =>
              athletesAux.push({ value: categorie.id, label: categorie.nome }),
            );

            setAthletes(athletesAux);
          }
        });
    }
  };

  const content = () => {
    const AddAthlete = async () => {
      let atleta = {};

      if (isDupla)
        atleta = {
          idCategoria: category.value,
          idAtleta: athlete.value,
          idAtleta2: athlete2.id,
        };
      else
        atleta = {
          idCategoria: category.value,
          idAtleta: athlete.value,
        };

      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/competicoes/${selectedCompetition.id}/inscrever`,
          atleta,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );

        onClose();

        return setSuccessMessage('Atleta adicionado com sucesso');
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
    };

    const validaCPF = () => {
      try {
        axios
          .get(`${process.env.NEXT_PUBLIC_URL}/atletas/cpf/${cpfAtlhete2}`)
          // eslint-disable-next-line consistent-return
          .then(response => {
            if (!response.data) {
              return setErrorMessage(
                'Atleta não encontrado, verifique o CPF do atleta 2',
              );
            }

            setAthlete2(response.data);

            const atleta = allAthletes.find(
              atheleteAux => atheleteAux.id === athlete.value,
            );

            const categoria = allCategories.find(
              categoryAux => categoryAux.id === category.value,
            );

            if (categoria.dupla === 'Dupla mista')
              return setSuccessMessage('Atleta adicionado com sucesso');

            if (atleta.cpf === response.data.cpf) {
              return setErrorMessage(
                'Atleta 2 não pode ser o mesmo que o que o atleta 1',
              );
            }

            if (atleta.sexo === response.data.sexo) {
              setSuccessMessage('Atleta validado com sucesso ');
              setDisabledButton(false);
            } else {
              setErrorMessage(
                'O sexo do atleta informado não é compatível com a competição',
              );
            }
          });
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
      return '';
    };

    return (
      <Container flexDirection="column" style={{ padding: '20px' }}>
        <Text style={{ marginBottom: '16px' }}>
          Adicione um atleta na competição {selectedCompetition.nome}
        </Text>

        <ComboBoxSingleSelect
          items={categories}
          placeholder="Categoria"
          style={{ marginBottom: '16px' }}
          value={category}
          onChange={setCategory}
        />

        <ComboBoxSingleSelect
          items={athletes}
          placeholder="Atleta"
          style={{ marginBottom: '16px' }}
          value={athlete}
          onChange={setAthlete}
        />

        {isDupla && (
          <InputButton
            input={{
              placeholder: 'Atleta 2 - CPF',
              value: cpfAtlhete2,
              onChange: e => setCpfAtlhete2(e.target.value),
              mask: 'cpf',
            }}
            button={{
              color: 'primary',
              variant: 'contained',
              children: 'Validar CPF',
              onClick: () => validaCPF(),
            }}
          />
        )}

        <Container justifyContent="center">
          <img
            src="/athlete.png"
            alt="athlete.png"
            style={{ width: '200px', padding: '20px' }}
          />
        </Container>
        <Grid xs="1fr 1fr" spacing="16px">
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            disabled={disabledButton}
            variant="contained"
            onClick={AddAthlete}
          >
            Adicionar
          </Button>
        </Grid>
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default addAthelteModal;
