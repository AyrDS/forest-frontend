'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Accordion } from '@/components/Accordion';
import portada from '@/assets/los-cerrillos.jpg';
import terreno1 from '@/assets/terreno1.jpg';
import terreno2 from '@/assets/terreno2.jpg';
import { CustomLink } from '@/components/CustomLink';

const Forest2 = () => {
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
            <p>{t('details.stages.1.day1.title')}</p>
            <p className='mt-5'>{t('details.stages.1.day1.plan.1')}</p>
            <p className='mt-1'>{t('details.stages.1.day1.plan.2')}</p>
            <p className='mt-1'>{t('details.stages.1.day1.plan.3')}</p>
            <p className='mt-1'>{t('details.stages.1.day1.plan.4')}</p>

            <p className='mt-5'>{t('details.stages.1.day2.title')}</p>
            <p className='mt-5'>{t('details.stages.1.day2.plan.1')}</p>
            <p className='mt-1'>{t('details.stages.1.day2.plan.2')}</p>
            <p className='mt-1'>{t('details.stages.1.day2.plan.3')}</p>
            <p className='mt-1'>{t('details.stages.1.day2.plan.4')}</p>
            <p className='mt-1'>{t('details.stages.1.day2.plan.5')}</p>
          </div>

          <div className='mx-auto mt-10'>
            <p className='font-semibold'>{t('details.stages.2.title')}</p>
            <p>{t('details.stages.2.day1.title')}</p>

            <p className='mt-5'>{t('details.stages.2.day1.plan.1')}</p>
            <p className='mt-1'>{t('details.stages.2.day1.plan.2')}</p>
            <p className='mt-1'>{t('details.stages.2.day1.plan.3')}</p>
            <p className='mt-1'>{t('details.stages.2.day1.plan.4')}</p>

            <p className='mt-5'>{t('details.stages.2.day2.title')}</p>
            <p className='mt-5'>{t('details.stages.2.day2.plan.1')}</p>
            <p className='mt-1'>{t('details.stages.2.day1.plan.2')}</p>
            <p className='mt-1'>{t('details.stages.2.day1.plan.3')}</p>
            <p className='mt-1'>{t('details.stages.2.day1.plan.4')}</p>
          </div>

          <div className='mx-auto mt-10'>
            <p className='font-semibold'>{t('details.stages.3.title')}</p>
            <p>{t('details.stages.3.day1.title')}</p>

            <p className='mt-5'>{t('details.stages.3.day1.plan.1')}</p>
            <p className='mt-1'>{t('details.stages.3.day1.plan.2')}</p>
            <p className='mt-1'>{t('details.stages.3.day1.plan.3')}</p>
            <p className='mt-1'>{t('details.stages.3.day1.plan.4')}</p>

            <p className='mt-5'>{t('details.stages.3.day2.title')}</p>
            <p className='mt-5'>{t('details.stages.3.day2.plan.1')}</p>
            <p className='mt-1'>{t('details.stages.3.day1.plan.2')}</p>
            <p className='mt-1'>{t('details.stages.3.day1.plan.3')}</p>
            <p className='mt-1'>{t('details.stages.3.day1.plan.4')}</p>
          </div>

          <p className='mt-8 italic'>{t('details.stages.schedule')}</p>
        </div>
      </Accordion>

      <Accordion label={t('details.terrain.title')}>
        <div className='flex flex-col gap-7 xl:mx-auto'>
          <Image src={terreno1} alt='Terreno' className='h-[500px] w-[1000px] rounded-3xl object-cover' />
          <Image src={terreno2} alt='Terreno' className='h-[500px] w-[1000px] rounded-3xl object-cover' />
        </div>
      </Accordion>

      <CustomLink href='/' label={t('back')} className='mt-10' />
    </main>
  );
};

export default Forest2;
