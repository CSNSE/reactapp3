/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  const rectangleFourOnClick = useNavigateAction({ type: "url", url: "/info" });
  const rectangleThreeOnClick = useNavigateAction({ type: "url", url: "/new" });
  const shopperPlannerThreeEightFiveSixTwoZeroSevenOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
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
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <View
        width="81px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="118px"
        left="250px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(31,115,241,1)"
        onClick={() => {
          rectangleFourOnClick();
        }}
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
      <Text
        fontFamily="Istok Web"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="17.2734375px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="127px"
        left="280px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Info"
        {...getOverrideProps(overrides, "Info")}
      ></Text>
      <View
        width="81px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="118px"
        left="44px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(31,115,241,1)"
        onClick={() => {
          rectangleThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
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
        top="64px"
        left="-2px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Shopper Planner"
        onClick={() => {
          shopperPlannerThreeEightFiveSixTwoZeroSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Shopper Planner3856207")}
      ></Text>
      <Text
        fontFamily="Istok Web"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="17.2734375px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="127px"
        left="57px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Begin list"
        {...getOverrideProps(overrides, "Begin list")}
      ></Text>
      <Text
        fontFamily="Istok Web"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="17.2734375px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="110px"
        height="33px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="31px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Shopper Planner"
        {...getOverrideProps(overrides, "Shopper Planner3856209")}
      ></Text>
    </View>
  );
}
