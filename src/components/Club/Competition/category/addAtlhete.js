import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Text,
  Modal,
  Grid,
  ComboBoxSingleSelect,
} from '@develop-fapp/ui-kit-fapp';

import { useRouter } from 'next/router';
import { useGeneralContext } from '~/context/GeneralContext';
import { DataFromBackend } from '~/shared/utils/utils';

const addAthelteModal = ({
  open,
  onClose,
  selectedCompetition,
  selectedCategory,
}) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();
  const [options, setOptions] = useState([]);
  const [athlete, setAthlete] = useState({});
  const [athletes, setAthletes] = useState([]);
  const router = useRouter();
  const [categoryInformation, setCategoryInformation] = useState({});

  useEffect(() => {
    getAthletes();
  }, [router.query.id]);

  const getAthletes = () => {
    if (router.query.id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/atletas/${router.query.id}`, {})
        .then(response => {
          setAthletes(response.data);

          if (response.data.length > 0) {
            setAthlete({
              value: response.data[0].id,
              label: response.data[0].nome,
            });

            response.data.map(categorie =>
              options.push({ value: categorie.id, label: categorie.nome }),
            );
          }
          setOptions(options);
        });
    }
  };

  const content = () => {
    const AddAthlete = async () => {
      const atleta = {
        idCategoria: selectedCategory.id,
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

    return (
      <Container flexDirection="column" style={{ padding: '20px' }}>
        <Text weight="bold" style={{ marginBottom: '16px' }}>
          Escolha um atleta
        </Text>

        <ComboBoxSingleSelect
          items={options}
          onChange={setAthlete}
          value={athlete}
          placeholder="Atleta"
        />
        <div style={{ marginBottom: '16px' }} />

        {athletes && athlete.value && (
          <>
            <Text variant="h7" style={{ marginBottom: '16px' }}>
              <Text variant="h7" weight="bold">
                Nome:
              </Text>{' '}
              {athletes.find(atleta => atleta.id === athlete.value).nome}
            </Text>
            <Text variant="h7" style={{ marginBottom: '16px' }}>
              <Text variant="h7" weight="bold">
                CPF:
              </Text>{' '}
              {athletes.find(atleta => atleta.id === athlete.value).cpf}
            </Text>
            <Text variant="h7" style={{ marginBottom: '16px' }}>
              <Text variant="h7" weight="bold">
                Identificação:
              </Text>{' '}
              {
                athletes.find(atleta => atleta.id === athlete.value)
                  .identificacao
              }
            </Text>
            <Text variant="h7" style={{ marginBottom: '16px' }}>
              <Text variant="h7" weight="bold">
                Data de nascimento:
              </Text>{' '}
              {DataFromBackend(
                athletes.find(atleta => atleta.id === athlete.value)
                  .dataNascimento,
              )}
            </Text>
          </>
        )}
        {/* <Text variant="h7" style={{ marginBottom: '16px' }}>
          <Text variant="h7" weight="bold">
            CPF
          </Text>{' '}
          {categoryInformation.idadeMin}{' '}
        </Text>
        <Text variant="h7" style={{ marginBottom: '16px' }}>
          <Text variant="h7" weight="bold">
            Sexo
          </Text>{' '}
          {categoryInformation.idadeMax}{' '}
        </Text>
        <Text variant="h7" style={{ marginBottom: '16px' }}>
          <Text variant="h7" weight="bold">
            Dupla:{' '}
          </Text>{' '}
          {categoryInformation.isDupla ? 'Sim' : 'Não'}{' '}
        </Text> */}

        <Grid xs="1fr 1fr" spacing="16px">
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={AddAthlete}>
            Adicionar
          </Button>
        </Grid>
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default addAthelteModal;
