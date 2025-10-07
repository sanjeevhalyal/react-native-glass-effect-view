"use strict";

import { Platform } from "react-native";
import NativeGlassEffectView from "./GlassEffectViewNativeComponent";
import { FallbackGlassEffectView } from "./FallbackGlassEffectView.js";
import { jsx as _jsx } from "react/jsx-runtime";
export * from "./GlassEffectViewNativeComponent";
const getIOSMajorVersion = () => {
  const version = String(Platform.Version);
  return parseInt(version.split('.')?.[0] ?? '0', 10);
};
export const isNativeModuleAvailable = Platform.OS === "ios" && getIOSMajorVersion() >= 26;
const GlassEffectViewImpl = props => {
  if (isNativeModuleAvailable && props.useNative !== false) {
    return /*#__PURE__*/_jsx(NativeGlassEffectView, {
      ...props
    });
  }
  return /*#__PURE__*/_jsx(FallbackGlassEffectView, {
    ...props
  });
};
export const GlassEffectView = props => {
  return /*#__PURE__*/_jsx(GlassEffectViewImpl, {
    ...props,
    useContainerEffect: false
  });
};
export const GlassEffectContainerView = props => {
  return /*#__PURE__*/_jsx(GlassEffectViewImpl, {
    ...props,
    useContainerEffect: true
  });
};
//# sourceMappingURL=index.js.map