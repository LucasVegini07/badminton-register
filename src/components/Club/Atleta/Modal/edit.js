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
import { useRouter } from 'next/router';
import { DataForBackend, DataFromBackend } from '~/shared/utils/utils';
import { useGeneralContext } from '~/context/GeneralContext';

const editModal = ({
  open,
  onClose,
  updatAtlhetes,
  selectedAthlete,
  setSelectedAthlete,
}) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();
  const router = useRouter();

  const options = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
  ];

  const [sexoInformation, setSexoInformation] = useState({});

  useEffect(() => {
    setSelectedAthlete({
      ...selectedAthlete,
      dataNascimento: DataFromBackend(selectedAthlete.dataNascimento),
    });

    setSexoInformation({
      value: selectedAthlete.sexo,
      label: selectedAthlete.sexo === 'M' ? 'Masculino' : 'Feminino',
    });
  }, []);

  const content = () => {
    const create = async () => {
      if (!selectedAthlete.nome) {
        return setErrorMessage('Campo nome inválido');
      }
      if (!selectedAthlete.cpf) {
        return setErrorMessage('Campo CPF inválido');
      }
      if (!selectedAthlete.dataNascimento) {
        return setErrorMessage('Campo data de nascimento inválido');
      }
      if (!selectedAthlete.identificacao) {
        return setErrorMessage('Campo identificação inválido');
      }
      if (!sexoInformation.value) {
        return setErrorMessage('Campo sexo inválido');
      }

      const newSelectedAthlete = {
        clubeId: selectedAthlete.clubeId,
        cpf: selectedAthlete.cpf,
        nome: selectedAthlete.nome,
        foto: 'ramon.png',
        identificacao: selectedAthlete.identificacao,
      };

      newSelectedAthlete.dataNascimento = DataForBackend(
        selectedAthlete.dataNascimento,
      );

      newSelectedAthlete.sexo = sexoInformation.value;

      try {
        await axios.put(
          `${process.env.NEXT_PUBLIC_URL}/atletas/${selectedAthlete.id}`,
          newSelectedAthlete,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        );

        updatAtlhetes();
        onClose();
        return setSuccessMessage('Atleta editado com sucesso');
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
    };

    return (
      <Container flexDirection="column" style={{ padding: '20px' }}>
        <Text weight="bold">Editar atleta</Text>
        <Divider style={{ margin: '16px 0px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Nome"
          value={selectedAthlete.nome}
          onChange={e =>
            setSelectedAthlete({ ...selectedAthlete, nome: e.target.value })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="CPF"
          value={selectedAthlete.cpf}
          onChange={e =>
            setSelectedAthlete({ ...selectedAthlete, cpf: e.target.value })
          }
          mask="cpf"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Data de nascimento"
          value={selectedAthlete.dataNascimento}
          onChange={e =>
            setSelectedAthlete({
              ...selectedAthlete,
              dataNascimento: e.target.value,
            })
          }
          mask="data"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Identificação"
          value={selectedAthlete.identificacao}
          onChange={e =>
            setSelectedAthlete({
              ...selectedAthlete,
              identificacao: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: '16px' }} />
        <Container alignItems="center">
          <ComboBoxSingleSelect
            items={options}
            onChange={setSexoInformation}
            value={sexoInformation}
            placeholder="Sexo"
          />
        </Container>
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

export default editModal;
