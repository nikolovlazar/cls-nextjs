import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cookies } from 'next/headers';
import { dismissDiscoverOrders } from './actions';
import { wait } from '@/lib/utils';

export const DiscoverOrders = async () => {
  const cookieStore = cookies();
  const dismissedDiscoverOrders =
    cookieStore.get('dismissed-discover-orders') ?? false;

  await wait(500);

  return dismissedDiscoverOrders ? (
    <></>
  ) : (
    <Card className='sm:col-span-2'>
      <CardHeader className='pb-3'>
        <CardTitle>Discover Orders</CardTitle>
        <CardDescription className='max-w-lg text-balance leading-relaxed'>
          See every detail of your orders historically by day, week, month, or
          even by product or groups of products. Get insights on your sales
          performance and make better decisions. Get a tour to learn more about
          how to use the Orders screen to its full potential.
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex gap-4'>
        <Button>Get a Tour</Button>
        <form action={dismissDiscoverOrders}>
          <Button type='submit' variant='secondary'>
            Dismiss
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};
