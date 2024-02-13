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
export declare type ListCardOverridesProps = {
    ListCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    Pasta?: PrimitiveOverrideProps<TextProps>;
    example39533870?: PrimitiveOverrideProps<TextProps>;
    example39533871?: PrimitiveOverrideProps<TextProps>;
    Button39533872?: PrimitiveOverrideProps<ButtonProps>;
    Button39533873?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ListCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    lst?: any;
} & {
    overrides?: ListCardOverridesProps | undefined | null;
}>;
export default function ListCard(props: ListCardProps): React.ReactElement;
