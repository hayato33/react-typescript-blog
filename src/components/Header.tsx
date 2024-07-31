import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='p-6 flex justify-between bg-gray-900 text-white font-bold'>
      <h1>
        <Link to='/'>Blog</Link>
      </h1>
      <Link to='/contact'>お問い合わせ</Link>
    </header>
  );
};
export default Header;
