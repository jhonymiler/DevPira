import React from "react";
import { TextHeading } from "../../ts";
import Text, { TextProps } from "../Text/Text";

export interface TitleProps {
  children: React.ReactNode;
  heading?: TextHeading;
}

const Title: React.FC<TitleProps & TextProps> = ({
  children,
  heading = "h6",
  ...textProps
}: TitleProps & TextProps) => {
  return (
    <Text variant={heading} component={heading} block {...textProps}>
      {children}
    </Text>
  );
};

export default Title;
