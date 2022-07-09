import Page from "./pages";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();
  return (
    <Page>
      <h1>{t("about_us")}</h1>
    </Page>
  );
}
