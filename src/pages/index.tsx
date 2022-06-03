import * as React from 'react';
import { IoArrowForwardSharp } from 'react-icons/io5';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <div className='flex flex-col justify-center'>
        <h1 className='mt-4 text-6xl text-gray-100'>Ayomide Oluyinka</h1>
        <p className='mt-8 text-gray-100'>
          Cloud/ Devops Engineer at{' '}
          <UnderlineLink href='https://rxglobal.com/'>Reed Exhibitions</UnderlineLink>
        </p>
        <p className='mt-2 text-sm text-gray-500'>
          Product-Minded Software Engineer who enjoys solving problems and
          creating value in a product.
        </p>
        <a
          href='/files/Ayo_Oluyinka_Resume.pdf'
          download
          className='mt-16 border-0 text-gray-100 hover:text-gray-500'
        >
          Download my resume <IoArrowForwardSharp className='inline-block' />
        </a>
      </div>
    </Layout>
  );
}
