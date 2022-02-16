import React, { SetStateAction, useEffect, useState } from 'react';

// Criamos um Type pois interface não funciona com tuplas
type Response<T> = [T, React.Dispatch<SetStateAction<T>>];

export function usePersistentState<T>(
  key: string,
  initialValue?: T
): Response<T> {
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key);

    // if(storageValue){
    //   return JSON.parse(storageValue);
    // }

    // return initialValue;

    return storageValue ? JSON.parse(storageValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}