/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Text, TextField, View } from "@aws-amplify/ui-react";
export default function NewList(props) {
  const { lst, not, overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="713px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NewList")}
      {...rest}
    >
      <Text
        fontFamily="Istok Web"
        fontSize="36px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="51.8203125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="392px"
        height="71px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="76px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create Event"
        {...getOverrideProps(overrides, "Create Event")}
      ></Text>
      <TextField
        width="300px"
        height="unset"
        label="Event Name"
        position="absolute"
        top="197px"
        left="45px"
        placeholder={lst?.name}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39533790")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Description"
        position="absolute"
        top="319px"
        left="44px"
        placeholder={lst?.description}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39533791")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Image"
        position="absolute"
        top="427px"
        left="44px"
        placeholder={lst?.image}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39533792")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="626px"
        left="155px"
        backgroundColor="rgba(11,153,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Finish"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
