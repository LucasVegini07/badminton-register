import { Container, Text } from "@develop-fapp/ui-kit-fapp";

import { Button } from "~/components/Button";

import { useRouter } from "next/router";
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
        <Button
          variant="contained"
          onClick={() => router.push("/federacao")}
          style={{ marginRight: "16px" }}
        >
          Fededação
        </Button>
        <Button variant="contained" onClick={() => router.push("/clube")}>
          Representante de clube
        </Button>
      </Container>
    </Container>
  );
}
