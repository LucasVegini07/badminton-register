import { useState } from 'react';

import { Bag, TickCircle } from 'iconsax-react';
import { useTheme } from 'styled-components';

import { formatPrice } from '@/shared/utils';
import { Text } from '@develop-fapp/ui-kit-fapp';

import { BikeIcon } from '../icons/BikeIcon';
import { Wrapper, Progress } from './styles';

interface ProgressBarProps {
  name: string;
  minimumOrderValue: number;
  minimumFreeShipping: number;
  subtotal: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  name,
  minimumOrderValue,
  minimumFreeShipping,
  subtotal,
}) => {
  const [type] = useState<'both' | 'order' | 'delivery'>(() => {
    if (minimumOrderValue > 0 && minimumFreeShipping > 0) return 'both';
    if (minimumOrderValue > 0) return 'order';
    return 'delivery';
  });

  const { colors } = useTheme();

  const getCurrentPercentage = () => {
    if (type === 'order') {
      return (subtotal / minimumOrderValue) * 100;
    }

    if (type === 'delivery') {
      return (subtotal / minimumFreeShipping) * 100;
    }

    return subtotal < minimumOrderValue
      ? (subtotal / minimumOrderValue) * 50
      : (subtotal / minimumFreeShipping) * 100;
  };

  const getProgressColor = () => {
    if (getCurrentPercentage() >= 100) return colors.success;

    if (type === 'both') {
      return subtotal >= minimumOrderValue ? colors.alert : colors.error;
    }

    if (type === 'order') return colors.error;

    return colors.alert;
  };

  const getLeftIconColor = (isDelivery = false) => {
    if (
      getCurrentPercentage() >= 100 ||
      (type === 'both' && !isDelivery && subtotal >= minimumOrderValue)
    )
      return colors.grey2;

    return colors.grey4;
  };

  const getRightIconColor = (isDelivery = false) => {
    if (
      getCurrentPercentage() >= 100 ||
      (type === 'both' && !isDelivery && subtotal >= minimumOrderValue)
    )
      return colors.success;

    return colors.grey4;
  };

  const getFooterMessage = () => {
    if (getCurrentPercentage() >= 100) {
      if (minimumFreeShipping > 0) {
        return 'Parabéns! Você ganhou frete grátis';
      }

      return 'Você completou o pedido mínimo';
    }

    const missingValueOrder = formatPrice(minimumOrderValue - subtotal);
    const missingValueDelivery = formatPrice(minimumFreeShipping - subtotal);

    const missingValueOrderLabel = `Faltam ${missingValueOrder} para completar o pedido mínimo`;
    const missingValueDeliveryLabel = `Faltam ${missingValueDelivery} para você ganhar frete grátis`;

    if (type === 'both') {
      return subtotal >= minimumOrderValue
        ? missingValueDeliveryLabel
        : missingValueOrderLabel;
    }

    if (type === 'order') return missingValueOrderLabel;

    return missingValueDeliveryLabel;
  };

  return (
    <Wrapper isBothType={type === 'both'}>
      <main>
        <Text variant="h10" weight="medium">
          {name}
        </Text>
        <div>
          <Bag size={10} color={getLeftIconColor()} variant="Outline" />
          <TickCircle size={10} color={getRightIconColor()} variant="Outline" />
        </div>
        <div>
          <BikeIcon color={getLeftIconColor(true)} />
          <TickCircle
            size={10}
            color={getRightIconColor(true)}
            variant="Outline"
          />
        </div>
      </main>
      <Progress
        isBothType={type === 'both'}
        percentage={getCurrentPercentage()}
        progressColor={getProgressColor()}
      >
        <div />
        <div />
      </Progress>
      <Text variant="h10" weight="medium">
        {getFooterMessage()}
      </Text>
    </Wrapper>
  );
};
