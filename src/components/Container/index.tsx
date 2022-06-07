import React from 'react';
import { ContainerProps } from '../../types/index';
import {
  ContainerComponent,
  ContainerBox as BOX,
  ContainerTooltip as BOXTOOLTIP,
} from './styles';

export const Container: React.FC<ContainerProps> = props => (
  <ContainerComponent {...props} data-testid="container">
    {props.children}
  </ContainerComponent>
);

export const ContainerBox: React.FC<ContainerProps> = props => (
  <BOX {...props} data-testid="container-box">
    {props.children}
  </BOX>
);

export const ContainerTooltip: React.FC<ContainerProps> = props => (
  <BOXTOOLTIP {...props} data-testid="container-box">
    {props.children}
  </BOXTOOLTIP>
);
