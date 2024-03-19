/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WelcomePageOverridesProps = {
    WelcomePage?: PrimitiveOverrideProps<ViewProps>;
    "Shopper Planner"?: PrimitiveOverrideProps<TextProps>;
    Button39533642?: PrimitiveOverrideProps<ButtonProps>;
    Button39533699?: PrimitiveOverrideProps<ButtonProps>;
    "Welcome to Shopper Planner. You can press info to learn about us and begin making your list when your ready."?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type WelcomePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: WelcomePageOverridesProps | undefined | null;
}>;
export default function WelcomePage(props: WelcomePageProps): React.ReactElement;
