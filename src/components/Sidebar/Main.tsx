import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { SidebarStatus } from '../../types/index';

type Props = {
  children: ReactNode;
  open: boolean;
};

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

export const MainComponent = ({ children, open }: Props) => {
  return (
    <Main>
      <Container open={open}>
        <div>{children}</div>
      </Container>
    </Main>
  );
};
