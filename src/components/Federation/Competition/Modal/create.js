import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Text,
  Modal,
  Input,
  Divider,
  Grid,
  TextArea,
  Checkbox,
} from '@develop-fapp/ui-kit-fapp';

import { useGeneralContext } from '~/context/GeneralContext';
import { DataForBackend } from '~/shared/utils/utils';

const createModal = ({ open, onClose, updatCompetitions }) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const [competition, setCompetition] = useState({
    nome: '',
    dataInicio: '',
    dataFim: '',
    dataPrazoInscricoes: '',
  });

  const content = () => {
    const create = async () => {
      if (!competition.nome) {
        return setErrorMessage('Campo nome inválido');
      }
      if (!competition.dataInicio) {
        return setErrorMessage('Campo descrição inválido');
      }
      if (!competition.dataFim) {
        return setErrorMessage('Campo idade mínima inválido');
      }
      if (!competition.dataPrazoInscricoes) {
        return setErrorMessage('Campo idade máxima inválido');
      }

      const newCompetition = { ...competition };

      newCompetition.dataFim = DataForBackend(newCompetition.dataFim);
      newCompetition.dataInicio = DataForBackend(newCompetition.dataInicio);
      newCompetition.dataPrazoInscricoes = DataForBackend(
        newCompetition.dataPrazoInscricoes,
      );

      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/competicao`,
          newCompetition,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );

        updatCompetitions();
        onClose();
        setCompetition({
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
          value={competition.nome}
          onChange={e =>
            setCompetition({ ...competition, nome: e.target.value })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Data do início"
          value={competition.dataInicio}
          onChange={e =>
            setCompetition({ ...competition, dataInicio: e.target.value })
          }
          mask="data"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Data do fim"
          value={competition.dataFim}
          onChange={e =>
            setCompetition({ ...competition, dataFim: e.target.value })
          }
          mask="data"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Data prazo de inscrições"
          value={competition.dataPrazoInscricoes}
          onChange={e =>
            setCompetition({
              ...competition,
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
