import React, { ReactNode, useState } from 'react';
import { Home, Command, Briefcase } from 'iconsax-react';
import { Container, Text } from '@develop-fapp/ui-kit-fapp';

import { Sidebar } from '../../Sidebar/Sidebar';
import { MainComponent } from '../../Sidebar/Main';
import { Navbar } from '../../Sidebar/Navbar';

interface Props {
  children: ReactNode;
}

const HomePage = ({ children }: Props) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const SidebarData = [
    {
      title: 'Home',
      path: '/federacao',
      icon: <Home />,
    },
    {
      title: 'Clubes',
      path: '/federacao/clubes',
      icon: <Command />,
    },
    {
      title: 'Competições',
      path: '/federacao/competicoes',
      icon: <Briefcase />,
    },
    {
      title: 'Categorias',
      path: '/federacao/categorias',
      icon: <Briefcase />,
    },
  ];

  return (
    <>
      <Navbar open={sidebar}>
        <Container container="fluid" alignItems="center">
          <img
            src="/logo.png"
            alt="logo.png"
            style={{ height: '50px', marginRight: '16px' }}
          />
          <Text variant="h3" style={{ color: 'white' }}>
            Federação catarinense de Badminton
          </Text>
        </Container>
      </Navbar>
      <Sidebar
        title="Federação"
        items={SidebarData}
        onClick={showSidebar}
        open={sidebar}
        setOpen={showSidebar}
      />
      <MainComponent open={sidebar}>{children}</MainComponent>
    </>
  );
};

export default HomePage;
