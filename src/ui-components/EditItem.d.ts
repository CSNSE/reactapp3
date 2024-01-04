/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    TextField394587?: PrimitiveOverrideProps<TextFieldProps>;
    TextField394588?: PrimitiveOverrideProps<TextFieldProps>;
    TextField394589?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Edit Item"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EditItemProps = React.PropsWithChildren<Partial<ViewProps> & {
    edt?: any;
} & {
    overrides?: EditItemOverridesProps | undefined | null;
}>;
export default function EditItem(props: EditItemProps): React.ReactElement;
