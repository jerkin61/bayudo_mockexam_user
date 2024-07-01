import Layout from "@components/layout/layout";
import Accordion from "@components/ui/accordion";
// import { faq } from "@settings/faq.settings";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
export const faq = [
  {
    title: "faq-one-title",
    content: "faq-one-content",
  },
  {
    title: "faq-two-title",
    content: "faq-two-content",
  },
  {
    title: "faq-three-title",
    content: "faq-three-content",
  },
  {
    title: "faq-four-title",
    content: "faq-four-content",
  },
];

export default function HelpPage() {
  // const { t } = useTranslation();
  return (
    <section className="py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
      <header className="text-center mb-8">
        <h1 className="font-bold text-xl md:text-2xl xl:text-3xl">
          Frequently Asked Questions
        </h1>
      </header>
      <div className="max-w-screen-lg w-full mx-auto">
        <Accordion items={faq} translatorNS="faq" />
      </div>
    </section>
  );
}

HelpPage.Layout = Layout;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
