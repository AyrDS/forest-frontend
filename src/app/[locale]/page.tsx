'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ImagesGrid } from '@/components/ImagesGrid';
import { Accordion } from '@/components/Accordion';
import { CustomLink } from '@/components/CustomLink';

import ekoToken from '@/assets/ekoToken-logo.svg';
import gainforestLogo from '@/assets/gainforest.logo.svg';
import forkdaoLogo from '@/assets/forkdao-logo.svg';
import gitCoinBrand from '@/assets/gitcoin-brand.jpg';
import fotoA from '@/assets/foto-a.svg';

export default function Home() {
  const t = useTranslations('index');

  return (
    <main className='relative mx-[10vw] flex-1'>
      <section className='xl:flex xl:justify-center'>
        <div>
          <h1 className='pt-6 text-center text-[34px] font-extrabold uppercase leading-[36px] text-custom-green xl:text-[42px]'>
            {t('title')}
          </h1>
          <p className='my-8 text-center leading-[22px] md:mx-auto md:w-[70%] md:text-[22px] xl:w-[60%]'>
            {t('description')}
          </p>

          <div className='mb-4 flex items-center justify-center'>
            <Image src={gainforestLogo} alt='Gaintforest Logo' className='xl:w-[60px]' />
            <Image src={forkdaoLogo} alt='Fork Dao Logo' className='xl:w-[100px]' />
            <Image src={ekoToken} alt='Eko Token Logo' className='xl:w-[60px]' />
          </div>
        </div>

        <ImagesGrid />
      </section>

      <div className='mt-9'>
        <h2 className='text-center text-[24px] font-semibold leading-[26px] xl:text-[30px]'>Fork Forest</h2>
        <h3 className='text-center text-[34px] font-extrabold leading-[36px] xl:text-[40px]'>Los Cerrillos</h3>
      </div>

      <section className='xl:mx-auto xl:w-[85%]'>
        <p className='mt-4 text-[16px] leading-[22px] xl:text-[22px] xl:leading-[28px]'>{t('project1.description')}</p>
        <div className='mt-4 text-center xl:w-full'>
          <CustomLink href='forkforest2' label={t('buttons.more')} />
        </div>
      </section>

      {/* //!Motivación  */}
      <Accordion label={t('project1.motivationTitle')}>
        <div className='pb-5 xl:mx-auto  xl:w-[85%] xl:pb-0'>
          <p className='text-[16px] leading-[22px] xl:text-[22px] xl:leading-[28px]'>{t('project1.motivation')}</p>
          <div className='mt-4 text-center xl:w-full xl:self-start'>
            <CustomLink href='https://twitter.com/ForkForest' target='_blank' label='Fork DAO' />
          </div>
        </div>
      </Accordion>

      {/* //!Financiacion  */}
      <Accordion label={t('project1.financingTitle')}>
        <div className='pb-5 xl:mx-auto  xl:w-[85%] xl:pb-0'>
          <div className='flex flex-col'>
            <div className='xl:order-2'>
              <Image
                src={gitCoinBrand}
                alt='Gitcoin'
                className='mx-auto mb-5 w-[280px] rounded-3xl xl:h-[194px] xl:w-[520px] xl:object-cover'
              />
            </div>
            <div className='text-[16px] leading-[22px] xl:text-[22px] xl:leading-[28px]'>
              <p className='mb-4'>{t('project1.financingP1')}</p>
              <p className='mb-4'>{t('project1.financingP2')}</p>
              <p className='mb-4'>{t('project1.financingP3')}</p>
              <p className='mb-4'>{t('project1.financingP4')}</p>
            </div>
          </div>
          <div className='mt-4 text-center xl:w-full xl:self-start'>
            <CustomLink
              href='https://explorer.gitcoin.co/#/round/10/0xb6be0ecafdb66dd848b0480db40056ff94a9465d/0xb6be0ecafdb66dd848b0480db40056ff94a9465d-72'
              target='_blank'
              label={t('buttons.gitcoin')}
            />
          </div>
        </div>
      </Accordion>

      {/* //!Comunicacion  */}
      <Accordion label={t('project1.communicationTitle')}>
        <div className='pb-5 text-[16px] leading-[22px] xl:mx-auto  xl:w-[85%] xl:pb-0 xl:text-[22px] xl:leading-[28px]'>
          <p>{t('project1.communication')}</p>
          <div className='mt-8 text-center xl:w-full xl:self-start'>
            <CustomLink
              href='https://open.spotify.com/show/3mbOZyvQj2rGUpaBuXbgDk?si=wxjKFRorQ8S2BlQdZq9Z5g'
              target='_blank'
              label={t('buttons.spotify')}
            />
          </div>
        </div>
      </Accordion>

      {/* //! Estrategia */}
      <Accordion label={t('project1.collaborationTitle')}>
        <div className='pb-5 text-[16px] leading-[22px] xl:mx-auto xl:w-[85%] xl:pb-0 xl:text-[22px] xl:leading-[28px]'>
          <div className='mb-4'>
            <p className='font-bold'>{t('project1.collaborationSubTitle1')}</p>
            <p>{t('project1.collaborationP1')}</p>
          </div>

          <div className='mb-4'>
            <p className='font-bold'>{t('project1.collaborationSubTitle2')}</p>
            <p>{t('project1.collaborationP2')}</p>
          </div>

          <div className='mb-4'>
            <p className='font-bold'>{t('project1.collaborationSubTitle3')}</p>
            <p>{t('project1.collaborationP3')}</p>
          </div>

          <div className='mb-4'>
            <p className='font-bold'>{t('project1.collaborationSubTitle4')}</p>
            <p>{t('project1.collaborationP4')}</p>
          </div>

          <Image src={fotoA} alt='Foto Experiencia Urkky' className='mx-auto' />
        </div>
      </Accordion>
    </main>
  );
}
