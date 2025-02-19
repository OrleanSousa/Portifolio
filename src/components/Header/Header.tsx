import { useState } from 'react';
import styles from './Header.module.css';
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
    <div className={styles.container}>
      <div>
        <Link to="/" className={styles.logo}>
          Orlean Sousa
        </Link>
      </div>

      {/* Navegação para Desktop */}
      <div className={styles.navDesktop}>
        <Link to="/" className={styles.navLink}>Inicio</Link>
        <Link to="/certificados" className={styles.navLink}>Certificações</Link>
        <Link to="/project" className={styles.navLink}>Projetos</Link>
        <Link to="/contact" className={styles.navLink}>Contatos</Link>
      </div>

      {/* Botão de Menu para Mobile */}
      <div className={styles.menuButton}>
        {!toggle && (
          <HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer' />
        )}
      </div>

      {/* Menu lateral para Mobile */}
      <div className={`${styles.mobileMenu} ${toggle ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className={styles.menuCloseButton}>
          <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer' />
        </div>
        <ul className={styles.menuList}>
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
