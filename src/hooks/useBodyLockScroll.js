import { useEffect } from 'react'

const useBodyLockScroll = () => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const root = document.getElementById('root');
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    document.body.style.overflow = 'hidden';

    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    }
  }, [])
}

export default useBodyLockScroll;