import React from "react";
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Hooks/auth';


export function RequireAuth ({ children }: any) {
  const { user } = useAuth()
  const isAuthenticated = !!user.id
  return isAuthenticated ? children : <Navigate to="/" />
}


// Todo componente React recebe props por padrão, e
// todo componente tem a prop children

// O exemplo acima é o mesmo que o código abaixo

// export function RequireAuth(props) {
//   const isAuthenticated = false;

//   return isAuthenticated ? props.children : <Navigate to="/" />;
// }