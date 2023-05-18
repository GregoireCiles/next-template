import React from 'react';

const IS_SERVER = typeof window === 'undefined';
export const useIsomorphicLayoutEffect = IS_SERVER ? React.useEffect : React.useLayoutEffect;
