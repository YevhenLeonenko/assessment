import api from '@/api';
import Link from 'next/link';
import { Heart } from 'react-feather';

import styles from './styles.module.scss';
import { Navigation } from './components/Navigation';
import { BasicInformation } from './components/BasicInformation';
import { BuyingOptions } from './components/BuyingOptions';
import { Rating } from './components/Rating';
import { Accordion } from '@/components/Accordion';
import { Delivery } from '@/app/products/[id]/components/Delivery';
import { ProductsList } from '@/components/ProductsList';
import { Title } from '@/components/ProductsList/Title';

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await api.products.getOneById(+id);
  const additionalProducts = await api.products.getAll({ params: { sort: 'DESC', limit: 4 } });
  const recommendedProducts = await api.products.getAll({ params: { sort: 'ASC', limit: 4 } });
  const sameManufacturer = await api.products.getAll({ params: { manufacturerId: product.manufacturer.id } });

  if (!product) return <div>Not Found</div>;

  return (
    <>
      <div className={styles.gallery}>
        <Navigation />
        <div className={styles.carousel}>
          <img className={styles.image} src={product.image} alt={product.title} />
        </div>
        <button className={styles.addToFavourites}>
          <Heart />
        </button>
      </div>
      <BasicInformation manufacturer={product.manufacturer.name} title={product.title} price={product.price} />
      <BuyingOptions product={product} />
      <div className={styles.additionalInformation}>
        <Accordion title="More Info">
          <p>{product.description}</p>
        </Accordion>
        <Accordion title="Material">
          <p>{product.description}</p>
        </Accordion>
        <Accordion title="Ratings" panelContent={<Rating value={4} />}>
          <p>{product.description}</p>
        </Accordion>
      </div>
      <Delivery />
      <ProductsList scrollable products={additionalProducts}>
        <Title title="For you">
          <Link href="/products" className={styles.titleLink}>See all</Link>
        </Title>
      </ProductsList>
      <ProductsList products={recommendedProducts} className={styles.productsGrey}>
        <Title title="Complete the look">
          <Link href="/products" className={styles.titleLink}>See all</Link>
        </Title>
      </ProductsList>
      <ProductsList scrollable products={sameManufacturer}>
        <Title title={`More from ${product.manufacturer.name}`}>
          <Link href="/products" className={styles.titleLink}>See all</Link>
        </Title>
      </ProductsList>
    </>
  );
};
export default Page;
