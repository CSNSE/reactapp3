/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Auth } from "@aws-amplify/auth";
import { useAuth } from "@aws-amplify/ui-react/internal";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function WelcomePage(props) {
  const authAttributes = useAuth().user?.attributes ?? {};
  const { overrides, ...rest } = props;

  const buttonThreeNineFiveThreeThreeSixFourTwoOnClick = useNavigateAction({
    type: "url",
    url: `${"/lists/"}${authAttributes["email"]}`,
    
  });
  const buttonThreeNineFiveThreeThreeSixNineNineOnClick = useNavigateAction({
    type: "url",
    url: "/info",
   
  });
  
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
      {...getOverrideProps(overrides, "WelcomePage")}
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
        top="50px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Shopper Planner"
        {...getOverrideProps(overrides, "Shopper Planner")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="627px"
        left="53px"
        backgroundColor="rgba(11,153,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Begin"
        onClick={() => {
          const au=authAttributes["email"];
          
          buttonThreeNineFiveThreeThreeSixFourTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Button39533642")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="627px"
        left="293px"
        backgroundColor="rgba(11,153,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Info"
        onClick={() => {
          buttonThreeNineFiveThreeThreeSixNineNineOnClick();
        }}
        {...getOverrideProps(overrides, "Button39533699")}
      ></Button>
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
        width="370px"
        height="420px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="147px"
        left="10px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome to Shopper Planner. You can press info to learn about us and begin making your list when your ready."
        {...getOverrideProps(
          overrides,
          "Welcome to Shopper Planner. You can press info to learn about us and begin making your list when your ready."
        )}
      ></Text>
    </View>
    
  );
  
}

