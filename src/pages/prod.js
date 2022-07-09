import Page from "./pages";
import { useTranslation } from "react-i18next";

export default function Prod() {
  const { t, i18n } = useTranslation();

  return (
    <Page>
      <h1>{t("products")}</h1>
    </Page>
  );
}
