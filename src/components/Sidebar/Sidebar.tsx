import React from 'react';
import { HambergerMenu, ArrowLeft2 } from 'iconsax-react';
import { SidebarStatus } from '../../types/index';
import { SidebarNav, SidebarWrap, NavIcon } from './styles';
import { Submenu } from './Submenu';

export const Sidebar: React.FC<SidebarStatus> = ({
  items,
  onClick,
  open,
  setOpen = () => !open,
}) => {
  return (
    <div style={{ width: '100%' }}>
      <SidebarNav open={open} data-testid="c-main-sidebar">
        <SidebarWrap>
          <NavIcon onClick={onClick} data-testid="c-icon-sidebar">
            {open ? (
              <ArrowLeft2
                variant="Linear"
                color="#fff"
                cursor="pointer"
                data-testid="icon-opened-sidebar"
              />
            ) : (
              <HambergerMenu
                variant="Linear"
                color="#fff"
                cursor="pointer"
                data-testid="icon-closed-sidebar"
              />
            )}
          </NavIcon>
          {items?.map(item => {
            return (
              <Submenu
                item={item}
                key={item.title}
                sidebar={open}
                setOpenSidebar={() => setOpen}
              />
            );
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>
  );
};
