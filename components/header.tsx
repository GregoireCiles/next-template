'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routesConfig } from '@/config/routes';
import { siteConfig } from '@/config/site';
import { useGlobalState } from '@/lib/store';
import { useMediaQuery } from '@/hooks/use-media-query';
import MobileMenu from '@/components/mobile-menu';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useGlobalState((state) => [
    state.menuIsOpen,
    state.setMenuIsOpen,
  ]);

  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width: 650px)');

  const routes = useMemo(() => routesConfig.filter((route) => route.title !== 'Home'), []);

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
    if (menuIsOpen) {
      document.documentElement.classList.remove('has-menu-opened');
    } else {
      document.documentElement.classList.add('has-menu-opened');
    }
  };

  useEffect(() => {
    if (isDesktop && menuIsOpen) {
      setMenuIsOpen(false);
      document.documentElement.classList.remove('has-menu-opened');
    }
  }, [isDesktop, menuIsOpen, setMenuIsOpen]);

  return (
    <header>
      <div className="c-header site-grid">
        <Link href="/" className="c-header_logo">
          {siteConfig.name}
        </Link>

        <nav className="c-header_menu">
          <ul className="c-header-menu_list">
            {routes.map((route) => (
              <li className="c-header-menu_item" key={route.path}>
                <Link
                  className="c-link c-header-menu_link"
                  href={route.path}
                  {...((pathname === route.path) === true ? { 'aria-current': 'page' } : {})}>
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="c-header_menu-toggler"
          aria-expanded={menuIsOpen}
          aria-controls="mobile-menu"
          aria-label="Navigation mobile"
          onClick={handleClick}>
          {menuIsOpen === false ? 'Menu' : 'Close'}
        </button>
      </div>
      <MobileMenu />
    </header>
  );
}

export default Header;
