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
import { appWithTranslation } from "next-i18next";
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

const Noop = ({ children }) => <>{children}</>;

const AppSettings = (props) => {
  const { data, isLoading: loading, error } = useSettingsQuery();
  if (loading) return <div>Loader</div>;
  if (error) return <div>Error:{error}</div>;
  return <SettingsProvider initialValue={data?.settings?.options} {...props} />;
};
// const dehydratedState = dehydrate(helpers?.queryClient);
// const SocialLoginProvider = () => {
//   const [session, loading] = useSession();
//   // const { mutate: socialLogin } = useSocialLoginMutation();
//   const { closeModal } = useModalAction();
//   const { authorize, isAuthorize } = useUI();
//   const [errorMsg, setErrorMsg] = useState("");

//   // useEffect(() => {
//   //   // is true when valid social login access token and provider is available in the session
//   //   // but not authorize/logged in yet
//   //   if (!isAuthorize && session?.accessToken && session?.provider) {
//   //     socialLogin(
//   //       {
//   //         provider: session?.provider,
//   //         access_token: session?.accessToken,
//   //       },
//   //       {
//   //         onSuccess: (data) => {
//   //           if (data?.token && data?.permissions?.includes(CUSTOMER)) {
//   //             Cookies.set("auth_token", data.token);
//   //             Cookies.set("auth_permissions", data.permissions);
//   //             authorize();
//   //             closeModal();
//   //           }
//   //           if (!data.token) {
//   //             setErrorMsg("The credentials was wrong!");
//   //           }
//   //           if (!data.permissions.includes(CUSTOMER)) {
//   //             setErrorMsg("Doesn't have enough permission");
//   //           }
//   //         },
//   //         onError: (error) => {
//   //           console.log(error.message);
//   //         },
//   //       }
//   //     );
//   //   }
//   // }, [isAuthorize, session]);

//   // When rendering client side don't display anything until loading is complete
//   if (typeof window !== "undefined" && loading) return null;

//   return <div>{errorMsg}</div>;
// };

function CustomApp({ Component, pageProps }) {
  const queryClientRef = useRef(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const Layout = Component.Layout || Noop;
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppSettings>
          <ModalProvider>
            {/* <CartProvider> */}
            <UIProvider>
              {/* <CheckoutProvider> */}
              {/* <SearchProvider> */}
              <Layout {...pageProps}>
                {/* <Seo /> */}
                {/* <Component {...pageProps} /> */}
                <div className="flex flex-col justify-between items-center w-full h-full relative overflow-hidden bg-[#2e2f30]">
                  <div className="flex-grow-0 flex-shrink-0 w-[414px] h-11 relative overflow-hidden">
                    <p className="absolute left-[132px] top-[13px] text-base font-semibold text-center text-white/60">
                      Exam List
                    </p>
                    <p className="absolute left-[220px] top-[11px] text-lg font-semibold text-center text-white">
                      Random
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-center self-stretch flex-grow relative px-[25px]">
                    <p className="self-stretch flex-grow w-[364px] h-[684px] text-3xl text-center text-white">
                      In the dry season how many things in the world is a better
                      place in the universe? Testing testing testing testing
                      testing testing testing testing testing testing testing
                      testing testing testing testing testing test
                    </p>
                    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[364px] h-[70px] text-xl font-semibold text-center text-white">
                        See Choices
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[62px] relative px-5">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-5">
                      <p className="w-[374px] absolute left-5 top-0 text-[17px] font-semibold text-left text-white">
                        crop science
                      </p>
                    </div>
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-[35px] relative overflow-hidden">
                      <div className="w-[374px] h-[35px] absolute left-[-0.5px] top-[-1.5px]"></div>
                      <div className="w-[134px] h-[5px] absolute left-[119.5px] top-[19.5px] rounded-[100px] bg-[#e9e9e9]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 absolute left-[366px] top-[430px] gap-[29px]">
                    <div className="flex-grow-0 flex-shrink-0 w-[47px] h-[58.5px]">
                      <img
                        className="absolute left-[-0.5px] top-[-0.5px]"
                        // src="ellipse-3.png"
                      />
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-[35px] h-[130.5px]">
                      <div className="w-[34.25px] h-[50.5px] opacity-90">
                        <p className="absolute left-[6.5px] top-[203px] text-[13px] font-semibold text-center text-white">
                          Share
                        </p>
                      </div>
                      <div className="w-[35px] h-[53.5px] opacity-90">
                        <p className="absolute left-[12.5px] top-[126px] text-[13px] font-semibold text-center text-white">
                          578
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>Test</div> */}
              </Layout>
              {/* <Brader /> */}
              <ToastContainer autoClose={2000} />
              <ManagedModal />
              <SidebarContainer />
              {/* </SearchProvider> */}
              {/* </CheckoutProvider> */}
              {/* <SocialLoginProvider /> */}
            </UIProvider>
            {/* </CartProvider> */}
          </ModalProvider>
        </AppSettings>
        <ReactQueryDevtools />
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
