import React, { useState } from "react";
import Template from "../../components/Template/Federation";
import { useGeneralContext } from "~/context/GeneralContext";

import { Edit2, Trash } from "iconsax-react";
import {
  Container,
  Button,
  Text,
  Modal,
  Input,
  Divider,
  Grid,
} from "@develop-fapp/ui-kit-fapp";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { setErrorMessage, setSuccessMessage } = useGeneralContext();

  const [club, setClub] = useState({
    nome: "",
    cnpj: "",
    cidade: "",
    sigla: "",
  });

  const [selectedClub, setSelectedClub] = useState({
    nome: "Flamengo",
    cnpj: "00898098098",
    cidade: "Jaraguá do Sul",
    sigla: "FLA",
  });

  const [clubes, setClubes] = useState([
    {
      nome: "Flamengo",
      cnpj: "00898098098",
      cidade: "Jaraguá do Sul",
      sigla: "FLA",
    },
  ]);

  const ContentDeleteModal = () => {
    return (
      <Container
        flexDirection="column"
        style={{ padding: "20px", width: "40vh" }}
      >
        <Text weight="bold">Quer excluir este clube? </Text>

        <Text variant="h7" style={{ margin: "16px 0px" }}>
          Ao confirmar, {selectedClub.nome} não estará mais disponível na sua
          lista de clubes salvo na sua conta
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
    const EditClub = () => {
      if (!club.nome) {
        return setErrorMessage("Campo nome inválido");
      }
      if (!club.cnpj) {
        return setErrorMessage("Campo CNPJ inválido");
      }
      if (!club.cidade) {
        return setErrorMessage("Campo cidade inválido");
      }
      if (!club.sigla) {
        return setErrorMessage("Campo sigla inválido");
      }
      clubes.push(club);
      setOpen(false);

      setSuccessMessage("Clube cadastrado com sucesso");
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: "20px", width: "40vh" }}
      >
        <Text weight="bold">Editar clube</Text>
        <Divider style={{ margin: "16px 0px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="Nome"
          value={selectedClub.nome}
          onChange={(e) =>
            setSelectedClub({ ...selectedClub, nome: e.target.value })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="CNPJ"
          value={selectedClub.cnpj}
          onChange={(e) =>
            setSelectedClub({ ...selectedClub, cnpj: e.target.value })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="Cidade"
          value={selectedClub.cidade}
          onChange={(e) =>
            setSelectedClub({ ...selectedClub, cidade: e.target.value })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="Sigla"
          value={selectedClub.sigla}
          onChange={(e) =>
            setSelectedClub({ ...selectedClub, sigla: e.target.value })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Grid xs="1fr 1fr" spacing="16px">
          <Button
            variant="outlined"
            color="error"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
          <Button variant="contained" onClick={EditClub}>
            Salvar
          </Button>
        </Grid>
      </Container>
    );
  };

  const Content = () => {
    const addNewClub = () => {
      if (!club.nome) {
        return setErrorMessage("Campo nome inválido");
      }
      if (!club.cnpj) {
        return setErrorMessage("Campo CNPJ inválido");
      }
      if (!club.cidade) {
        return setErrorMessage("Campo cidade inválido");
      }
      if (!club.sigla) {
        return setErrorMessage("Campo sigla inválido");
      }
      clubes.push(club);
      setOpen(false);

      setSuccessMessage("Clube cadastrado com sucesso");
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: "20px", width: "40vh" }}
      >
        <Text weight="bold">Adicione um novo clube</Text>
        <Divider style={{ margin: "16px 0px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="Nome"
          value={club.nome}
          onChange={(e) => setClub({ ...club, nome: e.target.value })}
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="CNPJ"
          value={club.cnpj}
          onChange={(e) => setClub({ ...club, cnpj: e.target.value })}
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="Cidade"
          value={club.cidade}
          onChange={(e) => setClub({ ...club, cidade: e.target.value })}
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="Sigla"
          value={club.sigla}
          onChange={(e) => setClub({ ...club, sigla: e.target.value })}
        />
        <div style={{ marginBottom: "16px" }} />
        <Grid xs="1fr 1fr" spacing="16px">
          <Button
            variant="outlined"
            color="error"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
          <Button variant="contained" onClick={addNewClub}>
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
          style={{ marginBottom: "32px" }}
        >
          <Text variant="h4" weight="bold">
            Clubes
          </Text>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Cadastrar novo clube
          </Button>
        </Container>

        {clubes.length === 0 ? (
          <Text variant="h4" style={{ textAlign: "center", marginTop: "64px" }}>
            Você ainda não cadastrou nenhum clube
          </Text>
        ) : (
          <>
            {clubes.map((clube) => {
              return (
                <Container
                  container="fluid"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{
                    border: "2px solid black",
                    borderRadius: "8px",
                    padding: "8px",
                    marginBottom: "16px",
                  }}
                  key={clube.cnpj}
                >
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      Nome
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {clube.nome}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      Sigla
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {clube.sigla}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      Cidade
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {clube.cidade}{" "}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      CNPJ
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {clube.cnpj}
                    </Text>
                  </Container>
                  <Container justifyContent="center">
                    <Edit2
                      style={{ marginRight: "12px" }}
                      onClick={() => {
                        setSelectedClub(clube);
                        setOpenEditModal(true);
                      }}
                    ></Edit2>
                    <Trash
                      onClick={() => {
                        setSelectedClub(clube);
                        setOpenDeleteModal(true);
                      }}
                    ></Trash>
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
