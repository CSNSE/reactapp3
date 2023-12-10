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
    StandardCard3856233?: PrimitiveOverrideProps<FlexProps>;
    image3856234?: PrimitiveOverrideProps<ImageProps>;
    "Card Area3856235"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group3856236"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD3856237"?: PrimitiveOverrideProps<TextProps>;
    "4bds 3 ba 2,530 sqft - Active3856238"?: PrimitiveOverrideProps<TextProps>;
    "832 34th Ave, Seattle, WA 981223856239"?: PrimitiveOverrideProps<TextProps>;
    StandardCard3856240?: PrimitiveOverrideProps<FlexProps>;
    image3856241?: PrimitiveOverrideProps<ImageProps>;
    "Card Area3856242"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group3856243"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD3856244"?: PrimitiveOverrideProps<TextProps>;
    "4bds 3 ba 2,530 sqft - Active3856245"?: PrimitiveOverrideProps<TextProps>;
    "832 34th Ave, Seattle, WA 981223856246"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    Finish?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Shopper Planner3856250"?: PrimitiveOverrideProps<TextProps>;
    Add?: PrimitiveOverrideProps<TextProps>;
    "Shopper Planner3856252"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HomepageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomepageOverridesProps | undefined | null;
}>;
export default function Homepage(props: HomepageProps): React.ReactElement;
