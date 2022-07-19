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
  ComboBoxMultiSelect,
} from '@develop-fapp/ui-kit-fapp';

import { useGeneralContext } from '~/context/GeneralContext';

const createModal = ({
  open,
  onClose,
  selectedCompetition,
  updatCategories,
}) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState({});
  const [options, setOptions] = useState([]);
  const [categoryInformation, setCategoryInformation] = useState({});

  console.log(category);

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
        response.data.map(categorie =>
          options.push({ value: categorie.id, label: categorie.nome }),
        );
      }
      setOptions(options);
    });
  };

  const content = () => {
    const create = async () => {
      if (category.length === 0) {
        return setErrorMessage('Selecione pelo menos uma categoria');
      }

      const idCategoria = [];

      category.map(categorie => idCategoria.push(categorie.value));

      const bodyFormData = new FormData();

      idCategoria.forEach(item => {
        bodyFormData.append('idCategoria', item);
      });

      const categorias = { idCategoria };

      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/competicao/${selectedCompetition.id}/categoria`,
          categorias,
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
      <Container flexDirection="column" style={{ padding: '20px' }}>
        <Text weight="bold">
          Selecione as novas categorias de {selectedCompetition.nome}
        </Text>
        <Divider style={{ margin: '16px 0px' }} />
        <ComboBoxMultiSelect
          items={options}
          onChange={setCategory}
          value={category}
          placeholder="Categorias"
          style={{ marginBottom: '36px' }}
        />

        <Container justifyContent="center">
          <img
            src="/athlete.png"
            alt="athlete.png"
            style={{ width: '200px', padding: '20px' }}
          />
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
