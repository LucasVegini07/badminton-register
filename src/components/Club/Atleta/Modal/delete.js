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

const deleteModal = ({ open, onClose, updatAtlhetes, selectedAthlete }) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const content = () => {
    const DeleteCategory = async () => {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_URL}/atletas/${selectedAthlete.id}`,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );

        updatAtlhetes();
        onClose();

        return setSuccessMessage('Atleta deletado com sucesso');
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
    };

    return (
      <Container flexDirection="column" style={{ padding: '20px' }}>
        <Text weight="bold">Quer excluir este atleta? </Text>

        <Text variant="h7" style={{ margin: '16px 0px' }}>
          Ao confirmar, {selectedAthlete.nome} não estará mais disponível na sua
          lista de atletas salvas na sua conta
        </Text>

        <Grid xs="1fr 1fr" spacing="16px">
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="error" onClick={DeleteCategory}>
            Excluir atleta
          </Button>
        </Grid>
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default deleteModal;
