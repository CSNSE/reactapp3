/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type FoodCardOverridesProps = {
    FoodCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    Pasta?: PrimitiveOverrideProps<TextProps>;
    example390553?: PrimitiveOverrideProps<TextProps>;
    example390554?: PrimitiveOverrideProps<TextProps>;
    Button390555?: PrimitiveOverrideProps<ButtonProps>;
    Button390559?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FoodCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    fc?: any;
} & {
    overrides?: FoodCardOverridesProps | undefined | null;
}>;
export default function FoodCard(props: FoodCardProps): React.ReactElement;
