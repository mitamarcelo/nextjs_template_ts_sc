import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  NavBar,
  TransparentButton,
  ToggleButton,
  Items,
} from './Header.styles';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = useRef(null);

  useEffect(() => {
    if (!menuOpen) return () => null;
    const handleClick = () => {
      setMenuOpen(false);
    };
    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [menuOpen]);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NavBar>
          <ToggleButton>
            <TransparentButton onClick={() => setMenuOpen((prevState) => !prevState)}>
              <FaBars />
            </TransparentButton>
          </ToggleButton>
          <li>
            <Link href="/">
              <Logo href="/"><img src="/images/LogoMitasoft_lg_offyellow.png" alt="MitaSoft" /></Logo>
            </Link>
          </li>
          <Items show={menuOpen} ref={menu}>
            <li><Link href="/item1"><a href="/">Item 1</a></Link></li>
            <li><Link href="/item2"><a href="/">Item 2</a></Link></li>
            <li><Link href="/item3"><a href="/">Item 3</a></Link></li>
          </Items>
        </NavBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
