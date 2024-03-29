/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, SwitchFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NewListOverridesProps = {
    NewList?: PrimitiveOverrideProps<ViewProps>;
    "Create Event"?: PrimitiveOverrideProps<TextProps>;
    TextField4033304?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4033305?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4033306?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    SwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type NewListProps = React.PropsWithChildren<Partial<ViewProps> & {
    lst?: any;
    not?: any;
} & {
    overrides?: NewListOverridesProps | undefined | null;
}>;
export default function NewList(props: NewListProps): React.ReactElement;
