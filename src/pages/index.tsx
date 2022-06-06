import { Button as ButtonA, Container, Text } from "@develop-fapp/ui-kit-fapp";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
export default function Home() {
  const router = useRouter();

  return (
    <Container
      container="fluid"
      style={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text style={{ marginBottom: "16px" }}>
        Pagina de login em construção
      </Text>
      <Text style={{ marginBottom: "16px" }}>
        Para acessar os níveis da federação ou do representante de clube utilize
        os botões abaixo
      </Text>
      <Container justifyContent="center">
        <ButtonA
          variant="contained"
          onClick={() => router.push("/federacao")}
          style={{ marginRight: "16px" }}
        >
          Fededação
        </ButtonA>
        <ButtonA variant="contained" onClick={() => router.push("/clube")}>
          Representante de clube
        </ButtonA>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Container>
    </Container>
  );
}
