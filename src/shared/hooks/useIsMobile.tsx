import { useEffect, useState } from 'react';

type Breakpoint = 'tablet' | 'mobileX';

const breakpointSize: Record<Breakpoint, number> = {
  tablet: 768,
  mobileX: 576,
};

export const useIsMobile = (breakpoint: Breakpoint): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const size = breakpointSize[breakpoint];

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= size);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [size]);

  return isMobile;
};
