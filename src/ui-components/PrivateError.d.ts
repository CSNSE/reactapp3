/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrivateErrorOverridesProps = {
    PrivateError?: PrimitiveOverrideProps<ViewProps>;
    "Shopper Planner"?: PrimitiveOverrideProps<TextProps>;
    "The event you have tried to view is private, if this is unexpected please verify your account."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PrivateErrorProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PrivateErrorOverridesProps | undefined | null;
}>;
export default function PrivateError(props: PrivateErrorProps): React.ReactElement;
