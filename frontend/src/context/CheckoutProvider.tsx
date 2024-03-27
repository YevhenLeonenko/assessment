'use client';

import { createContext, ReactNode, useState } from 'react';
import { CheckoutContextType, PaymentDetails, UserDetails } from '@/types';

export const userValues: UserDetails = {
  firstName: '',
  lastName: '',
  address: '',
  email: ''
};

export const paymentValues: PaymentDetails = {
  billingAddress: '',
  cardholder: '',
  cardNumber: '',
  cvv: '',
  cardExpiration: ''
};

export const CheckoutContext = createContext<CheckoutContextType>({
  userDetails: userValues,
  paymentDetails: paymentValues,
  setUserDetails: () => null,
  setPaymentDetails: () => null
});


export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({ ...userValues });
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({ ...paymentValues });

  return <CheckoutContext.Provider value={{
    userDetails,
    paymentDetails,
    setUserDetails,
    setPaymentDetails
  }}>
    {children}
  </CheckoutContext.Provider>;
};
