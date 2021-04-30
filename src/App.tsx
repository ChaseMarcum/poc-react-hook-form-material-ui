import "./styles.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import SignIn from "./SignIn";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignIn />
    </ThemeProvider>
  );
}
