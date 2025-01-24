import { Navigate } from 'react-router-dom';
import { ConsoleRoutes } from 'external/src/entrypoints/console/routes.ts';

// This page should just redirect straight to auth0
export function Signup() {
  return <Navigate replace to={ConsoleRoutes.HOME}></Navigate>;
}
