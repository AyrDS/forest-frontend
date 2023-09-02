'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useTranslations } from 'next-intl';

import forestLogo from '@/assets/forest-logo.svg';
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

const path01Variants = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 9.5L24 9.5' },
};

const path02Variants = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L15 14.5' },
};

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

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('/en');
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLElement | null>(null);

  const t = useTranslations('index.buttons');
  const pathname = usePathname();
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const elementBottom = ref.current.getBoundingClientRect().bottom;

        if (elementTop >= window.innerHeight || elementBottom <= 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname.startsWith('/es')) {
      setCurrentLang('/es');
    } else {
      setCurrentLang('/en');
    }

    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const startAnimation = async () => {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    };
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      startAnimation();
      setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, 750);
    }
  }, [open]);

  useEffect(() => {}, []);

  const onClick = async () => {
    setOpen(!open);
    if (!open) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Agrega un desplazamiento suave
    });
  };

  return (
    <nav
      className={`flex w-full items-center justify-between px-[10vw] py-5  md:px-[2vw] lg:px-[5vw] ${
        open ? 'open' : ''
      }`}
      ref={ref}
    >
      <Link href={`${currentLang}`}>
        <Image src={forestLogo} alt='Logo' />
      </Link>

      <AnimatePresence>
        {!isVisible && (
          <motion.button
            className='fixed bottom-5 right-5 z-50 animate-bounce rounded-full p-1 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={scrollToTop}
          >
            <svg
              className='h-6 w-6 rotate-180 text-black'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

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
            className='sidebar fixed right-0 top-[76px] z-50 h-[calc(100svh-76px)] w-screen py-5'
          >
            <motion.div
              className='relative flex h-full flex-col items-center justify-between'
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
            >
              <motion.div className='flex flex-col items-center justify-center gap-5' variants={itemVariants}>
                <div className='mt-[75%] flex justify-center gap-2'>
                  <Link href={'/es'} className={`${pathname.startsWith('/es') ? 'font-bold' : ''}`}>
                    ESP
                  </Link>
                  <p>-</p>
                  <Link href={'/en'} className={`${!pathname.startsWith('/es') ? 'font-bold' : ''}`}>
                    EN
                  </Link>
                </div>

                <Link
                  href={`${currentLang}/forkforest2`}
                  className={`${pathname.includes('/forkforest2') ? 'font-bold' : ''}`}
                >
                  Fork Forest 2
                </Link>
                <Link
                  href={`${currentLang}/forkforest1`}
                  className={`${pathname.includes('/forkforest1') ? 'font-bold' : ''}`}
                >
                  Fork Forest 1
                </Link>
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
        <div className='flex justify-center gap-2'>
          <Link href={'/es'} className={`${pathname.startsWith('/es') ? 'font-bold' : ''}`}>
            ESP
          </Link>
          <p>-</p>
          <Link href={'/en'} className={`${!pathname.startsWith('/es') ? 'font-bold' : ''}`}>
            EN
          </Link>
        </div>
        <Link
          href={`${currentLang}/forkforest2`}
          className={`transition-all duration-300 hover:font-semibold ${
            pathname.includes('/forkforest2') ? 'font-bold' : ''
          }`}
        >
          Fork Forest 2
        </Link>
        <Link
          href={`${currentLang}/forkforest1`}
          className={`transition-all duration-300 hover:font-semibold ${
            pathname.includes('/forkforest1') ? 'font-semibold' : ''
          }`}
        >
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

      <button className='flex flex-col items-start justify-center gap-2 p-[2px] md:hidden' onClick={onClick}>
        <svg width='36' height='36' viewBox='0 0 24 24'>
          <motion.path
            {...path01Variants.closed}
            animate={path01Controls}
            transition={{ duration: 0.2 }}
            stroke='#000'
          />
          <motion.path
            {...path02Variants.closed}
            animate={path02Controls}
            transition={{ duration: 0.2 }}
            stroke='#000'
          />
        </svg>
      </button>
    </nav>
  );
};
