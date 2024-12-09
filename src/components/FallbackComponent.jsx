import { useEffect, useRef } from 'react';

const FallbackComponent = () => {
  const timeRef = useRef({ start: null, end: null });

  useEffect(() => {
    timeRef.current.start = performance.now();
    console.log('Fallback UI rendered');

    return () => {
      timeRef.current.end = performance.now();
      const duration = timeRef.current.end - timeRef.current.start;
      console.log(`Fallback UI was displayed for ${duration} ms`);
    };
  }, []);

  return <div>Loading...</div>;
};

export default FallbackComponent;