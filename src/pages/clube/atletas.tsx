import React, { useState } from "react";
import Template from "../../components/Template/Federation";
import { useGeneralContext } from "~/context/GeneralContext";
import Upload from "~/components/upload";

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

  const [athlete, setAthlete] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
    identificacao: "",
  });

  const [selectedAthlete, setSelectedAthlete] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
    identificacao: "",
  });

  const [athletes, setAthletes] = useState([
    {
      nome: "Lucas",
      cpf: "213",
      dataNascimento: "24/06/1999",
      sexo: "M",
      identificacao: "1564",
    },
  ]);

  const ContentDeleteModal = () => {
    return (
      <Container
        flexDirection="column"
        style={{ padding: "20px", width: "40vh" }}
      >
        <Text weight="bold">Quer excluir esta atleta? </Text>

        <Text variant="h7" style={{ margin: "16px 0px" }}>
          Ao confirmar, {selectedAthlete.nome} não estará mais disponível na sua
          lista de atletas salvo na sua conta
        </Text>

        <Grid xs="1fr 1fr" spacing="16px">
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="contained" color="error">
            Excluir atleta
          </Button>
        </Grid>
      </Container>
    );
  };

  const Content = () => {
    const AddNewAthleta = () => {
      if (!athlete.nome) {
        return setErrorMessage("Campo nome inválido");
      }
      if (!athlete.cpf) {
        return setErrorMessage("Campo CPF inválido");
      }
      if (!athlete.dataNascimento) {
        return setErrorMessage("Campo data de nascimento inválido");
      }
      if (!athlete.sexo) {
        return setErrorMessage("Campo sexo inválido");
      }

      if (!athlete.identificacao) {
        return setErrorMessage("Campo de identificação inválido");
      }

      athletes.push(athlete);
      setOpen(false);

      setSuccessMessage("Atleta cadastrado com sucesso");
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: "20px", width: "40vh" }}
      >
        <Text weight="bold">Cadastrar novo atleta</Text>
        <Divider style={{ margin: "16px 0px" }} />
        <Input
          placeholder="Nome"
          value={athlete.nome}
          onChange={(e) =>
            setAthlete({
              ...athlete,
              nome: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          placeholder="CPF"
          value={athlete.cpf}
          onChange={(e) =>
            setAthlete({
              ...athlete,
              cpf: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          placeholder="Data de nascimento"
          value={athlete.dataNascimento}
          onChange={(e) =>
            setAthlete({
              ...athlete,
              dataNascimento: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          placeholder="Sexo"
          value={athlete.sexo}
          onChange={(e) =>
            setAthlete({
              ...athlete,
              sexo: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          placeholder="Identificação"
          value={athlete.identificacao}
          onChange={(e) =>
            setAthlete({
              ...athlete,
              identificacao: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />

        <Container justifyContent="center" container="fluid" style={{ marginBottom: "16px" }}>
          <Upload />
        </Container>
        <Grid xs="1fr 1fr" spacing="16px">
          <Button
            variant="outlined"
            color="error"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
          <Button variant="contained" onClick={AddNewAthleta}>
            Salvar
          </Button>
        </Grid>
      </Container>
    );
  };

  const ContentEditModal = () => {
    const EditAthleta = () => {
      if (!selectedAthlete.nome) {
        return setErrorMessage("Campo nome inválido");
      }
      if (!selectedAthlete.cpf) {
        return setErrorMessage("Campo CPF inválido");
      }
      if (!selectedAthlete.dataNascimento) {
        return setErrorMessage("Campo data de nascimento inválido");
      }
      if (!selectedAthlete.sexo) {
        return setErrorMessage("Campo sexo inválido");
      }

      if (!selectedAthlete.identificacao) {
        return setErrorMessage("Campo de identificação inválido");
      }

      athletes.push(selectedAthlete);
      setOpen(false);

      setSuccessMessage("Atleta cadastrado com sucesso");
    };

    return (
      <Container
        flexDirection="column"
        style={{ padding: "20px", width: "40vh" }}
      >
        <Text weight="bold">Editar atleta</Text>
        <Divider style={{ margin: "16px 0px" }} />
        <Input
          placeholder="Nome"
          value={selectedAthlete.nome}
          onChange={(e) =>
            setSelectedAthlete({
              ...selectedAthlete,
              nome: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          placeholder="CPF"
          value={selectedAthlete.cpf}
          onChange={(e) =>
            setSelectedAthlete({
              ...selectedAthlete,
              cpf: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          placeholder="Data de nascimento"
          value={selectedAthlete.dataNascimento}
          onChange={(e) =>
            setSelectedAthlete({
              ...selectedAthlete,
              dataNascimento: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          placeholder="Sexo"
          value={selectedAthlete.sexo}
          onChange={(e) =>
            setSelectedAthlete({
              ...selectedAthlete,
              sexo: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />
        <Input
          placeholder="Identificação"
          value={selectedAthlete.identificacao}
          onChange={(e) =>
            setSelectedAthlete({
              ...selectedAthlete,
              identificacao: e.target.value,
            })
          }
        />
        <div style={{ marginBottom: "16px" }} />

        <Container container="fluid" style={{ marginBottom: "16px" }}>
          <Upload />
        </Container>

        <Grid xs="1fr 1fr" spacing="16px">
          <Button
            variant="outlined"
            color="error"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
          <Button variant="contained" onClick={EditAthleta}>
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
            Atletas
          </Text>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Cadastrar novo atleta
          </Button>
        </Container>

        {athletes.length === 0 ? (
          <Text variant="h4" style={{ textAlign: "center", marginTop: "64px" }}>
            Você ainda não cadastrou nenhum atleta
          </Text>
        ) : (
          <>
            {athletes.map((atleta) => {
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
                  key={atleta.cpf}
                >
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      Nome
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {atleta.nome}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      CPF
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {atleta.cpf}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      Data de Nascimento
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {atleta.dataNascimento}{" "}
                    </Text>
                  </Container>
                  <Container flexDirection="column">
                    <Text
                      weight="bold"
                      style={{ textAlign: "center", marginBottom: "8px" }}
                    >
                      Sexo
                    </Text>
                    <Text variant="h6" style={{ textAlign: "center" }}>
                      {atleta.sexo}
                    </Text>
                  </Container>
                  <Container justifyContent="center">
                    <Edit2
                      style={{ marginRight: "12px" }}
                      onClick={() => {
                        setSelectedAthlete(atleta);
                        setOpenEditModal(true);
                      }}
                    ></Edit2>
                    <Trash
                      onClick={() => {
                        setSelectedAthlete(atleta);
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
