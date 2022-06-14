import styled from 'styled-components';
import { Theme, ColorPallete } from '../../themes/defaults';
import { SidebarStatus } from '../../types/index';

export const NavbarNavContainer = styled.div<SidebarStatus>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  background-color: ${ColorPallete.blue1};
  z-index: 999;

  > span {
    margin-left: ${props => (props.open ? '300px' : '100px')};
    transition: 300ms;
    font-size: 22px;
    color: #fff;

    @media (max-width: 800px) {
      margin-left: ${props => props.open && '100px'};
    }
  }
`;

export const SidebarNav = styled.div<SidebarStatus>`
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  left: 0;
  width: 70px;
  overflow: hidden;
  -webkit-transition: width 0.05s linear;
  z-index: 1000;

  transition: 300ms;
  background-color: ${ColorPallete.blue1};

  -webkit-box-shadow: 2px 0px 11px -3px rgba(0, 0, 0, 0.46);
  box-shadow: 2px 0px 11px -3px rgba(0, 0, 0, 0.46);

  ${({ open }) =>
    open &&
    `
      width: 250px;
      overflow: visible;
  `}
`;

export const NavIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  margin-left: 20px;
  font-size: ${Theme.typography.heading.h2};
  z-index: 999;

  cursor: pointer;
`;

export const SidebarWrap = styled.div``;

// SUBMENU NAVBAR

export const SidebarNoLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  font-size: ${Theme.typography.heading.h6};
  padding: 1rem;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  z-index: 999;

  &:hover {
    background-color: ${ColorPallete.blue2};
    border-left: 4px solid ${ColorPallete.green3};
  }
`;

export const SidebarLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  font-size: ${Theme.typography.heading.h6};
  padding: 1rem;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  z-index: 999;

  &:hover {
    background-color: ${ColorPallete.blue2};
    border-left: 4px solid ${ColorPallete.green3};
  }
`;

export const ContentSidebarLink = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperElementsSidebar = styled.div`
  display: flex;
  align-items: center;
`;

export const SidebarLabel = styled.span`
  margin-left: 1rem;
  z-index: 999;
`;

export const DropdownLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3.75rem;
  font-size: ${Theme.typography.heading.h6};
  padding-left: 3rem;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  z-index: 999;

  &:hover {
    border-bottom: 2px solid ${ColorPallete.green3};
    background-color: ${ColorPallete.blue2};
  }
`;

export const DropdownLinkSidebarClose = styled(DropdownLink)`
  padding-left: 20px;
  color: ${ColorPallete.blue1};
  background-color: ${ColorPallete.green3};
`;

// NAV BAR
export const Nav = styled.div<SidebarStatus>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  background-color: ${ColorPallete.blue1};
  z-index: 999;

  > span {
    padding-left: ${props => (props.open ? '300px' : '100px')};
    transition: 300ms;
    font-size: 22px;
    color: #fff;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) {
      padding-left: ${props => props.open && '100px'};
    }
  }
`;

export const DropdownMenuContainer = styled.div`
  > svg {
    cursor: pointer;
  }
`;
