/* eslint-disable no-unused-vars */
import React from 'react';

import { OfferServiceSkeleton } from '@/domain/offer/services/OfferServiceSkeleton';
import { Container } from '@develop-fapp/ui-kit-fapp';

import HomePageHeader from './components/header';

interface HomePageProps {
  offerService: OfferServiceSkeleton;
  title: string;
}

export const Home = ({ offerService, title }: HomePageProps): JSX.Element => {
  return (
    <Container container="fluid">
      <HomePageHeader />
    </Container>
  );
};
