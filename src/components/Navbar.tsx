'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import forestLogo from '@/assets/forest-logo.svg';
import twitterLogo from '@/assets/twitter-logo.svg';
import lenster from '@/assets/link-lenster.svg';
import github from '@/assets/link-github.svg';
import ekoToken from '@/assets/ekoToken-logo.svg';
import gainforestLogo from '@/assets/gainforest.logo.svg';
import iconHamb from '@/assets/hamburger_on_off.svg';

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

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const t = useTranslations('index.buttons');
  const pathname = usePathname();

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, 750);
    }
  }, [open]);

  return (
    <nav className={`flex items-center justify-between px-[10vw] py-5 ${open ? 'open' : ''}`}>
      <Image src={forestLogo} alt='Logo' />

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: '100vw',
            }}
            exit={{
              width: 0,
              transition: { delay: 0.5, duration: 0.3 },
            }}
            className='sidebar fixed right-0 top-0 z-50  h-screen w-screen  py-[10vh]'
          >
            <motion.div
              className='relative flex h-full flex-col items-center justify-between'
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
            >
              <motion.button
                className='absolute right-0 cursor-pointer'
                onClick={() => setOpen(false)}
                variants={itemVariants}
              >
                <Image src={iconHamb} alt='Icon' />
              </motion.button>
              <motion.div variants={itemVariants}>
                <Image src={forestLogo} alt='Logo' />
              </motion.div>
              <motion.div className='flex flex-col items-center justify-center gap-5' variants={itemVariants}>
                <div className='flex justify-center gap-2'>
                  <Link href={'/es'} className={`${pathname === '/es' ? 'font-bold' : ''}`}>
                    ESP
                  </Link>
                  <p>-</p>
                  <Link href={'/en'} className={`${pathname === '/' ? 'font-bold' : ''}`}>
                    EN
                  </Link>
                </div>

                <Link href={''}>Fork Forest 2</Link>
                <Link href={''}>Fork Forest 1</Link>
                <Link
                  href={'https://open.spotify.com/show/3mbOZyvQj2rGUpaBuXbgDk?si=wxjKFRorQ8S2BlQdZq9Z5g'}
                  target='_blank'
                >
                  {t('spotify')}
                </Link>
                <Link
                  href={
                    'https://explorer.gitcoin.co/#/round/10/0xb6be0ecafdb66dd848b0480db40056ff94a9465d/0xb6be0ecafdb66dd848b0480db40056ff94a9465d-72'
                  }
                  target='_blank'
                >
                  {t('gitcoin')}
                </Link>
              </motion.div>

              <motion.div className='flex items-center justify-center gap-3' variants={itemVariants}>
                {icons.map(({ alt, icon, href, className }) => (
                  <Link key={alt} target='_blank' href={href}>
                    <Image src={icon as any} alt={alt} className={className} />
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className='hidden items-center gap-4 md:flex'>
        <Link href={''} className='transition-all duration-300 hover:font-semibold'>
          Fork Forest 2
        </Link>
        <Link href={''} className='transition-all duration-300 hover:font-semibold'>
          Fork Forest 1
        </Link>
        <Link
          href={'https://open.spotify.com/show/3mbOZyvQj2rGUpaBuXbgDk?si=wxjKFRorQ8S2BlQdZq9Z5g'}
          target='_blank'
          className='transition-all duration-300 hover:font-semibold'
        >
          {t('spotify')}
        </Link>
        <Link
          href={
            'https://explorer.gitcoin.co/#/round/10/0xb6be0ecafdb66dd848b0480db40056ff94a9465d/0xb6be0ecafdb66dd848b0480db40056ff94a9465d-72'
          }
          className='transition-all duration-300 hover:font-semibold'
        >
          {t('gitcoin')}
        </Link>
      </div>

      <button
        className='flex flex-col items-center justify-center gap-2 p-[2px] md:hidden'
        onClick={() => setOpen(!open)}
      >
        <span className='mx-auto block h-[2px] w-[15px] bg-black' />
        <span className='block h-[2px] w-[25px] bg-black' />
        <span className='mx-auto block h-[2px] w-[15px] bg-black' />
      </button>
    </nav>
  );
};
