/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  Container,
  Text,
  Modal,
  ComboBoxSingleSelect,
} from '@develop-fapp/ui-kit-fapp';

const competitionModal = ({ open, onClose, selectedCompetition }) => {
  const [athletes, setAthletes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  const [fetching, setFetching] = useState(false);

  useEffect(async () => {
    await test();
  }, [category]);

  const test = async () => {
    if (category.value && selectedCompetition.id) {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_URL}/competicoes/${selectedCompetition.id}/categoria/${category.value}/atletas`,
          {},
        )
        .then(async response => {
          const newAtlhetes = response.data;

          let i = 0;

          for await (const athleteAux of response.data) {
            if (athleteAux?.categoriasCompeticoesAtletas?.atletaId2) {
              await axios
                .get(
                  `${process.env.NEXT_PUBLIC_URL}/atletas/id/${athleteAux?.categoriasCompeticoesAtletas?.atletaId2}`,
                  {},
                )
                .then(response2 => {
                  if (newAtlhetes[i] && response2.data.cpf)
                    newAtlhetes[i].atlhete2cpf = response2.data.cpf;
                });
            }
            i += 1;
          }

          setAthletes(newAtlhetes);
        });
    }
  };

  useEffect(() => {
    if (selectedCompetition.id)
      axios
        .get(
          `${process.env.NEXT_PUBLIC_URL}/competicao/${selectedCompetition.id}/categoria`,
        )
        .then(response => {
          const categoriesAux = [];

          if (response.data.length > 0) {
            setCategory({
              value: response.data[0].id,
              label: response.data[0].nome,
            });

            response.data.map(categorie =>
              categoriesAux.push({
                value: categorie.id,
                label: categorie.nome,
              }),
            );

            setCategories(categoriesAux);
          }
        });
  }, []);

  const content = () => {
    return (
      <Container
        flexDirection="column"
        style={{ padding: '20px', width: '500px' }}
      >
        <Text weight="bold" style={{ marginBottom: '16px' }}>
          Atletas inscritos na competição
        </Text>

        <ComboBoxSingleSelect
          items={categories}
          placeholder="Selecione a categoria"
          style={{ marginBottom: '16px' }}
          value={category}
          onChange={setCategory}
        />

        {athletes.length === 0 ? (
          <Text
            variant="h6"
            style={{ textAlign: 'center', marginBottom: '16px' }}
          >
            Você ainda não cadastrou nenhum atleta nessa categoria
          </Text>
        ) : (
          <>
            {!fetching &&
              athletes.map(atleta => {
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
                    key={atleta.id}
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
                    {atleta.atlhete2cpf && (
                      <Container flexDirection="column">
                        <Text
                          weight="bold"
                          style={{ textAlign: 'center', marginBottom: '8px' }}
                        >
                          CPF Atleta 2
                        </Text>
                        <Text variant="h6" style={{ textAlign: 'center' }}>
                          {atleta.atlhete2cpf}
                        </Text>
                      </Container>
                    )}
                  </Container>
                );
              })}
          </>
        )}
        <Container justifyContent="center">
          <img
            src="/athlete.png"
            alt="athlete.png"
            style={{ width: '200px', padding: '20px' }}
          />
        </Container>
      </Container>
    );
  };

  return <Modal open={open} onClose={onClose} modalContent={content()} />;
};

export default competitionModal;
