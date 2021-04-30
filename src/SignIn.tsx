/* eslint-disable i18next/no-literal-string */
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/icons/Lock";
import React, { ReactElement } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Copyright from "./Copyright";

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  paper: {
    marginTop: spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: spacing(1),
    backgroundColor: palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: spacing(1)
  },
  submit: {
    margin: spacing(3, 0, 2)
  }
}));

interface SignInFields {
  email: string;
  password: string;
  remember: boolean;
}

export default function SignIn(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm<SignInFields>();

  const onSubmit = (data: SignInFields) => {
    alert(JSON.stringify(data));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("Sign in")}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              // Material UI TextField supports
              // `value` and `onChange`
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={t("Email Address")}
                name="email"
                autoComplete="email"
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              // Material UI TextField supports
              // `value` and `onChange`
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label={t("Password")}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            )}
          />

          <Controller
            control={control}
            name="remember"
            render={({ field: { value, onChange } }) => (
              // Checkbox accepts its value as `checked`
              // so we need to connect the props here
              <FormControlLabel
                control={
                  <Checkbox value={value} onChange={onChange} color="primary" />
                }
                label={t("Remember me")}
              />
            )}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {t("Sign in")}
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t("Forgot password?")}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {t("Don't have an account? Sign Up")}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
