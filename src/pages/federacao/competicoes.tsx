import React, { useState } from "react";
import Template from "../../components/Template/Federation";
import { useGeneralContext } from "~/context/GeneralContext";
import { Container } from "~/components/Container";

import { Edit2, Trash } from "iconsax-react";
import {
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

  const [competition, setCompetition] = useState({
    nome: "",
    data_inicio: "",
    data_fim: "",
    data_prazo_inscricoes: "",
  });

  const [selectedCompetition, setSelectedCompetition] = useState({
    nome: "",
    data_inicio: "",
    data_fim: "",
    data_prazo_inscricoes: "",
  });

  const [competitions, setCompetitions] = useState([
    {
      nome: "Olichamp",
      data_inicio: "20-08-2022",
      data_fim: "20-09-2022",
      data_prazo_inscricoes: "19/08/2022",
    },
  ]);

  const ContentDeleteModal = () => {
    return (
      <Container
        flexDirection="column"
        style={{ padding: "20px", width: "40vh" }}
      >
        <Text weight="bold">Quer excluir esta competição? </Text>

        <Text variant="h7" style={{ margin: "16px 0px" }}>
          Ao confirmar, {selectedCompetition.nome} não estará mais disponível na
          sua lista de competições salvo na sua conta
        </Text>

        <Grid xs="1fr 1fr" spacing="16px">
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="contained" color="error">
            Excluir competição
          </Button>
        </Grid>
      </Container>
    );
  };

  const ContentEditModal = () => {
    const EditCompetition = () => {
      if (!selectedCompetition.nome) {
        return setErrorMessage("Campo nome inválido");
      }
      if (!selectedCompetition.data_inicio) {
        return setErrorMessage("Campo data início inválido");
      }
      if (!selectedCompetition.data_fim) {
        return setErrorMessage("Campo data fim inválido");
      }
      if (!selectedCompetition.data_prazo_inscricoes) {
        return setErrorMessage("Campo data prazo inscricões inválido");
      }
      competitions.push(selectedCompetition);
      setOpen(false);

      setSuccessMessage("Competição cadastrado com sucesso");
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: "20px", width: "40vh" }}
      >
        <Text weight="bold">Editar competição</Text>
        <Divider style={{ margin: "16px 0px" }} />
        <Input
          placeholder="Nome"
          value={selectedCompetition.nome}
          onChange={(e) =>
            setSelectedCompetition({
              ...selectedCompetition,
              nome: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          placeholder="Data início"
          value={selectedCompetition.data_inicio}
          onChange={(e) =>
            setSelectedCompetition({
              ...selectedCompetition,
              data_inicio: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          placeholder="Data fim"
          value={selectedCompetition.data_fim}
          onChange={(e) =>
            setSelectedCompetition({
              ...selectedCompetition,
              data_fim: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          placeholder="Data prazo de inscrições"
          value={selectedCompetition.data_prazo_inscricoes}
          onChange={(e) =>
            setSelectedCompetition({
              ...selectedCompetition,
              data_prazo_inscricoes: e.target.value,
            })
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
          <Button variant="contained" onClick={EditCompetition}>
            Salvar
          </Button>
        </Grid>
      </Container>
    );
  };

  const Content = () => {
    const addNewCompetition = () => {
      if (!competition.nome) {
        return setErrorMessage("Campo nome inválido");
      }
      if (!competition.data_inicio) {
        return setErrorMessage("Campo data início inválido");
      }
      if (!competition.data_fim) {
        return setErrorMessage("Campo data fim inválido");
      }
      if (!competition.data_prazo_inscricoes) {
        return setErrorMessage("Campo data prazo inscricões inválido");
      }
      competitions.push(competition);
      setOpen(false);

      setCompetition({
        nome: "",
        data_inicio: "",
        data_fim: "",
        data_prazo_inscricoes: "",
      });

      setSuccessMessage("Competição cadastrado com sucesso");
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: "20px", width: "40vh" }}
      >
        <Text weight="bold">Adicione uma nova competição</Text>
        <Divider style={{ margin: "16px 0px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="Nome"
          value={competition.nome}
          onChange={(e) =>
            setCompetition({ ...competition, nome: e.target.value })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="Data início"
          value={competition.data_inicio}
          mask="data"
          onChange={(e) =>
            setCompetition({ ...competition, data_inicio: e.target.value })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="Data fim"
          value={competition.data_fim}
          mask="data"
          onChange={(e) =>
            setCompetition({ ...competition, data_fim: e.target.value })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          style={{ marginBottom: "16px" }}
          placeholder="Data prazo de inscrições"
          value={competition.data_prazo_inscricoes}
          mask="data"
          onChange={(e) =>
            setCompetition({
              ...competition,
              data_prazo_inscricoes: e.target.value,
            })
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
          <Button variant="contained" onClick={addNewCompetition}>
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
            Competições
          </Text>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Cadastrar novo competição
          </Button>
        </Container>

        {competitions.length === 0 ? (
          <Text variant="h4" style={{ textAlign: "center", marginTop: "64px" }}>
            Você ainda não cadastrou nenhuma competição
          </Text>
        ) : (
          <>
            {competitions.map((competicao) => {
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
                  key={competicao.nome}
                >
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      Nome
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {competicao.nome}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      Data início
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {competicao.data_inicio}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      Data fim
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {competicao.data_fim}{" "}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      Data prazo inscrições
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {competicao.data_prazo_inscricoes}
                    </Text>
                  </Container>
                  <Container justifyContent="center">
                    <Edit2
                      style={{ marginRight: "12px" }}
                      onClick={() => {
                        setSelectedCompetition(competicao);
                        setOpenEditModal(true);
                      }}
                    ></Edit2>
                    <Trash
                      onClick={() => {
                        setSelectedCompetition(competicao);
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
