/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React, {
  AnchorHTMLAttributes,
  HTMLAttributes,
  LabelHTMLAttributes,
} from 'react';
export interface FlexboxProps extends HTMLAttributes<HTMLDivElement> {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'start'
    | 'end';
  alignContent?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignSelf?: 'flex-start' | 'flex-end' | 'center';
}
export interface ItemAccordion {
  title: string;
  description: string;
}

export interface AccordionProps {
  items: ItemAccordion[];
}

export interface ToastAlertProps extends HTMLAttributes<HTMLDivElement> {
  type: 'sucess' | 'alert' | 'error';
  title?: string;
  subTitle?: string;
  size?: 'lg' | 'md' | 'sm';
}

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: 'auto' | string;
  backgroundColor?: string;
}

export interface CarouselProps {
  items: (React.ReactNode | React.Component)[];
  spacing?: number;
  widthPerItem?: number;
}

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: false | boolean;
  disabled?: false | boolean;
  type?: 'checkbox' | 'radio';
  id?: any;
}

export interface ContainerProps extends FlexboxProps {
  container?: 'fluid' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor?: string;
}

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: false | boolean;
  backgroundColor?: string;
}

interface Input {
  errorMessage?: string;
  sucessMessage?: string;
  alertMessage?: string;
  infoMessage?: string;
}
export interface InputProps
  extends Input,
    React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode | React.Component;
  endIcon?: React.ReactNode | React.Component;
  inputButton?: boolean;
  mask?:
    | 'cep'
    | 'currency'
    | 'cpf'
    | 'cnpj'
    | 'cpf_cnpj'
    | 'card'
    | 'cvv'
    | 'phone'
    | 'data';
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'outlined' | 'contained';
  color?: 'primary' | 'success' | 'error';
  startIcon?: React.ReactNode | React.Component;
  endIcon?: React.ReactNode | React.Component;
  size?: 'large' | 'medium' | 'small';
  fullWidth?: boolean;
}

export interface InputButtonProps {
  input: InputProps;
  button: ButtonProps;
}

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'outlined' | 'contained';
  color?: 'primary' | 'success' | 'error' | 'alert';
  startIcon?: React.ReactNode | React.Component;
  endIcon?: React.ReactNode | React.Component;
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  modalContent: JSX.Element;
}
export type ModalContainerProps = HTMLAttributes<HTMLDivElement>;
export interface TextAreaProps
  extends Input,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface Text {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'h8'
    | 'h9'
    | 'h10';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';
}
export interface TextProps
  extends Text,
    LabelHTMLAttributes<HTMLLabelElement> {}

export interface LinkProps
  extends Text,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  button?: boolean;
}
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: string;
  xl?: string;
  lg?: string;
  md?: string;
  sm?: string;
  xs?: string;
  justifyContent?: string;
  alignItems?: string;
}

interface InputSelectItem {
  value: string;
  label: string;
}

export interface ComboBoxProps extends HTMLAttributes<HTMLDivElement> {
  items?: InputSelectItem[];
  onChange?: (values: any) => void;
  value?: any;
  placeholder?: string;
  startIcon?: React.ReactNode | React.Component;
}

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  items?: InputSelectItem[];
  onChange?: (values: any) => void;
  value?: any;
  placeholder?: string;
  startIcon?: React.ReactNode | React.Component;
}

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  steps: string[];
  activeStep?: number;
}

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
  open?: boolean;
  setOpen?: () => void;
}

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content?: any;
  direction?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-top'
    | 'left-bottom'
    | 'right-top'
    | 'right-bottom';
  delay?: number;
  verticalAlign?: number;
  horizontalAlign?: number;
}
