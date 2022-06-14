/* eslint-disable react/jsx-no-comment-textnodes */
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import {
  Home,
  MessageText,
  ShoppingCart,
  Profile2User,
  Messages1,
  I24Support,
  Moneys,
} from 'iconsax-react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { SidebarStatus } from '../../types/index';

const Main = styled.main`
  flex-grow: 1;
  overflow: 'auto';
`;

const Container = styled.div<SidebarStatus>`
  padding: ${props => (props.open ? '30px 100px 30px 300px' : '30px 100px')};
  transition: 300ms;

  @media (max-width: 800px) {
    padding: 30px 15px 30px 90px;
  }
`;

type Props = {
  children: ReactNode;
};

const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <Home />,
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <MessageText />,
  },
  {
    title: 'Products',
    path: '/products',
    icon: <ShoppingCart />,
    targetBlank: true,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <Profile2User />,
    subnav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <Profile2User />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <Moneys />,
        targetBlank: true,
      },
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Messages1 />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <I24Support />,
  },
];

export default function MainTemplate({ children }: Props): JSX.Element {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <Navbar open={sidebar}>Olá</Navbar>
      <Sidebar
        items={SidebarData}
        onClick={showSidebar}
        open={sidebar}
        setOpen={() => setSidebar(!sidebar)}
      />
      <Main>
        <Container open={sidebar}>
          <div>{children}</div>
        </Container>
      </Main>
    </div>
  );
}
