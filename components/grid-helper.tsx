'use client';

import { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';
import { useIsClient } from '@/hooks/use-is-client';
import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';
import { useMediaQuery } from '@/hooks/use-media-query';

function GridHelper() {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const isClient = useIsClient();
  const isDesktop = useMediaQuery('(min-width: 650px)');

  const [isCtrlDown, setIsCtrlDown] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);

  const columns = useMemo(() => {
    if (!isClient) {
      return 0;
    }

    return Number(getComputedStyle(document.documentElement).getPropertyValue('--grid-columns'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient, isDesktop]);

  function handleKeyDown(event: KeyboardEvent) {
    const { key } = event;

    if (key === 'Control') {
      setIsCtrlDown(true);
    } else if (isCtrlDown && key === 'g') {
      setIsGridVisible((curr) => !curr);
    }
  }

  function handleKeyUp(event: KeyboardEvent) {
    const { key } = event;

    if (key === 'Control') {
      setIsCtrlDown(false);
    }
  }

  useIsomorphicLayoutEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isGridVisible, isCtrlDown]);

  return (
    <div
      className={cn(
        'z-grid pointer-events-none fixed left-0 top-0 flex h-full w-full gap-x-12 px-32 s:gap-x-24 s:px-72',
        isGridVisible ? 'visible' : 'invisible',
      )}>
      {new Array(columns).fill(0).map((_, index) => (
        <div key={index} className="flex-1 bg-primary-500 opacity-10" />
      ))}
    </div>
  );
}

export default GridHelper;
