import dayjs from 'dayjs';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

type Job = {
  company: string;
  companyUrl: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
};

const jobs: Job[] = [
  {
    company: 'Reed Exhibitions',
    companyUrl: 'https://rxglobal.com',
    role: 'Cloud / Devops Engineer',
    location: 'Norwalk, CT',
    startDate: '2021-08-01',
    endDate: dayjs().format('YYYY-MM-DD'),
  },
  {
    company: 'Unilever NA',
    companyUrl: 'https://www.unilever.com/',
    role: 'Cloud DevOps Engineer',
    location: 'Trumbull, CT',
    startDate: '2017-06-01',
    endDate: '2021-08-01',
  },
  {
    company: 'LocalTech LLC',
    companyUrl: 'https://thelocaltechs.com/',
    role: 'Cloud Engineer',
    location: 'Trumbull, CT',
    startDate: '2013-04-01',
    endDate: '2017-06-01',
  },
];

const getJobDifference = (job: Job): string => {
  const yearWithDecimal = dayjs(job.endDate).diff(job.startDate, 'year', true);
  const year = Math.floor(yearWithDecimal);
  const month = Math.floor((yearWithDecimal - year) * 12);
  if (year > 0) {
    return `${year} ${year > 1 ? 'years' : 'year'} ${month} months`;
  }
  return `${month} months`;
};

const About = () => {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <div>
        <h1 className='text-5xl text-white'>Ayo</h1>
        <small>
          *Pronounced <span className='font-bold italic text-white'>a-your</span>{' '}
          (i.e an apple <i className='font-bold text-white'>a yo</i>){' '}
        </small>
        <div className='grid grid-cols-1 gap-8 pt-8 pb-3 md:grid-cols-2'>
          <div className='relative h-96 overflow-hidden rounded'>
            <NextImage
              width='500'
              src='https://media-exp1.licdn.com/dms/image/C4E03AQH8Gx5Z1NV8BQ/profile-displayphoto-shrink_800_800/0/1538532362005?e=1659571200&v=beta&t=tm1U9oARLAICwU-cBkL_gCFaHlmR000ZS0fErDacPbE'
              alt='Picture of the author'
              layout='fill'
              objectFit='cover'
              className='rounded-full'
            />
          </div>
          <div className='leading-8'>
            <p>
              <span className='font-semibold text-white'>
                My name is Ayo Oluyinka
              </span>
              , An Experienced Cloud & DevOps Engineer with hands on experience, povisioning, supporting, automating and monitoring 
              Deployments in the Cloud, leveraging IaC tools, CI/CD, and DevOps processes
            </p>
            <p className='mt-6'>
              I am currently a{' '}
                Cloud & DevOps Engineer
              <UnstyledLink
                href='https://www.rxglobal.com'
                className='font-semibold text-white underline'
              >
              , at Reed Exhibitions.
              </UnstyledLink>
            </p>
            <p className='mt-6'>
              I am an{' '}
              <UnstyledLink
                href='https://www.arsenal.com'
                className='font-semibold text-white underline'
              >
                Arsenal FC
              </UnstyledLink>{' '}
              Fan, a Slight Gamer(
              <UnstyledLink
                className='font-semibold text-white underline'
                href='https://www.playstation.com/en-us/god-of-war/'
              >
                God of War
              </UnstyledLink>{' '}
              is the best games of all time), I love God, Good music and taking walks
              in nature.
            </p>
          </div>
        </div>
        <h3 className='pt-12 pb-4 text-white'>Career</h3>
        <div>
          {jobs.map((job: Job, index: number) => (
            <div key={job.company} className='py-6'>
              <h4 className='font-medium text-white'>{job.role}</h4>
              <p>
                <UnstyledLink
                  href={job.companyUrl}
                  className={`text-white ${
                    job.companyUrl !== '' && 'underline'
                  }`}
                >
                  {job.company}
                </UnstyledLink>{' '}
                &bull; {job.location}
              </p>
              <p>
                {dayjs(job.startDate).format('MMM YYYY')} –{' '}
                {index === 0
                  ? 'Present'
                  : dayjs(job.endDate).format('MMM YYYY')}{' '}
                &bull; {getJobDifference(job)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
