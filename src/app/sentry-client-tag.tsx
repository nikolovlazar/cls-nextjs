'use client';

import { getCookie, getTestVariant } from '@/lib/utils';
import * as Sentry from '@sentry/nextjs';
import { useEffect, PropsWithChildren } from 'react';

export const SentryClientTag = ({ children }: PropsWithChildren<{}>) => {
  useEffect(() => {
    const dismissedDiscoverOrders =
      !!getCookie('dismissed-discover-orders') ?? false;

    Sentry.setTag('dismissed-discover-orders', dismissedDiscoverOrders);

    const testVariant = getTestVariant();

    Sentry.setTag('test-variant', testVariant);
  }, []);

  return children;
};
