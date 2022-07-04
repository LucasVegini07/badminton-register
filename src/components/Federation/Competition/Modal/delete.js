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

const deleteModal = ({
  open,
  onClose,
  selectedCompetition,
  updatCompetitions,
}) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const content = () => {
    const DeleteCategory = async () => {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_URL}/competicao/${selectedCompetition.id}`,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );

        updatCompetitions();
        onClose();

        return setSuccessMessage('Competição deletada com sucesso');
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px' }}
      >
        <Text weight="bold">Quer excluir esta competição? </Text>

        <Text variant="h7" style={{ margin: '16px 0px' }}>
          Ao confirmar, {selectedCompetition.nome} não estará mais disponível na
          sua lista de competições salvas na sua conta
        </Text>

        <Grid xs="1fr 1fr" spacing="16px">
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="error" onClick={DeleteCategory}>
            Excluir competição
          </Button>
        </Grid>
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default deleteModal;
