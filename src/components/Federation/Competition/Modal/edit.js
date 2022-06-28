import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Text,
  Modal,
  Input,
  Divider,
  Grid,
} from '@develop-fapp/ui-kit-fapp';
import { useGeneralContext } from '~/context/GeneralContext';
import { DataForBackend, DataFromBackend } from '~/shared/utils/utils';

const createModal = ({
  open,
  onClose,
  selectedCompetition,
  updatCompetitions,
  setSelectedCompetition,
}) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  useEffect(() => {
    if (selectedCompetition.dataInicio) {
      setSelectedCompetition({
        ...selectedCompetition,
        dataInicio: DataFromBackend(selectedCompetition.dataInicio),
        dataFim: DataFromBackend(selectedCompetition.dataFim),
        dataPrazoInscricoes: DataFromBackend(
          selectedCompetition.dataPrazoInscricoes,
        ),
      });
    }
  }, []);

  const content = () => {
    const create = async () => {
      if (!selectedCompetition.nome) {
        return setErrorMessage('Campo nome inválido');
      }
      if (!selectedCompetition.dataInicio) {
        return setErrorMessage('Campo descrição inválido');
      }
      if (!selectedCompetition.dataFim) {
        return setErrorMessage('Campo idade mínima inválido');
      }
      if (!selectedCompetition.dataPrazoInscricoes) {
        return setErrorMessage('Campo idade máxima inválido');
      }

      const newSelectedCompetition = { ...selectedCompetition };

      newSelectedCompetition.dataFim = DataForBackend(
        newSelectedCompetition.dataFim,
      );
      newSelectedCompetition.dataInicio = DataForBackend(
        newSelectedCompetition.dataInicio,
      );
      newSelectedCompetition.dataPrazoInscricoes = DataForBackend(
        newSelectedCompetition.dataPrazoInscricoes,
      );

      try {
        await axios.put(
          `${process.env.NEXT_PUBLIC_URL}/competicao/${newSelectedCompetition.id}`,
          newSelectedCompetition,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );

        updatCompetitions();
        onClose();
        setSelectedCompetition({
          nome: '',
          dataInicio: '',
          dataFim: '',
          dataPrazoInscricoes: '',
        });
        return setSuccessMessage('Categoria cadastrada com sucesso');
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px', width: '50vh' }}
      >
        <Text weight="bold">Adicione uma nova categoria</Text>
        <Divider style={{ margin: '16px 0px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Nome"
          value={selectedCompetition.nome}
          onChange={e =>
            setSelectedCompetition({
              ...selectedCompetition,
              nome: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Data do início"
          value={selectedCompetition.dataInicio}
          onChange={e =>
            setSelectedCompetition({
              ...selectedCompetition,
              dataInicio: e.target.value,
            })
          }
          mask="data"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Data do fim"
          value={selectedCompetition.dataFim}
          onChange={e =>
            setSelectedCompetition({
              ...selectedCompetition,
              dataFim: e.target.value,
            })
          }
          mask="data"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Data prazo de inscrições"
          value={selectedCompetition.dataPrazoInscricoes}
          onChange={e =>
            setSelectedCompetition({
              ...selectedCompetition,
              dataPrazoInscricoes: e.target.value,
            })
          }
          mask="data"
        />
        <div style={{ marginBottom: '16px' }} />
        <Grid xs="1fr 1fr" spacing="16px">
          <Button variant="outlined" color="error" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={create}>
            Salvar
          </Button>
        </Grid>
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default createModal;
