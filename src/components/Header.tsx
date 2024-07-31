import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='p-6 flex justify-between bg-gray-900 text-white font-bold'>
      <h1>
        <Link to='/'>Blog</Link>
      </h1>
      <Link to='/contact'>お問い合わせ</Link>
    </header>
  );
}
