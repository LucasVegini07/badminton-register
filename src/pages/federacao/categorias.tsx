import React, { useState } from 'react';
import { Edit2, Trash } from 'iconsax-react';
import {
  Container,
  Button,
  Text,
  Modal,
  Input,
  Divider,
  Grid,
  Checkbox,
  ComboBoxSingleSelect,
} from '@develop-fapp/ui-kit-fapp';
import Template from '../../components/Template/Federation';
import { useGeneralContext } from '~/context/GeneralContext';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { setErrorMessage, setSuccessMessage } = useGeneralContext();
  const [sexo, setSexo] = useState('M');

  const sexoArray = [
    { value: 'M', label: 'M' },
    { value: 'F', label: 'F' },
  ];

  const [category, setCategory] = useState({
    sexo: '',
    descricao: '',
    isDupla: '',
    idadeMax: '',
    idadeMin: '',
    nome: 'Futsal',
  });

  const [selectedCategory, setSelectedCategory] = useState({
    sexo: 'F',
    descricao: '',
    isDupla: 'true',
    idadeMax: '14',
    idadeMin: '13',
  });

  const [categories, setCategories] = useState([
    {
      sexo: 'F',
      descricao: '',
      isDupla: 'true',
      idadeMax: '14',
      idadeMin: '13',
    },
  ]);

  const ContentDeleteModal = () => {
    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px', width: '40vh' }}
      >
        <Text weight="bold">Quer excluir este clube? </Text>

        <Text variant="h7" style={{ margin: '16px 0px' }}>
          Ao confirmar, {selectedCategory.descricao} não estará mais disponível
          na sua lista de clubes salvo na sua conta
        </Text>

        <Grid xs="1fr 1fr" spacing="16px">
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="contained" color="error">
            Excluir clube
          </Button>
        </Grid>
      </Container>
    );
  };

  const ContentEditModal = () => {
    const EditCategory = () => {
      if (!category.descricao) {
        return setErrorMessage('Campo nome inválido');
      }
      if (!category.idadeMax) {
        return setErrorMessage('Campo idade máxima inválido');
      }
      if (!category.idadeMin) {
        return setErrorMessage('Campo idade mínima inválido');
      }
      if (!category.sexo) {
        return setErrorMessage('Campo sexo inválido');
      }
      categories.push(category);
      setOpen(false);

      return setSuccessMessage('Categoria cadastrada com sucesso');
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px', width: '40vh' }}
      >
        <Text weight="bold">Editar clube</Text>
        <Divider style={{ margin: '16px 0px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Nome"
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
          placeholder="Idade Máxima"
          value={selectedCategory.idadeMax}
          onChange={e =>
            setSelectedCategory({
              ...selectedCategory,
              idadeMax: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Idade Máxima"
          value={selectedCategory.idadeMin}
          onChange={e =>
            setSelectedCategory({
              ...selectedCategory,
              idadeMax: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Grid xs="1fr 1fr" spacing="16px">
          <Button
            variant="outlined"
            color="error"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
          <Button variant="contained" onClick={EditCategory}>
            Salvar
          </Button>
        </Grid>
      </Container>
    );
  };

  const Content = () => {
    const addNewCategory = () => {
      if (!category.descricao) {
        return setErrorMessage('Campo nome inválido');
      }
      if (!category.idadeMax) {
        return setErrorMessage('Campo idade máxima inválido');
      }
      if (!category.idadeMin) {
        return setErrorMessage('Campo idade mínima inválido');
      }
      if (!category.sexo) {
        return setErrorMessage('Campo sexo inválido');
      }
      categories.push(category);
      setOpen(false);

      return setSuccessMessage('Categoria cadastrada com sucesso');
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px', width: '40vh' }}
      >
        <Text weight="bold">Adicione uma nova categoria</Text>
        <Divider style={{ margin: '16px 0px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Nome"
          value={category.descricao}
          onChange={e =>
            setCategory({
              ...category,
              descricao: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Idade Máxima"
          value={category.idadeMax}
          onChange={e =>
            setCategory({
              ...category,
              idadeMax: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Idade Máxima"
          value={category.idadeMin}
          onChange={e =>
            setCategory({
              ...category,
              idadeMax: e.target.value,
            })
          }
        />
        <Container alignItems="center">
          <Checkbox type="checkbox" />
          <Text variant="h7"> Dupla</Text>
        </Container>

        <ComboBoxSingleSelect
          placeholder="Sexo"
          items={sexoArray}
          onChange={setSexo}
          value={sexo}
        />
        <div style={{ marginBottom: '16px' }} />

        <Grid xs="1fr 1fr" spacing="16px">
          <Button
            variant="outlined"
            color="error"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
          <Button variant="contained" onClick={addNewCategory}>
            Salvar
          </Button>
        </Grid>
      </Container>
    );
  };

  return (
    <Template>
      <Container container="fluid" flexDirection="column">
        <Container
          container="fluid"
          justifyContent="space-between"
          style={{ marginBottom: '32px' }}
        >
          <Text variant="h4" weight="bold">
            Clubes
          </Text>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Cadastrar nova categoria
          </Button>
        </Container>

        {categories.length === 0 ? (
          <Text variant="h4" style={{ textAlign: 'center', marginTop: '64px' }}>
            Você ainda não cadastrou nenhum clube
          </Text>
        ) : (
          <>
            {categories.map(categoria => {
              return (
                <Container
                  container="fluid"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{
                    border: '2px solid black',
                    borderRadius: '8px',
                    padding: '8px',
                    marginBottom: '16px',
                  }}
                  key={categoria.descricao}
                >
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Nome
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {categoria.descricao}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Idade Mínima
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {categoria.idadeMin}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Idade Máxima
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {categoria.idadeMax}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Dupla
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {categoria.isDupla ? 'Sim' : 'Não'}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Sexo
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {categoria.sexo}
                    </Text>
                  </Container>
                  <Container justifyContent="center">
                    <Edit2
                      style={{ marginRight: '12px' }}
                      //   onClick={() => {
                      //     setOpenEditModal(true);
                      //   }}
                    />
                    <Trash
                    //   onClick={() => {
                    //     setOpenDeleteModal(true);
                    //   }}
                    />
                  </Container>
                </Container>
              );
            })}
          </>
        )}
      </Container>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        modalContent={Content()}
      />

      <Modal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        modalContent={ContentEditModal()}
      />

      <Modal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        modalContent={ContentDeleteModal()}
      />
    </Template>
  );
};

export default HomePage;
