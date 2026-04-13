import { useEffect, useRef, useCallback } from "react";

export const useInfiniteScroll = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isLoadingRef = useRef(false);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting && !isLoadingRef.current) {
      isLoadingRef.current = true;
      callback();
      // Reset loading flag after a short delay to prevent rapid calls
      setTimeout(() => {
        isLoadingRef.current = false;
      }, 200);
    }
  }, [callback]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    const current = ref.current;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [handleIntersection]);

  return ref;
};
