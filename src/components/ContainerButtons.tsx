'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import axios from 'axios';
import { ethers } from 'ethers';
import { CustomLink } from './CustomLink';
import spinner from '@/assets/spinner.svg';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const ContainerButtons = () => {
  const [address, setAddress] = useState<string>('');
  const [connected, setConnected] = useState<boolean>(false);
  const [score, setScore] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = process.env.NEXT_PUBLIC_GC_API_KEY;
  const SCORER_ID = process.env.NEXT_PUBLIC_GC_SCORER_ID;

  const SUBMIT_PASSPORT_URI = 'https://api.scorer.gitcoin.co/registry/submit-passport';
  const SIGNING_MESSAGE_URI = 'https://api.scorer.gitcoin.co/registry/signing-message';

  const headers = API_KEY
    ? {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY,
      }
    : undefined;

  const t = useTranslations('index.buttons');

  const links = [
    {
      label: 'Fork Forest 2',
      href: 'https://forum.forkdaogov.xyz/t/fork-forest-02-los-cerrillos/124/3',
    },
    {
      label: 'Fork Forest 1',
      href: 'https://forum.forkdaogov.xyz/t/fork-forest-01-urkku/122/2',
    },
    {
      label: t('spotify'),
      href: 'https://open.spotify.com/show/3mbOZyvQj2rGUpaBuXbgDk?si=wxjKFRorQ8S2BlQdZq9Z5g',
    },
    {
      label: t('gitcoin'),
      href: 'https://explorer.gitcoin.co/#/round/10/0xb6be0ecafdb66dd848b0480db40056ff94a9465d/0xb6be0ecafdb66dd848b0480db40056ff94a9465d-72',
    },
  ];

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.listAccounts();

        if (accounts && accounts[0]) {
          setConnected(true);
          setAddress(accounts[0].address);
          checkPassport(accounts[0].address);
        }
      } catch (error) {
        console.log('Error connection');
        console.log(error);
      }
    };

    checkConnection();
  }, []);

  const connect = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAddress(accounts[0]);
      setConnected(true);
    } catch (error) {
      console.log(error);
      console.log('Error connecting...');
    }
  };

  const checkPassport = async (currentAddress = address) => {
    setScore('');
    setIsLoading(true);
    console.log('llamado');
    const GET_PASSPORT_SCORE_URI = `https://api.scorer.gitcoin.co/registry/score/${SCORER_ID}/${currentAddress}`;

    try {
      const { data } = await axios.get(GET_PASSPORT_SCORE_URI, {
        headers,
      });

      if (data.score) {
        // if the user has a score, round it and set it in the local state
        const roundedScore = Math.round(data.score * 100) / 100;
        setScore(roundedScore.toString());
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const submitPassport = async () => {
    try {
      // call the API to get the signing message and the nonce
      const { message, nonce } = await getSigningMessage();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      // ask the user to sign the message
      const signature = await signer.signMessage(message);

      const body = JSON.stringify({
        address,
        scorer_id: SCORER_ID,
        signature,
        nonce,
      });

      // call the API, sending the signing message, the signature, and the nonce
      const { data } = await axios.post(SUBMIT_PASSPORT_URI, body, {
        headers,
      });

      if (data.addres) {
        checkPassport(data.addres);
      }
    } catch (err) {
      console.log('error: ', err);
    }
  };

  const getSigningMessage = async () => {
    try {
      const { data } = await axios(SIGNING_MESSAGE_URI, {
        headers,
      });

      return data;
    } catch (err) {
      console.log('error: ', err);
    }
  };

  return (
    <div className='mt-10 flex flex-col items-center justify-center gap-5'>
      {links.map(({ href, label }) => (
        <CustomLink href={href} label={label} key={label} />
      ))}
      {!connected ? (
        <button
          className='w-full rounded-[50px] border border-[#1F1F1F] bg-[#1F1F1F] py-2 text-center text-white transition-colors duration-300 hover:bg-white hover:text-black md:w-1/2'
          onClick={connect}
        >
          {t('wallet')}
        </button>
      ) : (
        <button
          onClick={submitPassport}
          className='w-full rounded-[50px] border border-[#1F1F1F] bg-[#1F1F1F] py-2 text-center text-white transition-colors duration-300 hover:bg-white hover:text-black md:w-1/2'
        >
          <p>{t('yourPass')}</p>
          <p className='text-xs'>{`(${t('needPoints')})`}</p>
        </button>
      )}
      {connected && score ? (
        <p className='text-center'>
          {t('current')} {score} {t('points')}! {Number(score) >= 20 ? t('multiply') : ''}
        </p>
      ) : isLoading ? (
        <div className={`${connected ? 'block' : 'hidden'}`}>
          <Image className='animate-spin' src={spinner as any} alt='Spinner' />
        </div>
      ) : (
        <p className={`${connected && !score ? 'block' : 'hidden'}`}>{t('noPoints')}</p>
      )}
    </div>
  );
};
