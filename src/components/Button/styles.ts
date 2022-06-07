import styled from 'styled-components';
import { ColorPallete, Theme } from '../../themes/defaults';
import { ButtonProps } from '../../types/index';

interface svgProps {
  size?: 'large' | 'medium' | 'small';
}

export const ButtonComponent = styled.button<ButtonProps>`
  background-color: ${props =>
    props.variant === 'outlined'
      ? ColorPallete.white
      : props.color === 'success'
      ? ColorPallete.success
      : props.color === 'error'
      ? ColorPallete.error
      : props.disabled
      ? ColorPallete.grey6
      : ColorPallete.green2};

  color: ${props =>
    props.disabled
      ? ColorPallete.grey3
      : props.variant === 'contained'
      ? ColorPallete.white
      : props.color === 'success'
      ? ColorPallete.success
      : props.color === 'error'
      ? ColorPallete.error
      : ColorPallete.green2};
  border: ${props =>
    props.variant === 'contained'
      ? 'none'
      : props.color === 'success'
      ? `1px solid ${ColorPallete.success}`
      : props.color === 'error'
      ? `1px solid ${ColorPallete.error}`
      : props.disabled
      ? `1px solid ${ColorPallete.grey6}`
      : `1px solid ${ColorPallete.green2}`};

  padding: ${props =>
    props.size === 'small'
      ? '6px 12px'
      : props.size === 'medium'
      ? '8px 16px'
      : '12px 24px'};
  font-size: ${props =>
    props.size === 'small'
      ? Theme.typography.heading.h10
      : props.size === 'medium'
      ? Theme.typography.heading.h9
      : Theme.typography.heading.h7};
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;

  height: ${props =>
    props.size === 'small'
      ? '22px'
      : props.size === 'medium'
      ? '31px'
      : '40px'};

  width: ${props => props.fullWidth && '100%'};

  border-radius: ${props => (props.fullWidth ? '0px' : Theme.border.radius.md)};

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover:not(:disabled) {
    background-color: ${props =>
      (props.color === 'primary' || !props.color) &&
      props.variant === 'contained' &&
      ColorPallete.green3};

    color: ${props =>
      (props.color === 'primary' || !props.color) &&
      props.variant === 'contained'
        ? ColorPallete.green1
        : (props.color === 'primary' || !props.color) &&
          props.variant === 'outlined' &&
          ColorPallete.green3};

    border: ${props =>
      (props.color === 'primary' || !props.color) &&
      props.variant === 'outlined' &&
      `1px solid ${ColorPallete.green3}`};
  }

  :active:not(:disabled) {
    background-color: ${props =>
      (props.color === 'primary' || !props.color) &&
      props.variant === 'contained' &&
      ColorPallete.green1};

    color: ${props =>
      (props.color === 'primary' || !props.color) &&
      props.variant === 'contained'
        ? ColorPallete.white
        : (props.color === 'primary' || !props.color) &&
          props.variant === 'outlined' &&
          ColorPallete.green1};

    border: ${props =>
      (props.color === 'primary' || !props.color) &&
      props.variant === 'outlined' &&
      `1px solid ${ColorPallete.green1}`};
  }
`;

export const SvgStart = styled.div<svgProps>`
  display: flex;
  margin-right: 10px;
  align-content: center;
  font-size: ${props =>
    props.size === 'small'
      ? Theme.typography.heading.h10
      : props.size === 'medium'
      ? Theme.typography.heading.h9
      : Theme.typography.heading.h7};
`;

export const SvgEnd = styled.div<svgProps>`
  display: flex;
  align-content: center;
  margin-left: 10px;
  font-size: ${props =>
    props.size === 'small'
      ? Theme.typography.heading.h10
      : props.size === 'medium'
      ? Theme.typography.heading.h9
      : Theme.typography.heading.h7};
`;
