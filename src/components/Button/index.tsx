import React from 'react';
import { ButtonComponent, SvgStart, SvgEnd } from './styles';
import { ButtonProps } from '../../types/index';

export const Button: React.FC<ButtonProps> = ({
  startIcon,
  endIcon,
  variant,
  color,
  children,
  size,
  ...props
}) => {
  return (
    <ButtonComponent variant={variant} color={color} size={size} {...props}>
      {startIcon && <SvgStart data-testid="svg-start">{startIcon}</SvgStart>}
      {children}
      {endIcon && <SvgEnd data-testid="svg-end">{endIcon}</SvgEnd>}
    </ButtonComponent>
  );
};
