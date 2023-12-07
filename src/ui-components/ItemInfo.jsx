/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { API } from "aws-amplify";
import { createNote } from "../graphql/mutations";
import { Text, TextField, View } from "@aws-amplify/ui-react";
export default function ItemInfo(props) {
  const { food, overrides, ...rest } = props;
  const [
    textFieldThreeEightFiveOneFourFiveFourEightValue,
    setTextFieldThreeEightFiveOneFourFiveFourEightValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveOneFourFiveFiveFiveValue,
    setTextFieldThreeEightFiveOneFourFiveFiveFiveValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveOneFourFiveSixTwoValue,
    setTextFieldThreeEightFiveOneFourFiveSixTwoValue,
  ] = useState("");
  const doneOnClick = useNavigateAction({ type: "url", url: "/" });
  const submitOnClick = async () => {
    await API.graphql({
      query: createNote.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeEightFiveOneFourFiveFourEightValue,
          description: textFieldThreeEightFiveOneFourFiveFiveFiveValue,
          image: textFieldThreeEightFiveOneFourFiveSixTwoValue,
        },
      },
    });
  };
  const submitOnMouseLeave = useNavigateAction({ type: "url", url: "/" });
  return (
    <View
      width="390px"
      height="844px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ItemInfo")}
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
        left="-11px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Item Info"
        {...getOverrideProps(overrides, "Item Info")}
      ></Text>
      <View
        width="81px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="771px"
        left="242px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(31,115,241,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
      <View
        width="81px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="771px"
        left="68px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(31,115,241,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
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
        top="780px"
        left="93px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Done"
        onClick={() => {
          doneOnClick();
        }}
        {...getOverrideProps(overrides, "Done")}
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
        top="780px"
        left="263px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Submit"
        onClick={() => {
          submitOnClick();
        }}
        onMouseLeave={() => {
          submitOnMouseLeave();
        }}
        {...getOverrideProps(overrides, "Submit")}
      ></Text>
      <TextField
        width="300px"
        height="unset"
        position="absolute"
        top="197px"
        left="45px"
        label="Label"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightFiveOneFourFiveFourEightValue}
        onChange={(event) => {
          setTextFieldThreeEightFiveOneFourFiveFourEightValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField38514548")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        position="absolute"
        top="319px"
        left="44px"
        label="Label"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightFiveOneFourFiveFiveFiveValue}
        onChange={(event) => {
          setTextFieldThreeEightFiveOneFourFiveFiveFiveValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField38514555")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        position="absolute"
        top="441px"
        left="45px"
        label="Label"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightFiveOneFourFiveSixTwoValue}
        onChange={(event) => {
          setTextFieldThreeEightFiveOneFourFiveSixTwoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField38514562")}
      ></TextField>
    </View>
  );
}
