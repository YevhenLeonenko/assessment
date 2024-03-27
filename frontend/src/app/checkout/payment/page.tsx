'use client';
import { CheckoutSteps } from '@/components/CheckoutSteps';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { useForm } from 'react-hook-form';
import { CheckoutContext, paymentValues as defaultValues } from '@/context/CheckoutProvider';
import { PaymentDetails } from '@/types';
import { useContext } from 'react';
import { Field } from '@/components/Field';
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  const { setPaymentDetails } = useContext(CheckoutContext);
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentDetails>({ defaultValues });

  const onSubmit = (data: PaymentDetails) => {
    setPaymentDetails(data);
    router.push('/checkout/confirmation');
  };

  return (
    <>
      <CheckoutSteps active={2} />
      <form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
        <Field
          title="Cardholder Name"
          error={errors.cardholder}
          {...register('cardholder', { required: 'Please, enter valid cardholder name' })}
        />
        <Field
          title="Card number"
          error={errors.cardNumber}
          {...register('cardNumber', { required: 'Please, enter valid card number' })}
        />
        <Field
          title="Card Expiration Date"
          error={errors.cardExpiration}
          {...register('cardExpiration', { required: 'Please, enter valid card expiration date' })}
        />
        <Field
          title="CVV Code"
          error={errors.cvv}
          {...register('cvv', { required: 'Please, enter valid cvv code' })}
        />
        <Field
          title="Billing Address"
          error={errors.billingAddress}
          {...register('billingAddress', { required: 'Please, enter valid Billing Address' })}
        />
        <Button type="submit" variant="primary">
          Continue
        </Button>
        <Link href="/checkout/address">
          <Button variant="secondary">
            Go Back
          </Button>
        </Link>
      </form>
    </>
  );
};

export default Page;
