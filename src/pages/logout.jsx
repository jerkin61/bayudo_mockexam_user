import { useEffect } from "react";
import { useRouter } from "next/router";
// import { signOut as socialLoginSignOut } from "next-auth/client";
import Cookies from "js-cookie";
import Spinner from "@components/ui/loaders/spinner/spinner";
import { useLogoutMutation } from "@data/auth/use-logout.mutation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function SignOut() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { mutate } = useLogoutMutation();

  useEffect(() => {
    // Perform any necessary cleanup or side effects
    return () => {
      // socialLoginSignOut({ redirect: false });
      mutate();
      Cookies.remove("auth_token");
      Cookies.remove("auth_permissions");
      // Reload the page
      window.location.reload();
    };
  }, []);

  // After performing cleanup and reloading, navigate to "/main"
  useEffect(() => {
    // Navigate to "/main"
    router.push("/main");
  }, []);

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <Spinner text={t("text-signing-out")} />
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
