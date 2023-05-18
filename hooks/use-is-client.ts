import { useEffect, useState } from 'react';

export function useIsClient(): boolean {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient;
}
