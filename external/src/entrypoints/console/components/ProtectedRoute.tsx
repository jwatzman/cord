import type { ComponentType, FC } from 'react';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { Loading } from 'external/src/entrypoints/console/components/Loading.tsx';
import { CustomerInfoContext } from 'external/src/entrypoints/console/contexts/CustomerInfoProvider.tsx';
import { useContextThrowingIfNoProvider } from 'external/src/effects/useContextThrowingIfNoProvider.ts';
import { ConsoleAuthContext } from 'external/src/entrypoints/console/contexts/ConsoleAuthContextProvider.tsx';
import { ConsoleRoutes } from 'external/src/entrypoints/console/routes.ts';

export function protectUntilConnected<P extends object>(
  Component: ComponentType<P>,
): FC<P> {
  return function ProtectUntilConnected(props: P): JSX.Element {
    const { connected } = useContextThrowingIfNoProvider(ConsoleAuthContext);

    return connected ? (
      <Component {...props} />
    ) : (
      <Navigate replace to={ConsoleRoutes.LOGIN}></Navigate>
    );
  };
}

// if a new user (one who is not associated with a CustomerEntity yet) tries to
// access a protected route, redirect them to home
// TODO - new users should be automatically associated with customers now, so
// we can phase this out
function withRedirectNewCustomer<P extends object>(
  Component: ComponentType<P>,
): FC<P> {
  return function WithRedirectNewCustomer(props: P): JSX.Element {
    const { loading, customerID } =
      useContextThrowingIfNoProvider(CustomerInfoContext);
    if (loading) {
      return <Loading />;
    } else if (customerID) {
      return <Component {...props} />;
    } else {
      return <Navigate replace to={ConsoleRoutes.LOGIN}></Navigate>;
    }
  };
}

const ProtectedRoute = protectUntilConnected(
  withRedirectNewCustomer(React.Fragment),
);
export default ProtectedRoute;
