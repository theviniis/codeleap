import { typography, colors } from "../../themes";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<HTMLElement>;
  forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<HTMLElement>;
  variant?: Exclude<keyof typeof typography, "family">;
  truncate?: boolean;
  color?: keyof typeof colors.text;
}
