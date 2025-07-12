import type { GlassEffectViewProps as InternalProps } from "./GlassEffectViewNativeComponent";
export * from "./GlassEffectViewNativeComponent";
export type GlassEffectViewProps = Omit<InternalProps, "useContainerEffect">;
export declare const isNativeModuleAvailable: boolean;
export declare const GlassEffectView: (props: GlassEffectViewProps) => import("react/jsx-runtime").JSX.Element;
export declare const GlassEffectContainerView: (props: Omit<GlassEffectViewProps, "useContainerEffect">) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map