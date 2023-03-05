import { useContext, useEffect, useState } from "react";
import { Container, FlexBox } from "../../../styles/";
import { Logo, SwitchTheme } from "../../atoms";
import { Navbar } from "../../molecules/";
import { StyledHeader } from "./style";
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';

interface Props {
  toggleTheme: () => void;
}

export const Header = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <StyledHeader>
      <Container>
        <FlexBox justify='space-between' align='center' direction='row'>
          <FlexBox align='center' gap='xl' justify='flex-start' direction='row'>
            <Logo />
            <Navbar />
          </FlexBox>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={50}
            handleDiameter={20}
            offColor={shade(0.50, colors.primary)}
            onColor={colors.secondary}
          />
        </FlexBox>
      </Container>
    </StyledHeader>
  );
};
