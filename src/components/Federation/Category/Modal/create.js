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

const createModal = ({ open, onClose, updatCategory }) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const [category, setCategory] = useState({
    nome: '',
    descricao: '',
    isDupla: false,
    idadeMax: '',
    idadeMin: '',
  });

  const content = () => {
    const create = async () => {
      if (!category.nome) {
        return setErrorMessage('Campo nome inválido');
      }
      if (!category.descricao) {
        return setErrorMessage('Campo descrição inválido');
      }
      if (!category.idadeMin) {
        return setErrorMessage('Campo idade mínima inválido');
      }
      if (!category.idadeMax) {
        return setErrorMessage('Campo idade máxima inválido');
      }
      if (category.idadeMax < category.idadeMin) {
        return setErrorMessage(
          'Campo idade máxima não pode ser menor que idade mínima',
        );
      }

      try {
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/categoria`, category, {
          headers: { 'Access-Control-Allow-Origin': '*' },
        });

        updatCategory();
        onClose();
        setCategory({
          nome: '',
          descricao: '',
          isDupla: false,
          idadeMax: '',
          idadeMin: '',
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
          value={category.nome}
          onChange={e => setCategory({ ...category, nome: e.target.value })}
        />
        <div style={{ marginBottom: '16px' }} />
        <TextArea
          placeholder="Descrição"
          value={category.descricao}
          onChange={e =>
            setCategory({ ...category, descricao: e.target.value })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Idade mínima"
          value={category.idadeMin}
          onChange={e => setCategory({ ...category, idadeMin: e.target.value })}
          type="number"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Idade máxima"
          value={category.idadeMax}
          onChange={e => setCategory({ ...category, idadeMax: e.target.value })}
          type="number"
        />
        <Container alignItems="center">
          <Checkbox
            type="checkbox"
            onChange={e =>
              setCategory({ ...category, isDupla: e.target.checked })
            }
            checked={category.isDupla}
          />
          <Text variant="h7">Atividade em dupla</Text>
        </Container>
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
