import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Text,
  Modal,
  Grid,
} from '@develop-fapp/ui-kit-fapp';
import { Add, Document } from 'iconsax-react';
import AddAthlete from './addAtlhete';
import RegistredAthletes from './registredAthletes';

const representantModal = ({ open, onClose, selectedCompetition }) => {
  const [openRegistredAthletes, setOpenRegistredAthletes] = useState(false);
  const [openAddAthlete, setOpenAddAthlete] = useState(false);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    updatCategories();
  }, []);

  const updatCategories = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/competicao/${selectedCompetition.id}/categoria`,
      )
      .then(response => setCategories(response.data));
  };

  const content = () => {
    return (
      <Container flexDirection="column" style={{ padding: '20px' }}>
        <Text weight="bold" style={{ marginBottom: '16px' }}>
          Categorias da competição: {selectedCompetition.nome}
        </Text>

        {categories.length === 0 ? (
          <Text
            variant="h6"
            style={{ textAlign: 'center', marginBottom: '16px' }}
          >
            Você ainda não cadastrou nenhum representante
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
                  key={categoria.id}
                >
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: 'center', marginBottom: '8px' }}
                    >
                      Categoria
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
                      Dupla
                    </Text>
                    <Text variant="h6" style={{ textAlign: 'center' }}>
                      {categoria.isDupla ? 'Sim' : 'Não'}
                    </Text>
                  </Container>
                  <Container justifyContent="center">
                    <Add
                      style={{ marginRight: '12px' }}
                      onClick={() => {
                        setSelectedCategory(categoria);
                        setOpenAddAthlete(true);
                      }}
                    />
                    <Document
                      onClick={() => {
                        setSelectedCategory(categoria);
                        setOpenRegistredAthletes(true);
                      }}
                    />
                  </Container>
                </Container>
              );
            })}
          </>
        )}
        <AddAthlete
          open={openAddAthlete}
          onClose={() => setOpenAddAthlete(false)}
          selectedCompetition={selectedCompetition}
          selectedCategory={selectedCategory}
        />
        {openRegistredAthletes && (
          <RegistredAthletes
            open={openRegistredAthletes}
            onClose={() => setOpenRegistredAthletes(false)}
            selectedCompetition={selectedCompetition}
            selectedCategory={selectedCategory}
          />
        )}
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default representantModal;
