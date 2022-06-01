import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
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
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className='layout flex flex-col justify-center'>
        <h1 className='mt-4 text-6xl'>Adedoja Adedamola</h1>
        <p className='mt-8'>
          Senior Software Engineer & Team Lead at{' '}
          <UnderlineLink href='www.everlytic.com'>Everlytic</UnderlineLink>
        </p>
        <p className='mt-2 text-sm text-gray-500'>
          Product-Minded Software Engineer who enjoys creating value and solving
          problems.
        </p>
        <ArrowLink href='/' className='mt-16 border-0'>
          Download my resume
        </ArrowLink>
      </div>
    </Layout>
  );
}
