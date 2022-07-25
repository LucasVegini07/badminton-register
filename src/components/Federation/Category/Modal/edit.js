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
  TextArea,
  ComboBoxSingleSelect,
} from '@develop-fapp/ui-kit-fapp';

import { useGeneralContext } from '~/context/GeneralContext';

const createModal = ({
  open,
  onClose,
  updatCategory,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  useEffect(() => {
    setTypeCategory({
      label: selectedCategory.dupla,
      value: selectedCategory.dupla,
    });
  }, []);

  const options = [
    { label: 'Individual masculino', value: 'Individual masculino' },
    { label: 'Individual feminino', value: 'Individual feminino' },
    { label: 'Dupla feminina', value: 'Dupla feminina' },
    { label: 'Dupla masculina', value: 'Dupla masculina' },
    { label: 'Dupla mista', value: 'Dupla mista' },
  ];

  const [typeCategory, setTypeCategory] = useState({});

  const content = () => {
    const create = async () => {
      if (!selectedCategory.nome) {
        return setErrorMessage('Campo nome inválido');
      }
      if (!selectedCategory.descricao) {
        return setErrorMessage('Campo descrição inválido');
      }
      if (!selectedCategory.idadeMin) {
        return setErrorMessage('Campo idade mínima inválido');
      }
      if (!selectedCategory.idadeMax) {
        return setErrorMessage('Campo idade máxima inválido');
      }
      if (selectedCategory.idadeMax < selectedCategory.idadeMin) {
        return setErrorMessage(
          'Campo idade máxima não pode ser menor que idade mínima',
        );
      }
      if (!selectedCategory.paid) {
        return setErrorMessage('Valor não pode ser inválido');
      }

      const newCategory = { ...selectedCategory };

      newCategory.dupla = typeCategory.value;
      newCategory.paid = parseFloat(selectedCategory.paid);

      try {
        await axios.put(
          `${process.env.NEXT_PUBLIC_URL}/categoria/${newCategory.id}`,
          newCategory,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );

        updatCategory();
        onClose();
        setSelectedCategory({
          nome: '',
          descricao: '',
          dupla: '',
          idadeMax: '',
          idadeMin: '',
        });
        return setSuccessMessage('Categoria cadastrada com sucesso');
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
    };

    return (
      <Container flexDirection="column" style={{ padding: '20px' }}>
        <Text weight="bold">Editar categoria</Text>
        <Divider style={{ margin: '16px 0px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Nome"
          value={selectedCategory.nome}
          onChange={e =>
            setSelectedCategory({ ...selectedCategory, nome: e.target.value })
          }
        />
        <div style={{ marginBottom: '16px' }} />

        <ComboBoxSingleSelect
          items={options}
          onChange={setTypeCategory}
          value={typeCategory}
          placeholder="Tipo"
          style={{ marginBottom: '16px' }}
        />
        <TextArea
          placeholder="Descrição"
          value={selectedCategory.descricao}
          onChange={e =>
            setSelectedCategory({
              ...selectedCategory,
              descricao: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Idade mínima"
          value={selectedCategory.idadeMin}
          onChange={e =>
            setSelectedCategory({
              ...selectedCategory,
              idadeMin: e.target.value,
            })
          }
          type="number"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Idade máxima"
          value={selectedCategory.idadeMax}
          onChange={e =>
            setSelectedCategory({
              ...selectedCategory,
              idadeMax: e.target.value,
            })
          }
          type="number"
        />
        <div style={{ marginBottom: '16px' }} />

        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Valor"
          value={selectedCategory.paid}
          onChange={e =>
            setSelectedCategory({
              ...selectedCategory,
              paid: e.target.value,
            })
          }
          type="number"
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
