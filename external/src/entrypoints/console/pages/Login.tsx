import * as cookie from 'cookie';

import { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ConsoleRoutes } from 'external/src/entrypoints/console/routes.ts';
import { useSyncUserMutation } from 'external/src/entrypoints/console/graphql/operations.ts';
import { useContextThrowingIfNoProvider } from 'external/src/effects/useContextThrowingIfNoProvider.ts';
import { ConsoleAuthContext } from 'external/src/entrypoints/console/contexts/ConsoleAuthContextProvider.tsx';
import { CustomerInfoContext } from 'external/src/entrypoints/console/contexts/CustomerInfoProvider.tsx';
import { DuplicationCustomerEmailDomains } from 'external/src/entrypoints/console/components/DuplicateCustomerEmailDomains.tsx';

const FORCE_CREATE_NEW_CUSTOMER_KEY = 'cord_create_new_customer';
// We have set /login as our Auth0 Application login URI.
// In some scenarios, Auth0 will need to redirect users here.
export default function Login() {
  const {
    connected,
    auth0: { isLoading, isAuthenticated, doFakeLogin, user },
  } = useContextThrowingIfNoProvider(ConsoleAuthContext);
  const { refetch: refetchCustomerInfo } =
    useContextThrowingIfNoProvider(CustomerInfoContext);
  const [syncUser] = useSyncUserMutation();

  const [updated, setUpdated] = useState<
    | {
        success: boolean;
        customerIDs?: string[] | null;
        customerName?: string | null;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    const pageURL = new URL(window.location.href);
    const setCreateCustomerParam = Boolean(
      pageURL.searchParams.get('newcustomer'),
    );

    if (setCreateCustomerParam) {
      window.localStorage.setItem(FORCE_CREATE_NEW_CUSTOMER_KEY, 'true');
    }
  }, []);

  useEffect(() => {
    if (!isLoading && user && connected) {
      const { signup_coupon: signupCoupon } = cookie.parse(document.cookie);

      const createNewCustomerParam = window.localStorage.getItem(
        FORCE_CREATE_NEW_CUSTOMER_KEY,
      );

      syncUser({
        variables: {
          email: user.email,
          name: undefined,
          picture: undefined,
          signupCoupon,
          createNewCustomer: Boolean(createNewCustomerParam),
        },
      })
        .then((response) => {
          setUpdated(
            response.errors ? { success: false } : response?.data?.syncUser,
          );
          refetchCustomerInfo?.();
          window.localStorage.removeItem(FORCE_CREATE_NEW_CUSTOMER_KEY);
        })
        .catch((_) => setUpdated({ success: false }));
    }
  }, [isLoading, connected, syncUser, user, refetchCustomerInfo]);

  const forceCreateNewCustomer = useCallback(() => {
    const { signup_coupon: signupCoupon } = cookie.parse(document.cookie);

    void syncUser({
      variables: {
        email: user?.email as string,
        name: undefined,
        picture: undefined,
        signupCoupon,
        createNewCustomer: true,
      },
    })
      .then((response) => {
        setUpdated(
          response.errors ? { success: false } : response?.data?.syncUser,
        );
        refetchCustomerInfo?.();
      })
      .catch((_) => setUpdated({ success: false }));
  }, [refetchCustomerInfo, syncUser, user?.email]);

  if (isLoading) {
    // Don't show anything on screen til we know the Auth0 status, as we may
    // redirect there and we don't want a flicker
    return null;
  }
  if (!isLoading && !isAuthenticated) {
    // When we can't authenticate a user/ a user is in password reset flow
    // we redirect them to auth0's /authorize endpoint
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.target as any);
          doFakeLogin(fd.get('email') as string);
        }}
      >
        <div>
          <label htmlFor="email">Email:</label>
        </div>
        <div>
          <input type="text" id="email" name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

  if (!updated) {
    return null;
  } else if (updated.customerIDs) {
    // If there are customers who have the same domain in their email
    return (
      <DuplicationCustomerEmailDomains
        customerIDs={updated.customerIDs}
        createNewCustomer={forceCreateNewCustomer}
        user={user}
        customerName={updated.customerName}
      />
    );
  } else if (updated.success) {
    return <Navigate replace to={ConsoleRoutes.HOME}></Navigate>;
  } else {
    return <Navigate replace to={'404'}></Navigate>;
  }
}
