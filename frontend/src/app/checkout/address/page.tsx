'use client';
import { CheckoutSteps } from '@/components/CheckoutSteps';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { useForm } from 'react-hook-form';
import { CheckoutContext, userValues as defaultValues } from '@/context/CheckoutProvider';
import { UserDetails } from '@/types';
import { useContext } from 'react';
import { Field } from '@/components/Field';
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  const { setUserDetails } = useContext(CheckoutContext);
  const { register, handleSubmit, formState: { errors } } = useForm<UserDetails>({ defaultValues });

  const onSubmit = (data: UserDetails) => {
    setUserDetails(data);
    router.push('/checkout/payment');
  };

  return (
    <>
      <CheckoutSteps active={1} />
      <form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
        <Field
          title="First Name"
          error={errors.firstName}
          {...register('firstName', { required: 'Please, enter valid First Name' })}
        />
        <Field
          title="Last Name"
          error={errors.lastName}
          {...register('lastName', { required: 'Please, enter valid Last Name' })}
        />
        <Field
          title="Email"
          error={errors.email}
          {...register('email', { required: 'Please, enter valid Email' })}
        />
        <Field
          title="Address"
          error={errors.address}
          {...register('address', { required: 'Please, enter valid Address' })}
        />
        <Button type="submit" variant="primary">
          Continue
        </Button>
        <Link href="/cart">
          <Button variant="secondary">
            Go Back
          </Button>
        </Link>
      </form>
    </>
  );
};

export default Page;
