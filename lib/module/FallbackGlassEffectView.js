"use strict";

import { StyleSheet, useColorScheme, View } from "react-native";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const FallbackGlassEffectView = props => {
  // Determine the appearance based on the props or the user's color scheme
  const userColorScheme = useColorScheme();
  const isAuto = !props.appearance || props.appearance === "default";
  const appearance = isAuto ? userColorScheme : props.appearance;
  const styles = appearance === "dark" ? darkStyles : lightStyles;
  const flattenedStyle = StyleSheet.flatten([styles.container, props.style]);
  return /*#__PURE__*/_jsxs(View, {
    ...props,
    style: [styles.container, props.isInteractive && styles.interactive, {
      position: flattenedStyle.position,
      top: flattenedStyle.top,
      left: flattenedStyle.left,
      right: flattenedStyle.right,
      bottom: flattenedStyle.bottom,
      width: flattenedStyle.width,
      height: flattenedStyle.height,
      zIndex: flattenedStyle.zIndex,
      overflow: flattenedStyle.overflow,
      borderRadius: flattenedStyle.borderRadius,
      borderTopRightRadius: flattenedStyle.borderTopRightRadius,
      borderTopLeftRadius: flattenedStyle.borderTopLeftRadius,
      borderBottomRightRadius: flattenedStyle.borderBottomRightRadius,
      borderBottomLeftRadius: flattenedStyle.borderBottomLeftRadius,
      margin: flattenedStyle.margin,
      marginTop: flattenedStyle.marginTop,
      marginBottom: flattenedStyle.marginBottom,
      marginLeft: flattenedStyle.marginLeft,
      marginRight: flattenedStyle.marginRight,
      marginHorizontal: flattenedStyle.marginHorizontal,
      marginVertical: flattenedStyle.marginVertical
    }],
    children: [/*#__PURE__*/_jsx(View, {
      style: [styles.blur, {
        borderRadius: flattenedStyle.borderRadius || 0,
        backgroundColor: props.tintColor || styles.blur.backgroundColor,
        opacity: props.tintColor ? 0.98 : styles.blur.opacity
      }]
    }), /*#__PURE__*/_jsx(View, {
      style: [props.style, styles.inner],
      children: props.children
    })]
  });
};
const lightStyles = StyleSheet.create({
  container: {
    borderRadius: 0,
    boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.2)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255, 255, 255, 0.5)"
  },
  interactive: {
    boxShadow: "0px 6px 32px rgba(0, 0, 0, 0.2)"
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    opacity: 0.85
  },
  inner: {
    ...StyleSheet.absoluteFillObject,
    boxShadow: "inset 0px 0px 20px -5px rgba(255, 255, 255, 0.2)",
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginHorizontal: 0,
    marginVertical: 0
  }
});
const darkStyles = StyleSheet.create({
  container: {
    borderRadius: 0,
    boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.2)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255, 255, 255, 0.5)",
    position: "relative"
  },
  interactive: {
    boxShadow: "0px 6px 32px rgba(0, 0, 0, 0.2)"
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    opacity: 0.85
  },
  inner: {
    ...StyleSheet.absoluteFillObject,
    boxShadow: "inset 0px 0px 20px -5px rgba(0, 0, 0, 0.2)",
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginHorizontal: 0,
    marginVertical: 0
  }
});
//# sourceMappingURL=FallbackGlassEffectView.js.map