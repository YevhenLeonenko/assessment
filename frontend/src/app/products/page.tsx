import api from '../../api';
import { ProductsList } from '@/components/ProductsList';

const Page = async () => {
  const products = await api.products.getAll();
  return (
    <>
      <ProductsList products={products} />
    </>
  );
};

export default Page;
