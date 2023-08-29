'use client';

import Link from 'next/link';
import Image from 'next/image';

import twitterLogo from '@/assets/twitter-logo.svg';
import lenster from '@/assets/link-lenster.svg';
import github from '@/assets/link-github.svg';
import ekoToken from '@/assets/ekoToken-logo.svg';
import gainforestLogo from '@/assets/gainforest.logo.svg';

const icons = [
  {
    icon: twitterLogo,
    alt: 'Twitter Icon',
    href: 'https://twitter.com/ForkForest',
    className: '',
  },
  {
    icon: gainforestLogo,
    alt: 'Gainforest Logo',
    href: 'https://gainforest.app/',
    className: '',
  },
  { icon: lenster, alt: 'Lenster Logo', href: 'https://lenster.xyz/u/forkdao', className: '' },
  { icon: github, alt: 'Github Logo', href: 'https://github.com/Fork-DAO', className: 'w-[30px]' },
  { icon: ekoToken, alt: 'EkoToken Logo', href: 'https://ekonavi.com/organizacao-social/fork-forest', className: '' },
];

export const Footer = () => {
  return (
    <footer className='mt-5 pb-3'>
      <div className='flex items-center justify-center gap-3'>
        {icons.map(({ alt, icon, href, className }) => (
          <Link key={alt} target='_blank' href={href}>
            <Image src={icon as any} alt={alt} className={className} />
          </Link>
        ))}
      </div>
      <p className='text-center text-sm'> &#169; 2023 Fork Dao</p>
    </footer>
  );
};
