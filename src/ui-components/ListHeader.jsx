/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Auth } from "@aws-amplify/auth";
import { useAuth } from "@aws-amplify/ui-react/internal";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function ListHeader(props) {
  const authAttributes = useAuth().user?.attributes ?? {};
  const { overrides, ...rest } = props;
  const shopperPlannerThreeNineFiveThreeThreeSixSevenNineOnClick =
    useNavigateAction({ type: "url", url: "/lists" });
  const buttonThreeNineFiveThreeThreeSixEightOneOnClick = useNavigateAction({
    type: "url",
    url: "newList",
  });
  const buttonThreeNineFiveThreeThreeSixEightTwoOnClick = useNavigateAction({
    type: "url",
    url: "/guide",
  });
  const buttonThreeNineFiveThreeThreeSixEightThreeOnClick = useNavigateAction({
    type: "url",
    url: `${"/lists/"}${authAttributes["email"]}`,
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
      {...getOverrideProps(overrides, "ListHeader")}
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
        height="63px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="48px"
        left="-2px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Planned Events"
        onClick={() => {
          shopperPlannerThreeNineFiveThreeThreeSixSevenNineOnClick();
        }}
        {...getOverrideProps(overrides, "Shopper Planner39533679")}
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
        top="15px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Shopper Planner"
        onClick={() => {
          buttonThreeNineFiveThreeThreeSixEightThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Shopper Planner39533680")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="119px"
        left="42px"
        backgroundColor="rgba(11,153,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="New List"
        onClick={() => {
          buttonThreeNineFiveThreeThreeSixEightOneOnClick();
        }}
        {...getOverrideProps(overrides, "Button39533681")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="119px"
        left="270px"
        backgroundColor="rgba(11,153,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Guide"
        onClick={() => {
          buttonThreeNineFiveThreeThreeSixEightTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Button39533682")}
      ></Button>
    </View>
  );
}
