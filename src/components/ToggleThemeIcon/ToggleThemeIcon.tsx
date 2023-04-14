import * as S from "./styles";
import { ReactComponent as DarkIcon } from "../../assets/icons/dark_mode.svg";
import { ReactComponent as LightIcon } from "../../assets/icons/light_mode.svg";
import { useContext } from "react";
import { ThemeContext } from "../../context";

export const ToggleThemeIcon = () => {
  const { scheme, toggleTheme } = useContext(ThemeContext);
  return (
    <S.Icon onClick={toggleTheme}>
      {scheme === "dark" ? <LightIcon /> : <DarkIcon />}
    </S.Icon>
  );
};
