import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Text,
  Modal,
  Grid,
} from '@develop-fapp/ui-kit-fapp';

import { DataFromBackend } from '~/shared/utils/utils';

const addAthelteModal = ({
  open,
  onClose,
  selectedCompetition,
  selectedCategory,
}) => {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    getAthletes();
  }, []);

  const getAthletes = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/competicoes/${selectedCompetition.id}/categoria/${selectedCategory.id}/atletas`,
        {},
      )
      .then(response => {
        setAthletes(response.data);
      });
  };

  const content = () => {
    return (
      <Container flexDirection="column" style={{ padding: '20px' }}>
        <Text weight="bold" style={{ marginBottom: '16px' }}>
          Atletas cadastrados na categoria : {selectedCategory.name}
        </Text>

        {athletes.map((atleta, index) => {
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
              key={index}
            >
              <Container flexDirection="column">
                <Text
                  weight="bold"
                  style={{ textAlign: 'center', marginBottom: '8px' }}
                >
                  Nome
                </Text>
                <Text variant="h6" style={{ textAlign: 'center' }}>
                  {atleta.nome}
                </Text>
              </Container>
              <Container flexDirection="column">
                <Text
                  weight="bold"
                  style={{ textAlign: 'center', marginBottom: '8px' }}
                >
                  CPF
                </Text>
                <Text variant="h6" style={{ textAlign: 'center' }}>
                  {atleta.cpf}
                </Text>
              </Container>
              <Container flexDirection="column">
                <Text
                  weight="bold"
                  style={{ textAlign: 'center', marginBottom: '8px' }}
                >
                  Data de nascimento
                </Text>
                <Text variant="h6" style={{ textAlign: 'center' }}>
                  {DataFromBackend(atleta.dataNascimento)}
                </Text>
              </Container>
            </Container>
          );
        })}
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default addAthelteModal;
