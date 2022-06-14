import { useTheme } from 'styled-components';

import { useBreakpoint } from '@/shared/hooks/useBreakpoint';
import { Button, Text } from '@develop-fapp/ui-kit-fapp';

import { Wrapper, Content } from './styles';

interface GenericErrorProps {
  onReloadPage: () => void;
}

export const GenericError: React.FC<GenericErrorProps> = ({ onReloadPage }) => {
  const { colors } = useTheme();

  const { variant: title } = useBreakpoint({ base: 'h1', md: 'h3' });
  const { variant: label } = useBreakpoint({ base: 'h5', md: 'h8' });

  return (
    <Wrapper>
      <div />
      <Content>
        <main>
          <Text color={colors.error} variant={title} weight="bold">
            Algo deu errado!
          </Text>
          <Text variant={label} weight="bold">
            Encontramos um erro inesperado
          </Text>
          <Text variant={label}>Tente recarregar a página</Text>

          <Button onClick={onReloadPage} variant="contained">
            Recarregar página
          </Button>
        </main>
      </Content>
      <aside />
    </Wrapper>
  );
};
