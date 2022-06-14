import React, { FC, useState } from 'react';
import { ArrowUp2, ArrowDown2 } from 'iconsax-react';
import { SidebarProps } from '../../types/index';
import {
  SidebarLink,
  SidebarLabel,
  DropdownLink,
  SidebarNoLink,
  WrapperElementsSidebar,
} from './styles';

type SidebarLinkProps = {
  item: SidebarProps;
  sidebar: boolean;
  setOpenSidebar: () => void;
};

export const Submenu: FC<SidebarLinkProps> = ({
  item,
  sidebar,
  setOpenSidebar,
}) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const handleShowSubnav = () => {
    setSubnav(!subnav);
    setOpenSidebar();
  };

  return (
    <>
      {item.subnav ? (
        <SidebarNoLink
          onClick={handleShowSubnav}
          data-testid="submenu-without-link"
        >
          <WrapperElementsSidebar>
            {item.icon}
            {sidebar && <SidebarLabel>{item.title}</SidebarLabel>}
          </WrapperElementsSidebar>
          {item.subnav && sidebar && (
            <div>{item.subnav && subnav ? <ArrowUp2 /> : <ArrowDown2 />}</div>
          )}
        </SidebarNoLink>
      ) : (
        <SidebarLink
          href={item.path}
          target={item.targetBlank ? '_blank' : '_self'}
          onClick={showSubnav}
          data-testid="submenu-with-link"
        >
          <WrapperElementsSidebar>
            {item.icon}
            {sidebar && <SidebarLabel>{item.title}</SidebarLabel>}
          </WrapperElementsSidebar>
          {item.subnav && (
            <div>{item.subnav && subnav ? <ArrowUp2 /> : <ArrowDown2 />}</div>
          )}
        </SidebarLink>
      )}
      {subnav &&
        item?.subnav?.map(subnavItem => {
          return (
            <DropdownLink
              href={subnavItem.path}
              target={subnavItem.targetBlank ? '_blank' : '_self'}
              key={subnavItem.title}
              data-testid="dropdown-link"
            >
              {sidebar && subnavItem.icon}
              <SidebarLabel>{sidebar && subnavItem.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
