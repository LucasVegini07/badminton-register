import { Button, Container, Text, Input, Link } from '@develop-fapp/ui-kit-fapp';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <Container
      container="fluid"
      style={{
        height: '100vh', backgroundImage: `url(backgrousnd.png)`, backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', backgroundSize: '40%'

      }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor='#17222F'

    >
      <Container style={{ borderRadius: '8px', padding: '16px', width: '300px' }} container='sm' backgroundColor='white' justifyContent="center"
        alignItems="center"
        flexDirection="column" >
        <Text weight='bold' style={{ marginBottom: '32px' }} >
          Faça seu login
        </Text>

        <Input
          placeholder="E-mail"
        />

        <div style={{ marginBottom: '16px' }} />

        <Input
          placeholder="Senha"
        />

        <div style={{ marginBottom: '16px' }} />

        <Button fullWidth variant='contained' style={{ borderRadius: '8px', marginBottom: '16px' }} >Continuar</Button>

        <Container justifyContent="center"
          alignItems="center" >
          <Text variant='h7' style={{ marginRight: '5px' }} >Não tem conta?</Text>
          <Link variant='h7' button >Criar agora</Link>
        </Container>
      </Container>
    </Container>
  );
}
