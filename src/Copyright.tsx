import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Copyright(): ReactElement {
  const { t } = useTranslation();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {t("Copyright © ")}
      <Link color="inherit" href={t("https://material-ui.com/")}>
        {t("Simon")}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
