import { createContext, useCallback, useMemo, useState } from 'react';

import { NO_PROVIDER_DEFINED } from 'external/src/common/const.ts';
import { DirectNetworkProvider } from 'external/src/context/network/DirectNetworkProvider.tsx';
import { CONSOLE_SERVER_HOST } from 'common/const/Urls.ts';
import type { ErrorCallback } from 'external/src/common/apolloClient.ts';
import { AuthErrorPage } from 'external/src/entrypoints/console/components/AuthErrorPage.tsx';

type ConsoleAuthContextProps = {
  connected: boolean;
  auth0: {
    isLoading: boolean;
    isAuthenticated: boolean;
    doFakeLogin: (email: string) => void;
    user:
      | undefined
      | {
          email: string;
        };
  };
};

export const ConsoleAuthContext = createContext<
  ConsoleAuthContextProps | typeof NO_PROVIDER_DEFINED
>(NO_PROVIDER_DEFINED);

type ConsoleError = 'duplicate_auth0_account' | 'unexpected_auth_error';

export function ConsoleAuthContextProvider(
  props: React.PropsWithChildren<any>,
) {
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<ConsoleError>();

  const onConnectError: ErrorCallback = useCallback((error) => {
    // Yes this is slightly hacky but I did not want to dive into the
    // apollo client to also push in the api error code
    let message: ConsoleError = 'unexpected_auth_error';

    if (
      // This string is from the ApiErrors /monorepo/server/src/public/routes/platform/util.ts
      error.message.includes(
        'User has logged in with different connection type.',
      )
    ) {
      message = 'duplicate_auth0_account';
    }
    setToken(null);
    setErrorMessage(message);
  }, []);

  const doFakeLogin = useCallback((loginEmail: string) => {
    setEmail(loginEmail);
    fetch(`/consolelogin/${loginEmail}`)
      .then((r) => r.text())
      .then(
        (r) => setToken(r),
        (e) => {
          console.error(e);
          setErrorMessage('unexpected_auth_error');
        },
      );
  }, []);

  const contextValue = useMemo(
    () => ({
      connected: token !== null,
      auth0: {
        isLoading: false,
        isAuthenticated: token !== null,
        doFakeLogin,
        user: token !== null && email !== undefined ? { email } : undefined,
      },
    }),
    [token, email, doFakeLogin],
  );

  return (
    <ConsoleAuthContext.Provider value={contextValue}>
      {!errorMessage ? (
        <DirectNetworkProvider
          apiHost={CONSOLE_SERVER_HOST}
          logGraphQLErrors={true}
          fetchAccessToken={false}
          token={token}
          errorCallback={onConnectError}
        >
          {props.children}
        </DirectNetworkProvider>
      ) : (
        <AuthErrorPage
          errorMessage={errorMessage}
          email={email}
          logout={() => {}}
        />
      )}
    </ConsoleAuthContext.Provider>
  );
}
