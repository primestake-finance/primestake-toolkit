import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <image width="64px" height="64px" href="/images/custom/logo-mobile.png" />
    </Svg>
  );
};

export default Icon;
