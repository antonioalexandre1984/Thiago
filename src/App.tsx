import React from "react";
import { Header } from "./components/organisms";
import { Container, FlexBox } from "./styles/";
import { DivTest } from "./test/Div";

import { FiInstagram, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
import { StyledCube } from "./components/atoms/Cube/style";
import { HeadLine } from "./components/atoms/HeadLine";
import { Title } from "./components/atoms/Title";
import { StyledButton, StyledText } from "./components/atoms";
import { DownloadCV } from "./components/molecules/DownloadCV";
import { BackgroundYellowImage } from "./components/atoms/BackgroundYellowImage";
import light from './themes/light';
import dark from './themes/dark';
import { Main } from "./components/organisms/Main";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global";
import usePersistedState from "./utils/usePersistedState";

export const App = () => {
  // estados para o tema
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  // constante usada para setar a função setTheme
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  //incluido aqui os arquivos que estavam no main.tsx
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Container>
          <FlexBox direction='column' justify='center' align='center'>
            <Header toggleTheme={toggleTheme} />
            <Main />
          </FlexBox>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};
