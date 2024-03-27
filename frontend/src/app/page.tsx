import Link from 'next/link';

export default function Home() {
  return (
    <Link href='/products' className='homepage-link'>
      Shop
    </Link>
  );
}
