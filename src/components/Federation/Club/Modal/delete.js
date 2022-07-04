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

const deleteModal = ({ open, onClose, updatClubs, selectedClub }) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const content = () => {
    const DeleteClub = async () => {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_URL}/clubes/${selectedClub.id}`,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );

        updatClubs();
        onClose();

        return setSuccessMessage('Clube deletado com sucesso');
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px'}}
      >
        <Text weight="bold">Quer excluir este clube? </Text>

        <Text variant="h7" style={{ margin: '16px 0px' }}>
          Ao confirmar, {selectedClub.nome} não estará mais disponível na sua
          lista de clubes salvo na sua conta
        </Text>

        <Grid xs="1fr 1fr" spacing="16px">
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="error" onClick={DeleteClub}>
            Excluir clube
          </Button>
        </Grid>
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default deleteModal;
