import Button from "@components/ui/button";
import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "next-i18next";
import * as yup from "yup";

const schema = yup.object().shape({
  token: yup.string().required("error-password-required"),
});

const EnterTokenView = ({ onSubmit, loading }) => {
  const { t } = useTranslation("common");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        label={t("token-label")}
        {...register("token")}
        variant="outline"
        className="mb-5"
        error={t(errors.token?.message)}
      />
      <Button className="w-full h-11" loading={loading} disabled={loading}>
        {t("text-submit-token")}
      </Button>
    </form>
  );
};

export default EnterTokenView;
