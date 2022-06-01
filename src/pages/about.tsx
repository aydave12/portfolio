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
    company: 'Everlytic',
    companyUrl: 'https://everlytic.com',
    role: 'Senior Software Engineer & Team Lead',
    location: 'Johannesburg, South Africa',
    startDate: '2018-09-01',
    endDate: '2022-05-01',
  },
  {
    company: 'Accelerate Sales',
    companyUrl: 'https://acceleratesales.co.za',
    role: 'Software Engineer',
    location: 'Johannesburg, South Africa',
    startDate: '2016-11-01',
    endDate: '2018-09-01',
  },
  {
    company: 'Experience Marketing & Events',
    companyUrl: '/',
    role: 'Software Engineer',
    location: 'Centurion, South Africa',
    startDate: '2015-07-01',
    endDate: '2016-10-01',
  },
  {
    company: 'Readira Media',
    companyUrl: '/',
    role: 'Graphics Designer/Web Developer',
    location: 'Gezina, South Africa',
    startDate: '2015-05-01',
    endDate: '2015-07-01',
  },
  {
    company: 'CIN Media',
    companyUrl: '/',
    role: 'Web Developer',
    location: 'Johannesburg, South Africa',
    startDate: '2014-05-01',
    endDate: '2015-04-01',
  },
  {
    company: 'New Horizons System Solution',
    companyUrl: '/',
    role: 'Web Development Instructor',
    location: 'Lagos, Nigeria',
    startDate: '2012-10-01',
    endDate: '2013-12-01',
  },
  {
    company: 'Jwitlon Consulting',
    companyUrl: '/',
    role: 'Web Developer',
    location: 'Lagos, Nigeria',
    startDate: '2012-08-01',
    endDate: '2013-09-01',
  },
  {
    company: 'AGL Consulting',
    companyUrl: '/',
    role: 'Systems Engineer',
    location: 'Lagos, Nigeria',
    startDate: '2010-10-01',
    endDate: '2011-09-01',
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
        <h1 className='text-5xl text-white'>Ade</h1>
        <small>
          *Pronounced <span className='font-bold italic text-white'>a-day</span>{' '}
          (i.e an apple <i className='font-bold text-white'>a day</i>){' '}
        </small>
        <div className='grid grid-cols-1 gap-8 pt-8 pb-3 md:grid-cols-2'>
          <div className='relative h-96 overflow-hidden rounded'>
            <NextImage
              width='500'
              src='https://media-exp1.licdn.com/dms/image/C4D03AQF829VJK9nqmg/profile-displayphoto-shrink_800_800/0/1598215409867?e=1659571200&v=beta&t=1PCO29Lwoi2i1lpjOk5SlHd0dIrCc4cmaweigzuagho'
              alt='Picture of the author'
              layout='fill'
              objectFit='cover'
              className='rounded-full'
            />
          </div>
          <div className='leading-8'>
            <p>
              <span className='font-semibold text-white'>
                My name is Adedamola Adedoja
              </span>
              , I am a product engineer based in the United States, with a
              passion for creating value in a product, solving complex
              architectural problems while still delivering an incredible
              experience to end users.
            </p>
            <p className='mt-6'>
              I am currently a{' '}
              <UnstyledLink
                href='https://www.everlytic.com'
                className='font-semibold text-white underline'
              >
                Senior Software Engineer & Team Lead
              </UnstyledLink>
              , at everlytic.
            </p>
            <p className='mt-6'>
              I am a{' '}
              <UnstyledLink
                href='https://www.manutd.com'
                className='font-semibold text-white underline'
              >
                Manchester United
              </UnstyledLink>{' '}
              Fan, a tv show aficionado (
              <UnstyledLink
                className='font-semibold text-white underline'
                href='https://www.imdb.com/title/tt0386676/'
              >
                The Office
              </UnstyledLink>{' '}
              is the best tv show of all time), love afrobeats and taking walks
              in nature.
            </p>
          </div>
        </div>
        <h3 className='pt-12 pb-4 text-white'>Career</h3>
        <div>
          {jobs.map((job: Job) => (
            <div key={job.company} className='py-6'>
              <h4 className='font-medium text-white'>{job.role}</h4>
              <p>
                <UnstyledLink
                  href='https://www.manutd.com'
                  className='text-white underline'
                >
                  {job.company}
                </UnstyledLink>{' '}
                &bull; {job.location}
              </p>
              <p>
                {dayjs(job.startDate).format('MMM YYYY')} –{' '}
                {dayjs(job.endDate).format('MMM YYYY')} &bull;{' '}
                {getJobDifference(job)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
