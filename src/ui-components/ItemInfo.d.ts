/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    "Item Info"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    Done?: PrimitiveOverrideProps<TextProps>;
    Submit?: PrimitiveOverrideProps<TextProps>;
    TextField38514548?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38514555?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38514562?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemInfoProps = React.PropsWithChildren<Partial<ViewProps> & {
    food?: any;
} & {
    overrides?: ItemInfoOverridesProps | undefined | null;
}>;
export default function ItemInfo(props: ItemInfoProps): React.ReactElement;
