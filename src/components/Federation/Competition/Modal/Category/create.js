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
  ComboBoxSingleSelect,
} from '@develop-fapp/ui-kit-fapp';

import { useGeneralContext } from '~/context/GeneralContext';

const createModal = ({
  open,
  onClose,
  selectedCompetition,
  updatCategories,
}) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState({});
  const [options, setOptions] = useState([]);
  const [categoryInformation, setCategoryInformation] = useState({});

  useEffect(() => {
    if (category.value && options.length > 0) {
      const categoria = categories.find(
        categoryAux => categoryAux.id === category.value,
      );

      setCategoryInformation(categoria);
    }
  }, [category, options]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios.get(`${process.env.NEXT_PUBLIC_URL}/categoria`, {}).then(response => {
      setCategories(response.data);

      if (response.data.length > 0) {
        setCategory({
          value: response.data[0].id,
          label: response.data[0].nome,
        });

        response.data.map(categorie =>
          options.push({ value: categorie.id, label: categorie.nome }),
        );
      }
      setOptions(options);
    });
  };

  const content = () => {
    const create = async () => {
      if (!category.value) {
        return setErrorMessage('Campo categoria inválido');
      }

      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/competicao/${selectedCompetition.id}/categoria/${category.value}`,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );

        updatCategories();
        onClose();
        setCategory('');

        return setSuccessMessage('Catagoria cadastrado com sucesso');
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px', width: '40vh' }}
      >
        <Text weight="bold">Adicione uma nova categoria</Text>
        <Divider style={{ margin: '16px 0px' }} />
        <ComboBoxSingleSelect
          items={options}
          onChange={setCategory}
          value={category}
          placeholder="Categorias"
        />
        <div style={{ marginBottom: '16px' }} />

        <Text variant="h7" style={{ marginBottom: '16px' }}>
          <Text variant="h7" weight="bold">
            Descrição:
          </Text>{' '}
          {categoryInformation.descricao}{' '}
        </Text>
        <Text variant="h7" style={{ marginBottom: '16px' }}>
          <Text variant="h7" weight="bold">
            Idade mínima:
          </Text>{' '}
          {categoryInformation.idadeMin}{' '}
        </Text>
        <Text variant="h7" style={{ marginBottom: '16px' }}>
          <Text variant="h7" weight="bold">
            Idade máxima:{' '}
          </Text>{' '}
          {categoryInformation.idadeMax}{' '}
        </Text>
        <Text variant="h7" style={{ marginBottom: '16px' }}>
          <Text variant="h7" weight="bold">
            Dupla:{' '}
          </Text>{' '}
          {categoryInformation.isDupla ? 'Sim' : 'Não'}{' '}
        </Text>

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
