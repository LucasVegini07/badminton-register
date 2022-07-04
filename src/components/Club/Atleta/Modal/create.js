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
  ComboBoxSingleSelect,
} from '@develop-fapp/ui-kit-fapp';
import { useRouter } from 'next/router';
import { DataForBackend } from '~/shared/utils/utils';
import { useGeneralContext } from '~/context/GeneralContext';

const createModal = ({ open, onClose, updatAtlhetes }) => {
  const { setErrorMessage, setSuccessMessage } = useGeneralContext();
  const router = useRouter();

  const options = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
  ];

  const [atlhete, setAtlhete] = useState({
    nome: '',
    cpf: '',
    dataNascimento: false,
    identificacao: '',
    sexo: '',
  });

  const [sexoInformation, setSexoInformation] = useState({});

  const content = () => {
    const create = async () => {
      if (!atlhete.nome) {
        return setErrorMessage('Campo nome inválido');
      }
      if (!atlhete.cpf) {
        return setErrorMessage('Campo CPF inválido');
      }
      if (!atlhete.dataNascimento) {
        return setErrorMessage('Campo data de nascimento inválido');
      }
      if (!atlhete.identificacao) {
        return setErrorMessage('Campo identificação inválido');
      }
      if (!sexoInformation.value) {
        return setErrorMessage('Campo sexo inválido');
      }

      const newAtlhete = { ...atlhete };

      newAtlhete.sexo = sexoInformation.value;
      newAtlhete.clubeId = router.query.id;
      newAtlhete.dataNascimento = DataForBackend(newAtlhete.dataNascimento);
      newAtlhete.foto = 'ramon.png';

      try {
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/atletas`, newAtlhete, {
          headers: { 'Access-Control-Allow-Origin': '*' },
        });

        updatAtlhetes();
        onClose();
        setAtlhete({
          nome: '',
          cpf: '',
          dataNascimento: false,
          identificacao: '',
          sexo: '',
        });
        return setSuccessMessage('Atleta cadastrado com sucesso');
      } catch (e) {
        return setErrorMessage('O serviço não conseguiu se conectar na api');
      }
    };

    return (
      <Container flexDirection="column" style={{ padding: '20px' }}>
        <Text weight="bold">Adicione um novo atleta</Text>
        <Divider style={{ margin: '16px 0px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Nome"
          value={atlhete.nome}
          onChange={e => setAtlhete({ ...atlhete, nome: e.target.value })}
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="CPF"
          value={atlhete.cpf}
          onChange={e => setAtlhete({ ...atlhete, cpf: e.target.value })}
          mask="cpf"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Data de nascimento"
          value={atlhete.dataNascimento}
          onChange={e =>
            setAtlhete({ ...atlhete, dataNascimento: e.target.value })
          }
          mask="data"
        />
        <div style={{ marginBottom: '16px' }} />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder="Identificação"
          value={atlhete.identificacao}
          onChange={e =>
            setAtlhete({ ...atlhete, identificacao: e.target.value })
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

export default createModal;
