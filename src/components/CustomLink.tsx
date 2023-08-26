import React from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  label: string;
}

export const CustomLink = ({ href, label }: Props) => {
  return (
    <Link
      target='_blank'
      href={href}
      className='w-full rounded-[50px] border border-[#1F1F1F] bg-[#1F1F1F] py-2 text-center text-white transition-colors duration-300 hover:bg-white hover:text-black md:w-1/2'
    >
      {label}
    </Link>
  );
};
