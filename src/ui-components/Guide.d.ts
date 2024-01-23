/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type GuideOverridesProps = {
    Guide?: PrimitiveOverrideProps<ViewProps>;
    "Shopper Planner"?: PrimitiveOverrideProps<TextProps>;
    Guide39533754?: PrimitiveOverrideProps<TextProps>;
    "First make a new list, or edit an existing one. Here you can add all the recipes you\u2019ll need for the event."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type GuideProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: GuideOverridesProps | undefined | null;
}>;
export default function Guide(props: GuideProps): React.ReactElement;
