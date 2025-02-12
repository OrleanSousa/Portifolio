import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <div className='flex items-center justify-between p-6'>
      <div>
        <Link to="/" className="text-white font-mono text-3xl tracking-wider">
          Orlean Sousa
        </Link>
      </div>

      {/* Navegação para Desktop */}
      <div className="hidden lg:flex space-x-4">
        <Link to="/" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Inicio</Link>
        <Link to="/certificados" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Certificações</Link>
        <Link to="/project" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projetos</Link>
        <Link to="/contact" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Contatos</Link>
      </div>

      {/* Botão de Menu para Mobile */}
      <div className='lg:hidden flex items-center'>
        {!toggle && (
          <HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer' />
        )}
      </div>

      {/* Menu lateral para Mobile */}
      <div className={`fixed top-0 right-0 w-[200px] h-[300px] bg-indigo-700 transition-transform duration-300 ease-in-out transform ${toggle ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-5">
          <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer' />
        </div>
        <ul className="flex flex-col items-start px-10 space-y-4 text-white text-xl">
          <li onClick={closeMenu}>
            <Link to="/">Inicio</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/certificados">Certificações</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/project">Projetos</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contact">Contatos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
