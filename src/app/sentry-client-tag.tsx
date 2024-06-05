'use client';

import { getCookie, handleDeviceDetection } from '@/lib/utils';
import * as Sentry from '@sentry/nextjs';
import { useEffect, PropsWithChildren } from 'react';

export const SentryClientTag = ({ children }: PropsWithChildren<{}>) => {
  useEffect(() => {
    const dismissedDiscoverOrders =
      !!getCookie('dismissedDiscoverOrders') ?? false;

    Sentry.setTag('dismissed-discover-orders', dismissedDiscoverOrders);

    const deviceType = handleDeviceDetection();

    Sentry.setTag('device-type', deviceType);
  }, []);

  return children;
};
