import React, { FC } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { ImageViewer } from "./ImageViewer";

type LogoProps = {
  size?: number;
};
const Logo: FC<LogoProps> = ({ size = 100 }) => {
  const theme = useColorScheme();

  if (theme === "light")
    return (
      <ImageViewer
        source={require("../assets/logo-light.png")}
        style={[styles.logo, { width: size, height: size }]}
      />
    );

  return (
    <ImageViewer
      source={require("../assets/logo-dark.png")}
      style={[styles.logo, { width: size, height: size }]}
    />
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});
