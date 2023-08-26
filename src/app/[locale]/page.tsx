'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ContainerButtons } from '../../components/ContainerButtons';
import { useTranslations } from 'next-intl';

import twitterLogo from '@/assets/twitter-logo.svg';
import lenster from '@/assets/link-lenster.svg';
import github from '@/assets/link-github.svg';
import ekoToken from '@/assets/ekoToken-logo.svg';
import gainforestLogo from '@/assets/gainforest.logo.svg';
import forkdaoLogo from '@/assets/forkdao-logo.svg';
import forestLogo from '@/assets/forest-logo.svg';
import photos from '@/assets/photos.svg';

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

export default function Home() {
  const t = useTranslations('index');

  return (
    <>
      <main className='relative mx-[10vw] flex-1'>
        <h1 className='pt-6 text-center text-[34px] font-extrabold uppercase leading-[36px] text-custom-green'>
          {t('title')}
        </h1>
        <p className='my-8 text-center leading-[22px] md:mx-auto md:w-[70%] md:text-[22px]'>{t('description')}</p>

        <div className='flex items-center justify-center'>
          <Image src={gainforestLogo} alt='Gaintforest Logo' />
          <Image src={forkdaoLogo} alt='Fork Dao Logo' />
          <Image src={ekoToken} alt='Eko Token Logo' />
        </div>

        <Image src={photos} alt='Eko Token Logo' className='mx-auto my-12 w-[400px]' />

        <ContainerButtons />
      </main>
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
    </>
  );
}
