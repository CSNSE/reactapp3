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
export declare type ItemInfoOverridesProps = {
    ItemInfo?: PrimitiveOverrideProps<ViewProps>;
    "Create Item"?: PrimitiveOverrideProps<TextProps>;
    TextField3930224?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3930225?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3930226?: PrimitiveOverrideProps<TextFieldProps>;
    Button3930183?: PrimitiveOverrideProps<ButtonProps>;
    Button3930187?: PrimitiveOverrideProps<ButtonProps>;
    TextField39931269?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemInfoProps = React.PropsWithChildren<Partial<ViewProps> & {
    food?: any;
    lst?: any;
    itemInfo?: React.ReactNode;
} & {
    overrides?: ItemInfoOverridesProps | undefined | null;
}>;
export default function ItemInfo(props: ItemInfoProps): React.ReactElement;
