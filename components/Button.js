import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Button = ({ onPress, text, size, theme }) => {

  // use theme from the context
  const { theme: currentTheme } = useContext(ThemeContext);


  const dynamicButtonStyles = {
    backgroundColor: currentTheme.button,
    borderColor: currentTheme.border,
  };

  const dynamictextStyles = {
    color: currentTheme.text,
  };

  //combine default styles with theme-dependent styles
  const buttonStyles = [
    styles.button, 
    dynamicButtonStyles,
    size === "double" && styles.buttonDouble,
    theme === "secondary" && styles.buttonSecondary,
    theme === "accent" && styles.buttonAccent,
  ];

  const textStyles = [
    styles.text,
    dynamictextStyles,  
    theme === "secondary" && styles.textSecondary,
  ];


  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    borderWidth: 4,
    margin: 5,
  },
  text: {
    fontSize: 24,
  },

  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
  },
  textSecondary: {
    color: "#060606",
  },
});

export default Button;