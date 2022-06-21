import React from 'react';
import { SidebarStatus } from '../../types/index';
import { NavbarNavContainer } from './styles';

export const Navbar: React.FC<SidebarStatus> = ({ children, open }) => {
  return (
    <div style={{ width: '100%' }}>
      <NavbarNavContainer open={open}>
        <span>{children}</span>
      </NavbarNavContainer>
    </div>
  );
};
