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
export declare type ListHeaderOverridesProps = {
    ListHeader?: PrimitiveOverrideProps<ViewProps>;
    "Shopper Planner39533679"?: PrimitiveOverrideProps<TextProps>;
    "Shopper Planner39533680"?: PrimitiveOverrideProps<TextProps>;
    Button39533681?: PrimitiveOverrideProps<ButtonProps>;
    Button39533682?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ListHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ListHeaderOverridesProps | undefined | null;
}>;
export default function ListHeader(props: ListHeaderProps): React.ReactElement;
