import React from 'react';

import { SearchNormal1 } from 'iconsax-react';
import Image from 'next/image';

import { Button, Container, Input } from '@develop-fapp/ui-kit-fapp';

import logo from '../../../../assets/logo.svg';
import { Header } from './styles';

const HomePageHeader = (): JSX.Element => {
  return (
    <Header>
      <Container
        container="lg"
        flexDirection="column"
        justifyContent="center"
        backgroundColor="#2d4054"
        style={{ height: '100px' }}
      >
        <Container
          backgroundColor="#2d4054"
          alignItems="center"
          justifyContent="space-between"
        >
          <Container>
            <Image src={logo} />
          </Container>
          <Input
            placeholder="Procure por produtos ou lojas"
            name="search"
            startIcon={<SearchNormal1 size={16} color="#06BAB2" />}
          />
          <Button variant="contained">Teste</Button>
        </Container>
      </Container>
    </Header>
  );
};

export default HomePageHeader;
