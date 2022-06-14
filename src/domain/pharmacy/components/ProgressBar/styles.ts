import styled from 'styled-components';

interface WrapperProps {
  isBothType: boolean;
}

interface ProgressProps {
  isBothType: boolean;
  percentage: number;
  progressColor: string;
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: 328px;

  main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    div {
      &:first-of-type {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-self: center;
        opacity: ${({ isBothType }) => (isBothType ? 1 : 0)};

        svg:last-of-type {
          margin-left: 2px;
        }
      }

      &:last-of-type {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-self: center end;

        svg:last-of-type {
          margin-left: 2px;
        }
      }
    }
  }
`;

export const Progress = styled.div<ProgressProps>`
  position: relative;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey7};
  margin: 4px 0;

  div {
    &:first-of-type {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 50%;
      height: 100%;
      border-right: 1px solid #787878;
      opacity: ${({ isBothType }) => (isBothType ? 1 : 0)};
    }

    &:last-of-type {
      background-color: ${({ progressColor }) => progressColor};
      border-radius: 4px;
      height: 8px;
      max-width: ${({ percentage }) => percentage}%;
    }
  }
`;
