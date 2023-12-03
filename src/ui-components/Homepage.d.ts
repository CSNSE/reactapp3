/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type HomepageOverridesProps = {
    Homepage?: PrimitiveOverrideProps<ViewProps>;
    StandardCard38514400?: PrimitiveOverrideProps<FlexProps>;
    image38514401?: PrimitiveOverrideProps<ImageProps>;
    "Card Area38514402"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group38514403"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD38514404"?: PrimitiveOverrideProps<TextProps>;
    "4bds 3 ba 2,530 sqft - Active38514405"?: PrimitiveOverrideProps<TextProps>;
    "832 34th Ave, Seattle, WA 9812238514406"?: PrimitiveOverrideProps<TextProps>;
    StandardCard38514407?: PrimitiveOverrideProps<FlexProps>;
    image38514408?: PrimitiveOverrideProps<ImageProps>;
    "Card Area38514409"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group38514410"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD38514411"?: PrimitiveOverrideProps<TextProps>;
    "4bds 3 ba 2,530 sqft - Active38514412"?: PrimitiveOverrideProps<TextProps>;
    "832 34th Ave, Seattle, WA 9812238514413"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    Info?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Shopper Planner38514417"?: PrimitiveOverrideProps<TextProps>;
    "Begin list"?: PrimitiveOverrideProps<TextProps>;
    "Shopper Planner38514419"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HomepageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomepageOverridesProps | undefined | null;
}>;
export default function Homepage(props: HomepageProps): React.ReactElement;
