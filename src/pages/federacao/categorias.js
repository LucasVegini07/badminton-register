import React, { useState, useEffect } from 'react';
import { Container, Button, Text } from '@develop-fapp/ui-kit-fapp';
import { Edit2, Trash } from 'iconsax-react';
import CreateModal from '@components/Federation/Category/Modal/create';
import EditModal from '@components/Federation/Category/Modal/edit';
import DeleteModal from '@components/Federation/Category/Modal/delete';

import axios from 'axios';
import Template from '../../components/Template/Federation';

const CategoryPage = () => {
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    updatCategory();
  }, []);

  const updatCategory = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/categoria`, {})
      .then(response => setCategories(response.data));
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
            Categoria
          </Text>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Cadastrar nova categoria
          </Button>
        </Container>

        {categories.length === 0 ? (
          <Text variant="h4" style={{ textAlign: 'center', marginTop: '64px' }}>
            Você ainda não cadastrou nenhuma categoria
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
                  key={categoria.cnpj}
                >
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Nome
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {categoria.nome}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Idade mínima
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
                      Tipo
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {categoria.dupla}
                    </Text>
                  </Container>
                  <Container justifyContent="center">
                    <Edit2
                      style={{ marginRight: '12px' }}
                      onClick={() => {
                        setSelectedCategory(categoria);
                        setOpenEditModal(true);
                      }}
                    />
                    <Trash
                      onClick={() => {
                        setSelectedCategory(categoria);
                        setOpenDeleteModal(true);
                      }}
                    />
                  </Container>
                </Container>
              );
            })}
          </>
        )}
      </Container>
      <CreateModal
        open={open}
        onClose={() => setOpen(false)}
        updatCategory={updatCategory}
      />
      {openEditModal && (
        <EditModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          updatCategory={updatCategory}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      <DeleteModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        updatCategory={updatCategory}
        selectedCategory={selectedCategory}
      />
    </Template>
  );
};

export default CategoryPage;
