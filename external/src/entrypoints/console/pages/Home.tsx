import { Navigate } from 'react-router-dom';
import { ConsoleAuthContext } from 'external/src/entrypoints/console/contexts/ConsoleAuthContextProvider.tsx';
import { ConsoleRoutes } from 'external/src/entrypoints/console/routes.ts';
import { useContextThrowingIfNoProvider } from 'external/src/effects/useContextThrowingIfNoProvider.ts';

export default function Home() {
  const { connected } = useContextThrowingIfNoProvider(ConsoleAuthContext);

  return (
    <Navigate
      to={connected ? ConsoleRoutes.PROJECTS : ConsoleRoutes.LOGIN}
      replace
    />
  );
}
