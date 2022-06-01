import * as React from 'react';
import { ReactElement } from 'react';
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io5';

import UnstyledLink from '@/components/links/UnstyledLink';

type FooterLink = {
  name: string;
  icon: ReactElement;
  link: string;
};

const footerLinks: FooterLink[] = [
  {
    name: 'linkedIn',
    icon: (
      <IoLogoLinkedin className='ml-1 inline-block opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-100' />
    ),
    link: 'https://www.linkedin.com/in/adeadedoja/',
  },
  {
    name: 'github',
    icon: (
      <IoLogoGithub className='ml-1 inline-block opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-100' />
    ),
    link: 'https://github.com/ade1705',
  },
  {
    name: 'twitter',
    icon: (
      <IoLogoTwitter className='ml-1 inline-block opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-100' />
    ),
    link: 'https://twitter.com/TrussDamola',
  },
  {
    name: 'instagram',
    icon: (
      <IoLogoInstagram className='ml-1 inline-block opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-100' />
    ),
    link: 'https://www.instagram.com/trussdamola/',
  },
];

const Footer = () => (
  <div className='flex justify-center'>
    <div className='flex w-96 justify-between py-4 text-sm'>
      {footerLinks.map((footerLink: FooterLink) => (
        <UnstyledLink
          key={footerLink.name}
          openNewTab
          href={footerLink.link}
          className='group text-gray-500 hover:text-gray-300'
        >
          {footerLink.name} {footerLink.icon}
        </UnstyledLink>
      ))}
    </div>
  </div>
);
export default Footer;
