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

const createModal = ({
  open,
  onClose,
  updatClubs,
  selectedClub,
  setSelectedClub,
}) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const content = () => {
    const create = async () => {
      if (!selectedClub.nome) {
        return setErrorMessage('Campo nome inválido');
      }
      if (!selectedClub.cnpj) {
        return setErrorMessage('Campo CNPJ inválido');
      }
      if (selectedClub.cnpj.length < 19) {
        return setErrorMessage('Campo CNPJ deve ser preenchido corretamente');
      }
      if (!selectedClub.cidade) {
        return setErrorMessage('Campo cidade inválido');
      }
      if (!selectedClub.sigla) {
        return setErrorMessage('Campo sigla inválido');
      }

      try {
        await axios.put(
          `${process.env.NEXT_PUBLIC_URL}/clubes/${selectedClub.id}`,
          selectedClub,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );

        updatClubs();
        onClose();

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
          value={selectedClub.nome}
          onChange={e =>
            setSelectedClub({ ...selectedClub, nome: e.target.value })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="CNPJ"
          value={selectedClub.cnpj}
          onChange={e =>
            setSelectedClub({ ...selectedClub, cnpj: e.target.value })
          }
          mask="cnpj"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Cidade"
          value={selectedClub.cidade}
          onChange={e =>
            setSelectedClub({ ...selectedClub, cidade: e.target.value })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Sigla"
          value={selectedClub.sigla}
          onChange={e =>
            setSelectedClub({ ...selectedClub, sigla: e.target.value })
          }
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
