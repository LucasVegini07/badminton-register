import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey7};

  div {
    flex: 1;
  }

  aside {
    flex: 1;
    background-image: url('generic_error.svg');
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: 64px;

    div {
      display: none;
    }

    aside {
      background-image: url('generic_error_mobile.svg');
      background-position: right;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
    padding: 0 16px;

    aside {
      background-position: bottom;
    }
  }
`;

export const Content = styled.main`
  display: flex;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1440px;
    padding: 0 64px;
    gap: 32px;

    button {
      width: 200px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 76px 0 112px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
    height: auto;
    width: auto;

    main {
      align-items: center;
      gap: 8px;
      width: auto;

      button {
        margin-top: 24px;
      }
    }
  }
`;
