import { useState } from 'react';

type SomeFunction = (...args: any[]) => void;

export default function useDebounce<Func extends SomeFunction>(func: Func, delay: number) {
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

  return ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer);
    setTimer(newTimer);
  }) as Func;
}
