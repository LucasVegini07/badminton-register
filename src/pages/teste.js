import React, { useState } from 'react';
import { Button, Container, Text, Input } from '@develop-fapp/ui-kit-fapp';

export default function Home() {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Container
      container="fluid"
      style={{
        height: '100vh',
        backgroundImage: `url(backgrousnd.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '40%',
      }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor="#17222F"
    >
      <Container
        style={{ borderRadius: '8px', padding: '16px', width: '300px' }}
        container="sm"
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text weight="bold" style={{ marginBottom: '32px' }}>
          Faça seu login
        </Text>

        <Input
          placeholder="Nome de usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <div style={{ marginBottom: '16px' }} />

        <Input
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          type="password"
        />
        <div style={{ marginBottom: '16px' }} />

        <Button
          fullWidth
          variant="contained"
          style={{ borderRadius: '8px', marginBottom: '16px' }}
        >
          Continuar
        </Button>
      </Container>
    </Container>
  );
}
