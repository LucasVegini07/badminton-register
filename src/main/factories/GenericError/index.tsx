import { useRouter } from 'next/router';

import { GenericError } from '@/presentation/GenericError';

interface GenericErrorPageFactoryProps {
  isFourOhFour?: boolean;
}

export const GenericErrorPageFactory: React.FC<
  GenericErrorPageFactoryProps
> = ({ isFourOhFour = false }) => {
  const { back, push } = useRouter();

  const handleOnReloadPage = () => {
    if (isFourOhFour) {
      return push('/');
    }

    return back();
  };

  return <GenericError onReloadPage={handleOnReloadPage} />;
};
