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
} from '@develop-fapp/ui-kit-fapp';

import { useGeneralContext } from '~/context/GeneralContext';

const createModal = ({ open, onClose, updatClubs }) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const [club, setClub] = useState({
    nome: '',
    cnpj: '',
    cidade: '',
    sigla: '',
  });

  const content = () => {
    const create = async () => {
      if (!club.nome) {
        return setErrorMessage('Campo nome inválido');
      }
      if (!club.cnpj) {
        return setErrorMessage('Campo CNPJ inválido');
      }
      if (club.cnpj.length < 19) {
        return setErrorMessage('Campo CNPJ deve ser preenchido corretamente');
      }
      if (!club.cidade) {
        return setErrorMessage('Campo cidade inválido');
      }
      if (!club.sigla) {
        return setErrorMessage('Campo sigla inválido');
      }

      try {
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/clubes`, club, {
          headers: { 'Access-Control-Allow-Origin': '*' },
        });

        updatClubs();
        onClose();
        setClub({
          nome: '',
          cnpj: '',
          cidade: '',
          sigla: '',
        });

        return setSuccessMessage('Clube cadastrado com sucesso');
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px', width: '40vh' }}
      >
        <Text weight="bold">Adicione um novo clube</Text>
        <Divider style={{ margin: '16px 0px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Nome"
          value={club.nome}
          onChange={e => setClub({ ...club, nome: e.target.value })}
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="CNPJ"
          value={club.cnpj}
          onChange={e => setClub({ ...club, cnpj: e.target.value })}
          mask="cnpj"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Cidade"
          value={club.cidade}
          onChange={e => setClub({ ...club, cidade: e.target.value })}
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Sigla"
          value={club.sigla}
          onChange={e => setClub({ ...club, sigla: e.target.value })}
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
