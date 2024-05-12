// import "@fontsource/open-sans";
// import "@fontsource/open-sans/600.css";
// import "@fontsource/open-sans/700.css";
import "@assets/main.css";
import "react-toastify/dist/ReactToastify.css";
import { UIProvider, useUI } from "@contexts/ui.context";
// import { SearchProvider } from "@contexts/search.context";

// import ErrorMessage from "@components/ui/error-message";
import { SettingsProvider } from "@contexts/settings.context";
// import PageLoader from "@components/ui/page-loader/page-loader";
import { useSettingsQuery } from "@data/settings/use-settings.query";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { Hydrate } from "react-query/hydration";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { appWithTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
// import { useSession } from "next-auth";
// import { dehydrate, HydrationBoundary } from "react-query";
import { Hydrate } from "react-query/hydration";
import ManagedModal from "@components/ui/modal/managed-modal";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  ModalProvider,
  useModalAction,
} from "@components/ui/modal/modal.context";
import { QueryClient, QueryClientProvider } from "react-query";
import SidebarContainer from "../components/common/sidebar/sidebar-container";
import { SearchProvider } from "@contexts/search.context";
import { appWithTranslation } from "next-i18next";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import PageLoader from "../components/ui/page-loader";

const Noop = ({ children }) => <>{children}</>;

export const defaultReactQueryConfig = {
  staleTime: 300000, // 5 minutes
  keepPreviousData: true,
};

const AppSettings = (props) => {
  const { data, isLoading: loading, error } = useSettingsQuery();
  if (loading) return <PageLoader />;
  if (error) return <div>Error:{error}</div>;
  return <SettingsProvider initialValue={data?.settings?.options} {...props} />;
};
// const dehydratedState = dehydrate(helpers?.queryClient);
const SocialLoginProvider = () => {
  const { session, loading } = useSession();
  //   // const { mutate: socialLogin } = useSocialLoginMutation();
  //   const { closeModal } = useModalAction();
  const { authorize, isAuthorize } = useUI();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // is true when valid social login access token and provider is available in the session
    // but not authorize/logged in yet
    if (!isAuthorize && session?.accessToken && session?.provider) {
      socialLogin(
        {
          provider: session?.provider,
          access_token: session?.accessToken,
        },
        {
          onSuccess: (data) => {
            if (data?.token && data?.permissions?.includes(CUSTOMER)) {
              Cookies.set("auth_token", data.token);
              Cookies.set("auth_permissions", data.permissions);
              authorize();
              closeModal();
            }
            if (!data.token) {
              setErrorMsg("The credentials was wrong!");
            }
            if (!data.permissions.includes(CUSTOMER)) {
              setErrorMsg("Doesn't have enough permission");
            }
          },
          onError: (error) => {
            console.log(error.message);
          },
        }
      );
    }
  }, [isAuthorize, session]);

  //   // When rendering client side don't display anything until loading is complete
  //   if (typeof window !== "undefined" && loading) return null;

  return <div>{errorMsg}</div>;
};

function CustomApp({ Component, pageProps }) {
  const queryClientRef = useRef(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: defaultReactQueryConfig,
      },
    });
  }
  const Layout = Component.Layout || Noop;
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        {" "}
        <SessionProvider session={pageProps.session}>
          <AppSettings>
            <ModalProvider>
              {/* <CartProvider> */}
              <UIProvider>
                {/* <CheckoutProvider> */}
                <SearchProvider>
                  <Layout {...pageProps}>
                    {/* <Seo /> <NextNProgress /> */}
                    {/* <NextNProgress /> */}
                    <Component {...pageProps} />
                    {/* <div>Test</div> */}
                  </Layout>
                  {/* <Brader /> */}
                  <ToastContainer autoClose={2000} />
                  <ManagedModal />
                  <SidebarContainer />
                </SearchProvider>
                {/* </CheckoutProvider> */}
                <SocialLoginProvider />
              </UIProvider>
              {/* </CartProvider> */}
            </ModalProvider>
          </AppSettings>
          <ReactQueryDevtools />
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default appWithTranslation(CustomApp);

// import { appWithTranslation } from "next-i18next";
// import React from "react";

// const App = ({ Component, pageProps }) => {
//   return <Component {...pageProps} />;
// };

// const AppWithTranslation = appWithTranslation(App);

// export default AppWithTranslation;
