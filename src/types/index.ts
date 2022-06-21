import React from 'react';

interface SidebarItem {
  title: string;
  path: string;
  icon: React.ReactNode | React.Component;
  targetBlank?: boolean;
}

export interface SidebarProps {
  items?: SidebarItem[];
  title?: string;
  path?: string;
  icon?: React.ReactNode | React.Component;
  targetBlank?: boolean;
  subnav?: SidebarProps[];
  onClick?: () => void;
}

export interface SidebarStatus extends SidebarProps {
  open: boolean;
  setOpen?: () => void;
  title?: string;
}
