import React, { useEffect, useState } from 'react'
import {links} from '../../Data';
import { FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import shapeOne from '../../assets/shape-1.png'

import './header.css'

const getStorage = () => {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem(theme);
  }
}


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState(getStorage());

  const scrollTop = () => {
     animateScroll.scrollToTop();
  };

  const changeNav = () => {
     if(window.scrollY >= 80){
        setScrollNav(true);
     }else{
        setScrollNav(false);
     }
  };

  const toggleTheme = () => {
     if(theme === 'light-theme'){
       setTheme('dark-theme');
     }else{
       setTheme('light-theme');
     }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showMenu);
  }, [showMenu]);

  useEffect(() => {
     document.documentElement.className = theme;
     localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
         <nav className='nav'>
            <Link to='/' 
                 className='nav__logo text-cs'
                 onClick={scrollTop}
                >Miller</Link>
            <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu' }`}>
                <div className='nav__data'>
                    <ul className='nav__list'>
                      {links.map(({ name, path }, index) => {
                        return(
                            <li className='nav__item' key={index}>
                              <Link 
                                className='nav__link text-cs'
                                to={path} 
                                spy={true} 
                                hashSpy={true}
                                smooth={true} 
                                offset={-150} 
                                duration={500}
                                onClick={() => setShowMenu(!showMenu)}
                                >
                                  {name}
                                </Link>
                            </li>
                        )
                      })}
                    </ul>
                    <div className='header__socials'>
                        <a href='' className='header__social-link'>
                            <FaTwitter />
                        </a>
                        <a href='' className='header__social-link'>
                            <FaDribbble />
                        </a>
                        <a href='' className='header__social-link'>
                            <FaBehance />
                        </a>
                    </div>
                </div>
                <div className='section__deco deco__left header__deco'>
                    <img src={shapeOne} alt='' className='shape' />
                </div>
            </div>
            <div className='nav__btns'>
               <div className='theme__toggler' onClick={toggleTheme}>
                   {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
               </div>
               <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
                  onClick={() => setShowMenu(!showMenu)}>
                   <span></span>
                   <span></span>
               </div>
            </div>
         </nav>
    </header>
  )
}

export default Header
