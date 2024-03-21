/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function CommentCard(props) {
  const { it, overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="192px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CommentCard")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="138px"
        left="297px"
        backgroundColor="rgba(11,153,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Delete"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Text
        fontFamily="Istok Web"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="17.2734375px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="75px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="17px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={it?.author}
        {...getOverrideProps(overrides, "Author:")}
      ></Text>
      <Text
        fontFamily="Istok Web"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="17.2734375px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="381px"
        height="69px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="61px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={it?.words}
        {...getOverrideProps(overrides, "Comment")}
      ></Text>
    </View>
  );
}
