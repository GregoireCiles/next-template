'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routesConfig } from '@/config/routes';
import { useGlobalState } from '@/lib/store';

function MobileMenu() {
  const [menuIsOpen, setMenuIsOpen] = useGlobalState((state) => [
    state.menuIsOpen,
    state.setMenuIsOpen,
  ]);

  const pathname = usePathname();

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);

    if (menuIsOpen) {
      document.documentElement.classList.remove('has-menu-opened');
    }
  };

  return (
    <nav className="c-menu" id="mobile-menu" aria-label="Navigation mobile">
      <div className="c-menu_inner">
        <ul className="c-menu_nav">
          {routesConfig.map((route) => (
            <li className="c-menu_nav_item" key={route.path}>
              <Link
                className="c-link c-menu_nav_link"
                href={route.path}
                onClick={handleClick}
                {...((pathname === route.path) === true ? { 'aria-current': 'page' } : {})}>
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
