import { useLocation } from 'react-router-dom';

export function useQueryParams() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  return params;
}