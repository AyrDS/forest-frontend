'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import chevronIcon from '@/assets/chevron.svg';

interface Props extends PropsWithChildren {
  label: string;
  buttonClassName?: string;
  containerClassName?: string;
}

export const Accordion = ({ children, label, buttonClassName, containerClassName }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const controls = useAnimation();

  const variants = {
    expanded: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 },
  };

  useEffect(() => {
    if (expanded) {
      controls.start('expanded');
    } else {
      controls.start('collapsed');
    }
  }, [expanded]);

  return (
    <section className={`mt-5 xl:mt-14 xl:flex xl:items-center xl:justify-center ${containerClassName}`}>
      <button
        className={`mx-auto flex items-center justify-center p-4 text-center text-[24px] font-semibold leading-[26px] text-black focus:outline-none xl:self-start ${buttonClassName}`}
        onClick={() => setExpanded(!expanded)}
      >
        {label}
        <Image
          src={chevronIcon}
          alt='Chevron Icon'
          className={`${expanded ? 'rotate-90' : 'rotate-0'} transition-all`}
        />
      </button>
      <motion.div
        initial='collapsed'
        className='z-0 overflow-hidden'
        animate={controls}
        transition={{ duration: 0.3 }}
        variants={variants}
      >
        {children}
      </motion.div>
    </section>
  );
};
