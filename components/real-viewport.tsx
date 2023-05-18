'use client';

import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';

function RealViewport() {
  useIsomorphicLayoutEffect(() => {
    function handleWindowResize() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    window.addEventListener('resize', handleWindowResize, false);
    handleWindowResize();

    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, []);

  return null;
}

export default RealViewport;
