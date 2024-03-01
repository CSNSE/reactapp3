/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ListUpdateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
    author?: string;
    view?: boolean;
};
export declare type ListUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    view?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListUpdateFormOverridesProps = {
    ListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    view?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ListUpdateFormProps = React.PropsWithChildren<{
    overrides?: ListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    list?: any;
    onSubmit?: (fields: ListUpdateFormInputValues) => ListUpdateFormInputValues;
    onSuccess?: (fields: ListUpdateFormInputValues) => void;
    onError?: (fields: ListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListUpdateFormInputValues) => ListUpdateFormInputValues;
    onValidate?: ListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ListUpdateForm(props: ListUpdateFormProps): React.ReactElement;
