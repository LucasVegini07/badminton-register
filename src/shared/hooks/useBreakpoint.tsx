import { useState, useEffect, useCallback } from 'react';

import { useTheme } from 'styled-components';

interface BreakpointProps {
  base: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

export const useBreakpoint = ({ base, sm, md, lg, xl }: BreakpointProps) => {
  const { breakpoints } = useTheme();

  const [variant, setVariant] = useState(base);

  const parsePixelToNumber = (size: string) => parseInt(size, 10);

  const resize = useCallback(() => {
    const size = window.innerWidth;

    if (size <= parsePixelToNumber(breakpoints.sm)) {
      return setVariant(sm ?? md ?? lg ?? xl ?? base);
    }

    if (size <= parsePixelToNumber(breakpoints.md)) {
      return setVariant(md ?? lg ?? xl ?? base);
    }

    if (size <= parsePixelToNumber(breakpoints.lg)) {
      return setVariant(lg ?? xl ?? base);
    }

    if (size <= parsePixelToNumber(breakpoints.xl)) {
      return setVariant(xl ?? base);
    }

    return setVariant(base);
  }, [breakpoints, base, lg, md, sm, xl]);

  useEffect(() => resize);

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, [resize]);

  return { variant };
};
