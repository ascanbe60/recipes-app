import React from 'react';
import Link from 'next/link';
import Nav from '../styles/Nav';

const Header = () => {
  return (
    <header>
      <Nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href="/add-recipe">
          <a>Add Recipe</a>
        </Link>
      </Nav>
    </header>
  );
};

export default Header;
