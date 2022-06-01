import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

type Article = {
  title: string;
  link: string;
  date: string;
};

const articlesWritten: Article[] = [
  {
    title: 'HateItOrLoveIt: Traits?',
    link: 'https://dev.to/trussdamola/hateitorloveit-traits-dpd',
    date: 'Feb, 2020',
  },
  {
    title: 'HateItOrLoveIt: Data classes?',
    link: 'https://dev.to/trussdamola/hateitorloveit-data-classes-5bob',
    date: 'Jul, 2020',
  },
  {
    title: 'How to add Ionicons to your Angular 6 apps',
    link: 'https://medium.com/free-code-camp/how-to-add-ionicons-to-your-angular-6-apps-7ee5a7b85dc2',
    date: 'Nov, 2018',
  },
];

const academicPapers: Article[] = [
  {
    title:
      'Intelligent Mobile Plant Disease Diagnostic System Using NASNet-Mobile Deep Learning.',
    link: 'http://www.iaeng.org/IJCS/issues_v49/issue_1/IJCS_49_1_23.pdf',
    date: 'Mar, 2022',
  },
  {
    title:
      'Progress on Deep Learning Models for Plant Disease Detection: A Survey',
    link: 'https://ieeexplore.ieee.org/abstract/document/9519323',
    date: 'Aug, 2021',
  },
  {
    title:
      'Deep learning based on nasnet for plant disease recognition using leave images',
    link: 'https://ieeexplore.ieee.org/abstract/document/8851029/',
    date: 'Aug, 2019',
  },
  {
    title:
      'Development and evaluation of a system for normalizing Internet slangs in social media texts',
    link: 'http://www.iaeng.org/publication/WCECS2015/WCECS2015_pp418-423.pdf',
    date: 'Oct, 2015',
  },
];

const displayWriting = (articles: Article[]) =>
  articles.map((article: Article) => (
    <div
      key={article.title}
      className='cursor-pointer rounded px-2 hover:bg-gray-900'
    >
      <div className='border-bottom flex justify-between border-b  border-b-gray-600 p-4 hover:border-b-black'>
        <UnstyledLink className='font-semibold' href={article.link}>
          {article.title}
        </UnstyledLink>
        <div className='w-28 text-right'>{article.date}</div>
      </div>
    </div>
  ));

const Writing = () => {
  return (
    <Layout>
      <Seo templateTitle='Writing' />
      <div>
        <h1 className='text-5xl text-white'>Academic Papers</h1>
        <p className='py-8'>
          While getting my degrees, I wrote a couple of academic papers, which I
          am very proud of as a lot of work went into the experiments and then
          the writing of the papers.
        </p>
        <div>{displayWriting(academicPapers)}</div>
        <h1 className='pt-16 text-5xl text-white'>Articles</h1>
        <p className='py-8'>
          I do love to write as reading is an important part of my life. I have
          a ton of unpublished articles in my draft, I hope some day I let it
          fly. Below are some that were finished.
        </p>
        <div>{displayWriting(articlesWritten)}</div>
      </div>
    </Layout>
  );
};

export default Writing;
