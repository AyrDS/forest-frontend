'use client';

import Image from 'next/image';
import urkku from '@/assets/urkku.jpg';
import { useTranslations } from 'next-intl';
import { Accordion } from '@/components/Accordion';
import { CustomLink } from '@/components/CustomLink';
import useEmblaCarousel from 'embla-carousel-react';
import gal1 from '@/assets/gallery/gallery-1.jpg';
import gal2 from '@/assets/gallery/gallery-2.jpg';
import gal3 from '@/assets/gallery/gallery-3.jpg';
import gal4 from '@/assets/gallery/gallery-4.jpg';
import gal5 from '@/assets/gallery/gallery-5.jpg';
import gal6 from '@/assets/gallery/gallery-6.jpg';
import gal7 from '@/assets/gallery/gallery-7.jpg';
import gal8 from '@/assets/gallery/gallery-8.jpg';
import gal9 from '@/assets/gallery/gallery-9.jpg';
import gal10 from '@/assets/gallery/gallery-10.jpg';
import gal11 from '@/assets/gallery/gallery-11.jpg';
import gal12 from '@/assets/gallery/gallery-12.jpg';
import arrow from '@/assets/chevron.svg';
import nft from '@/assets/nft.svg';
import urkkuMap from '@/assets/urkku-map.svg';
import { useCallback } from 'react';

const images = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11, gal12];

const Forest2 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const t = useTranslations('forest2');

  return (
    <main className='relative mx-[10vw] flex-1'>
      <section className='flex flex-col gap-10'>
        <div>
          <h1 className='text-center text-[24px] font-semibold leading-[26px] xl:text-[30px]'>Fork Forest</h1>
          <h2 className='text-center text-[34px] font-extrabold leading-[36px] xl:text-[40px]'>Urkku</h2>
        </div>
        <Image src={urkku} alt='Los Cerrillos' className='mx-auto w-[300px] rounded-3xl xl:w-[500px]' />
      </section>

      <section className='mt-10'>
        <h3 className='text-center text-[24px] font-semibold leading-[26px] xl:text-start'>{t('title')}</h3>
        <p className='mt-4 text-[16px] leading-[22px] xl:text-[22px] xl:leading-[28px]'>{t('description1')}</p>
        <p className='mt-2 text-[16px] leading-[22px] xl:text-[22px] xl:leading-[28px]'>{t('description2')}</p>
      </section>

      <Accordion label={t('financing.title')}>
        <div className='pb-5 text-[16px] leading-[22px] xl:mx-auto xl:pb-0 xl:text-[22px] xl:leading-[28px]'>
          <p>{t('financing.text1')}</p>
          <p>{t('financing.text2')}</p>

          <p className='mt-2'>{t('financing.text3')}</p>

          <p className='mt-2'>{t('financing.text4')}</p>
          <p>{'(0x3DF9AA7083FFA957b6B83c8514A792CE38C57E22)'}</p>

          <p className='mt-2'>{t('financing.text5')}</p>
          <p>{'(0x3a10Cef888a6F50b1cbfcFD0217c1f705a33D8f3)'}</p>

          <Image src={nft} alt='NFT Forest' className='mx-auto my-10' />

          <CustomLink href='https://opensea.io/es/collection/forestnft-1' label={t('financing.link')} />
        </div>
      </Accordion>

      <Accordion label={t('terrain.title')}>
        <p className='pb-5 text-[16px] leading-[22px] xl:mx-auto xl:pb-0 xl:text-[22px] xl:leading-[28px]'>
          {t('terrain.description')}
        </p>
        <Image src={urkkuMap} alt='Terreno Urkku' className='mx-auto' />
      </Accordion>

      <Accordion label={t('communication.title')}>
        <p className='mb-10 pb-5 text-[16px] leading-[22px] xl:mx-auto xl:pb-0 xl:text-[22px] xl:leading-[28px]'>
          {t('communication.description')}
        </p>
        <CustomLink
          href='https://open.spotify.com/show/3mbOZyvQj2rGUpaBuXbgDk?si=wxjKFRorQ8S2BlQdZq9Z5g&nd=1&dlsi=90d35bb2db75433c'
          label='Podcast'
        />
      </Accordion>

      <Accordion label={t('work.title')}>
        <div className='pb-5 text-[16px] leading-[22px] xl:mx-auto xl:pb-0 xl:text-[22px] xl:leading-[28px]'>
          <p>{t('work.text1')}</p>
          <p className='mt-2'>{t('work.text2')}</p>
          <p className='mt-2'>{t('work.text3')}</p>
        </div>
      </Accordion>

      <Accordion label={t('gallery')}>
        <div className='embla relative overflow-hidden' ref={emblaRef}>
          <div className='embla__container flex'>
            {images.map((img, i) => (
              <div key={i} className='embla__slide min-w-0 flex-[0_0_100%]'>
                <Image alt='Gallery' src={img} className='mx-auto my-auto w-[300px] rounded-lg xl:w-[500px]' />
              </div>
            ))}
          </div>

          <button
            className='embla__prev absolute left-0 top-1/2 bg-white min-[550px]:left-[10%] min-[650px]:left-[20%] xl:left-[25%]'
            onClick={scrollPrev}
          >
            <Image src={arrow} alt='Icon' className='rotate-180' />
          </button>
          <button
            className='embla__next absolute right-0 top-1/2 bg-white min-[550px]:right-[10%] min-[650px]:right-[20%] xl:right-[25%]'
            onClick={scrollNext}
          >
            <Image src={arrow} alt='Icon' />
          </button>
        </div>
      </Accordion>

      <CustomLink href='/' label={t('back')} className='mt-10' />
    </main>
  );
};

export default Forest2;
