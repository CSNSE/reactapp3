/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type EditItemOverridesProps = {
    EditItem?: PrimitiveOverrideProps<ViewProps>;
    "Shopper Planner"?: PrimitiveOverrideProps<TextProps>;
    "Edit Item"?: PrimitiveOverrideProps<TextProps>;
    StandardCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD"?: PrimitiveOverrideProps<TextProps>;
    "4bds 3 ba 2,530 sqft - Active"?: PrimitiveOverrideProps<TextProps>;
    "832 34th Ave, Seattle, WA 98122"?: PrimitiveOverrideProps<TextProps>;
    TextField3930161?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3930162?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3930163?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type EditItemProps = React.PropsWithChildren<Partial<ViewProps> & {
    edt?: any;
} & {
    overrides?: EditItemOverridesProps | undefined | null;
}>;
export default function EditItem(props: EditItemProps): React.ReactElement;
