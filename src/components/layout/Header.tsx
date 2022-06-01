import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-black'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='text-gray-500 hover:text-gray-300'>
          Home
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='text-gray-500 hover:text-gray-300'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
