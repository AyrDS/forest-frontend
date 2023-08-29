import Image from 'next/image';

import photo1 from '@/assets/1.jpg';
import photo2 from '@/assets/2.jpg';
import photo3 from '@/assets/3.jpg';
import photo4 from '@/assets/4.jpg';
import photo5 from '@/assets/5.jpg';

export const ImagesGrid = () => {
  return (
    <div className='mx-auto w-[60vw] max-[285px]:w-full min-[500px]:w-[40vw] md:w-[30vw] xl:w-[100vw] 2xl:w-[60vw]'>
      <div className='image-container-grid'>
        <Image
          src={photo4}
          alt='Imagen de Grilla'
          className='h-[166px] w-[89px] justify-self-end rounded-[25px] object-cover xl:h-[270px] xl:w-[176px]'
        />
        <Image
          src={photo1}
          alt='Imagen de Grilla'
          className='mx-auto h-[131px] w-[70px] self-end rounded-[25px] object-cover xl:h-[230px] xl:w-[138px]'
        />
        <Image
          src={photo2}
          alt='Imagen de Grilla'
          className='mx-auto mb-5 h-[63px] w-[117px] self-end rounded-[25px] object-cover xl:h-[125px] xl:w-[250px]'
        />
        <Image
          src={photo3}
          alt='Imagen de Grilla'
          className='item-large mx-auto mt-2 h-[60px] w-[170px] self-start rounded-[25px] object-cover object-top xl:h-[100px] xl:w-[332px]'
        />
        <Image
          src={photo5}
          alt='Imagen de Grilla'
          className='item-row mx-auto h-[95px] w-[120px] rounded-[25px] object-cover xl:h-[150px] xl:w-[145px]'
        />
      </div>
    </div>
  );
};
