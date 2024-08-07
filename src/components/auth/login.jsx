import React, { useState } from "react";
import Cookies from "js-cookie";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "@data/auth/use-login.mutation";
import Logo from "@components/ui/logo";
import Alert from "@components/ui/alert";
import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useUI } from "@contexts/ui.context";
import { useTranslation } from "next-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FacebookIcon } from "@components/icons/facebook";
import { GoogleIcon } from "@components/icons/google";
import { useModalAction } from "@components/ui/modal/modal.context";
import { useRouter } from "next/router";

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("error-email-format")
    .required("error-email-required"),
  password: yup.string().required("error-password-required"),
});

const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { t } = useTranslation("common");
  const { mutate: login, isLoading: loading } = useLoginMutation();
  const [errorMsg, setErrorMsg] = useState("");
  const { authorize } = useUI();
  const router = useRouter();
  const { openModal, closeModal } = useModalAction();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues,
  });

  function onSubmit({ email, password }) {
    login(
      {
        email,
        password,
      },
      {
        onSuccess: (data) => {
          if (data?.token && data?.permissions?.length) {
            Cookies.set("auth_token", data.token);
            Cookies.set("auth_permissions", data.permissions);
            authorize();
            closeModal();
            router.reload();
            return;
          }
          if (!data.token) {
            setErrorMsg(t("error-credential-wrong"));
          }
        },
        onError: (error) => {
          console.log(error.message);
        },
      }
    );
  }
  return (
    <div className="py-6 px-5 sm:p-8 bg-light w-screen md:max-w-md h-screen md:h-auto flex flex-col justify-center">
      <div className="flex justify-center">
        <Logo />
      </div>
      <p className="text-center text-sm md:text-base text-body mt-4 sm:mt-5 mb-8 sm:mb-10">
        {t("login-helper")}
      </p>
      {errorMsg && (
        <Alert
          variant="error"
          message={t(errorMsg)}
          className="mb-6"
          closeable={true}
          onClose={() => setErrorMsg("")}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t("text-email")}
          {...register("email")}
          type="email"
          variant="outline"
          className="mb-5"
          error={t(errors.email?.message)}
        />
        <PasswordInput
          label={t("text-password")}
          {...register("password")}
          error={t(errors.password?.message)}
          variant="outline"
          className="mb-5"
          forgotPageRouteOnClick={() => openModal("FORGOT_VIEW")}
        />

        <div className="mt-8">
          <Button
            className="w-full h-11 sm:h-12"
            loading={loading}
            disabled={loading}
          >
            {t("text-login")}
          </Button>
        </div>
      </form>
      {/* End of forgot login form */}

      {/* <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light">
          {t("text-or")}
        </span>
      </div> */}
      {/* 
      <div className="grid grid-cols-1 gap-4 mt-2">
        <Button
          className="w-full !bg-social-facebook hover:!bg-social-facebook-hover"
          // loading={loading}
          disabled={loading}
          onClick={() => {
            signIn("facebook");
          }}
        >
          <FacebookIcon className="w-4 h-4 mr-3" />
          {t("text-login-facebook")}
        </Button>
        <Button
          className="!bg-social-google hover:!bg-social-google-hover"
          // loading={loading}
          disabled={loading}
          onClick={() => {
            signIn("google");
          }}
        >
          <GoogleIcon className="w-4 h-4 mr-3" />
          {t("text-login-google")}
        </Button>
      </div> */}

      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8">
        <hr className="w-full" />
      </div>
      <div className="text-sm sm:text-base text-body text-center">
        {t("text-no-account")}{" "}
        <button
          onClick={() => openModal("REGISTER")}
          className="ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover hover:no-underline focus:no-underline"
        >
          {t("text-register")}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
