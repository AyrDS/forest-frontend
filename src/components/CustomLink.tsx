import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';

interface Props {
  href: string;
  label: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  className?: string;
}

export const CustomLink = ({ href, label, target, className }: Props) => {
  return (
    <div
      className={`mx-auto w-[170px] flex-1 cursor-pointer rounded-[100px] border border-[#1F1F1F] bg-[#1F1F1F] py-2 text-center text-white transition-colors duration-300 hover:bg-white hover:text-black ${className}`}
    >
      <Link target={target} href={href} className='inline-block w-full xl:text-[18px]'>
        {label}
      </Link>
    </div>
  );
};
