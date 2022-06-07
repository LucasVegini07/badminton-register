import styled from 'styled-components';
import Theme from '../../themes/defaults';
import { ContainerProps } from '../../types/index';

export const ContainerComponent = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};

  max-width: ${props =>
    props.container
      ? Theme.breakpoints[props.container]
      : Theme.breakpoints.md};
  width: 100%;

  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};

  font-family: ${Theme.typography.fontFamily};
`;

export const ContainerBox = styled(ContainerComponent)`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  max-width: 100%;

  background: #ffffff !important;
  transition: background-color 0.3s;
  padding: 30px 20px;

  border-radius: 1px;

  box-shadow: 0px 0px 10px 0px rgba(73, 73, 125, 0.1);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(73, 73, 125, 0.1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(73, 73, 125, 0.1);
`;

export const ContainerTooltip = styled(ContainerComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  background: #e5e5e5 !important;
  transition: background-color 0.3s;
  padding: 30px 20px;

  border-radius: 1px;

  box-shadow: 0px 0px 10px 0px rgba(73, 73, 125, 0.1);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(73, 73, 125, 0.1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(73, 73, 125, 0.1);
`;
