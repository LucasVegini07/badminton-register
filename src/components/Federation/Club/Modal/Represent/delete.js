import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Text,
  Modal,
  Grid,
} from '@develop-fapp/ui-kit-fapp';

import { useGeneralContext } from '~/context/GeneralContext';

const deleteModal = ({
  open,
  onClose,
  updatRepresentants,
  selectedRepresentant,
  selectedClub,
}) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const content = () => {
    const DeleteClub = async () => {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_URL}/usuario/${selectedRepresentant.id}`,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );
        updatRepresentants();
        onClose();
        return setSuccessMessage('Representante deletado com sucesso');
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px', width: '40vh' }}
      >
        <Text weight="bold">Quer excluir este representante? </Text>

        <Text variant="h7" style={{ margin: '16px 0px' }}>
          Ao confirmar, {selectedRepresentant.username} não estará mais
          disponível na sua lista de representantes do(a) {selectedClub.nome}
        </Text>

        <Grid xs="1fr 1fr" spacing="16px">
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="error" onClick={DeleteClub}>
            Excluir representante
          </Button>
        </Grid>
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default deleteModal;
