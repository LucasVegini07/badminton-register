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

const createModal = ({ open, onClose, selectedClub, updatRepresentants }) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const [representant, setRepresentant] = useState({
    username: '',
    senha: '',
    clubeId: selectedClub.id,
  });

  const content = () => {
    const create = async () => {
      if (!representant.username) {
        return setErrorMessage('Campo usuario inválido');
      }
      if (!representant.senha) {
        return setErrorMessage('Campo senha inválido');
      }

      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/usuario`,
          representant,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );

        updatRepresentants();
        onClose();
        setRepresentant({
          username: '',
          senha: '',
          clubeId: selectedClub.id,
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
        <Text weight="bold">Adicione um novo representante</Text>
        <Divider style={{ margin: '16px 0px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Nome de usuário"
          value={representant.username}
          onChange={e =>
            setRepresentant({ ...representant, username: e.target.value })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Senha"
          value={representant.senha}
          onChange={e =>
            setRepresentant({ ...representant, senha: e.target.value })
          }
          type="password"
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
