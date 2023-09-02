'use client';

import Image from 'next/image';
import urkku from '@/assets/urkku.jpg';
import { useTranslations } from 'next-intl';
import { Accordion } from '@/components/Accordion';
import nft from '@/assets/nft.svg';
import urkkuMap from '@/assets/urkku-map.svg';
import { CustomLink } from '@/components/CustomLink';

const Forest2 = () => {
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
        <CustomLink href='https://opensea.io/es/collection/forestnft-1' label='Podcast' />
      </Accordion>

      <Accordion label={t('work.title')}>
        <div className='pb-5 text-[16px] leading-[22px] xl:mx-auto xl:pb-0 xl:text-[22px] xl:leading-[28px]'>
          <p>{t('work.text1')}</p>
          <p className='mt-2'>{t('work.text2')}</p>
          <p className='mt-2'>{t('work.text3')}</p>
        </div>
      </Accordion>

      <CustomLink href='/' label={t('back')} className='mt-10' />
    </main>
  );
};

export default Forest2;
