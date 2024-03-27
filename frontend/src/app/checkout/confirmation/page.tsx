'use client';
import api from '@/api';
import { CheckoutSteps } from '@/components/CheckoutSteps';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { useContext, useState } from 'react';
import { CheckoutContext } from '@/context/CheckoutProvider';
import { CartContext } from '@/context/CartProvider';
import { CartProduct } from '@/components/CartProduct';
import { Loader } from '@/components/Loader';

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { paymentDetails, userDetails } = useContext(CheckoutContext);
  const { products, total } = useContext(CartContext);

  const handleOrder = async () => {
    setIsLoading(true);
    const order = {
      products,
      paymentDetails,
      userDetails
    };
    await api.orders.create(order).then(() => {
      setIsLoading(false);
      alert('Order created successfully');
    });
  };

  return (
    <>
      {isLoading ? <div className="checkout-overlay"><Loader /></div> : null}
      <CheckoutSteps active={3} />
      <h1>Does everything look correct?</h1>
      <div>
        <div>
          <h2 className="checkout-title">Your payment details:</h2>
          <p>{userDetails.firstName}</p>
          <p>{userDetails.lastName}</p>
          <p>{userDetails.email}</p>
          <p>{userDetails.address}</p>
        </div>
        <div className="products-list">
          <h2 className="checkout-title">Your order:</h2>
          <div className="checkout-products-list">
            {products.map(product => <CartProduct key={product.id} product={product} />)}
          </div>
        </div>
      </div>
      <Button disabled={isLoading} onClick={handleOrder} variant="primary">
        Yes
      </Button>
      <Link href="/checkout/payment">
        <Button variant="secondary">
          No, go Back
        </Button>
      </Link>
    </>
  );
};

export default Page;
