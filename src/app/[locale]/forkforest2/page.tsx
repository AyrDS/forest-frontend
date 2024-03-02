'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';
import { CustomLink } from '@/components/CustomLink';
import { Accordion } from '@/components/Accordion';
import portada from '@/assets/los-cerrillos.jpg';
import terreno1 from '@/assets/terreno1.jpg';
import terreno2 from '@/assets/terreno2.jpg';
import arrow from '@/assets/chevron.svg';

import gal1 from '@/assets/gallery/FF2/ff2-1.jpg';
import gal2 from '@/assets/gallery/FF2/ff2-2.jpg';
import gal3 from '@/assets/gallery/FF2/ff2-3.jpg';
import gal4 from '@/assets/gallery/FF2/ff2-4.jpg';
import gal5 from '@/assets/gallery/FF2/ff2-5.jpg';
import gal6 from '@/assets/gallery/FF2/ff2-6.jpg';
import gal7 from '@/assets/gallery/FF2/ff2-7.jpg';
import gal8 from '@/assets/gallery/FF2/ff2-8.jpg';

const images = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8];

const Forest2 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const t = useTranslations('forest1');

  return (
    <main className='relative mx-[10vw] flex-1'>
      <section className='flex flex-col gap-10'>
        <div>
          <h1 className='text-center text-[24px] font-semibold leading-[26px] xl:text-[30px]'>Fork Forest</h1>
          <h2 className='text-center text-[34px] font-extrabold leading-[36px] xl:text-[40px]'>Los Cerrillos</h2>
        </div>
        <Image src={portada} alt='Los Cerrillos' className='mx-auto w-[300px] rounded-3xl xl:w-[500px]' />
      </section>

      <section className='mt-10'>
        <h3 className='text-center text-[24px] font-semibold leading-[26px] xl:text-start'>{t('title')}</h3>
        <p className='mt-4 text-[16px] leading-[22px] xl:text-[22px] xl:leading-[28px]'>{t('description1')}</p>
        <p className='mt-2 text-[16px] leading-[22px] xl:text-[22px] xl:leading-[28px]'>{t('description2')}</p>
      </section>

      <Accordion label={t('details.stages.title')}>
        <div className='pb-5 text-[16px] leading-[22px] xl:mx-auto xl:pb-0 xl:text-[22px] xl:leading-[28px]'>
          <div className='mx-auto'>
            <p className='font-semibold'>{t('details.stages.1.title')}</p>
            <p className='mt-3'>{t('details.stages.1.day1.plan.1')}</p>

            <p className='mt-1'>{t('details.stages.1.day2.plan.1')}</p>
            <p className='mt-1'>{t('details.stages.1.day2.plan.2')}</p>
            <p className='mt-1'>{t('details.stages.1.day2.plan.3')}</p>
            <p className='mt-1'>{t('details.stages.1.day2.plan.4')}</p>
            <p className='mt-1'>{t('details.stages.1.day1.plan.4')}</p>
          </div>

          <div className='mx-auto mt-10'>
            <p className='font-semibold'>{t('details.stages.2.title')}</p>

            <p className='mt-3'>{t('details.stages.2.day1.plan.1')}</p>

            <p className='mt-1'>{t('details.stages.2.day2.plan.1')}</p>
            <p className='mt-1'>{t('details.stages.2.day1.plan.2')}</p>
            <p className='mt-1'>{t('details.stages.2.day1.plan.3')}</p>
          </div>

          <div className='mx-auto mt-10'>
            <p className='font-semibold'>{t('details.stages.3.title')}</p>

            <p className='mt-3'>{t('details.stages.3.day1.plan.1')}</p>

            <p className='mt-1'>{t('details.stages.3.day2.plan.1')}</p>
            <p className='mt-1'>{t('details.stages.3.day1.plan.2')}</p>
            <p className='mt-1'>{t('details.stages.3.day1.plan.3')}</p>
            <p className='mt-1'>{t('details.stages.3.day1.plan.4')}</p>
          </div>
        </div>
      </Accordion>

      <Accordion label={t('details.terrain.title')}>
        <div className='flex flex-col gap-7 xl:mx-auto'>
          <Image src={terreno1} alt='Terreno' className='h-[500px] w-[1000px] rounded-3xl object-cover' />
          <Image src={terreno2} alt='Terreno' className='h-[500px] w-[1000px] rounded-3xl object-cover' />
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

      <Accordion label={t('ourWork')} containerClassName='gap-[15%]'>
        <div className='w-full'>
          <iframe
            // width='560'
            // height='315'
            src='https://www.youtube.com/embed/si-H6H32Z_8?si=hYfsJgmUmtA0VBWF'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='xl:h-[315px] xl:w-[560px]'
          />
        </div>
      </Accordion>

      <CustomLink href='/' label={t('back')} className='mt-10' />
    </main>
  );
};

export default Forest2;
