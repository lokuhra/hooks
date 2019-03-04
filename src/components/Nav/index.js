import React from 'react';
import Link from 'next/link';

export default () => {
  const NavItem = ({ href, text }) => (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );

  return (
    <nav className="nav">
      <NavItem href={'/'} text={'global'} />
      <NavItem href={'internal'} text={'internal'} />
    </nav>
  );
};
