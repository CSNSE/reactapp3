/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { API } from "aws-amplify";
import { createNote } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Text, TextField, View } from "@aws-amplify/ui-react";
export default function ItemInfo(props) {
  const { food, overrides, ...rest } = props;
  const [
    textFieldThreeNineThreeZeroTwoTwoFourValue,
    setTextFieldThreeNineThreeZeroTwoTwoFourValue,
  ] = useState("");
  const [
    textFieldThreeNineThreeZeroTwoTwoFiveValue,
    setTextFieldThreeNineThreeZeroTwoTwoFiveValue,
  ] = useState("");
  const [
    textFieldThreeNineThreeZeroTwoTwoSixValue,
    setTextFieldThreeNineThreeZeroTwoTwoSixValue,
  ] = useState("");
  const buttonThreeNineThreeZeroOneEightThreeOnClick = async () => {
    await API.graphql({
      query: createNote.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeNineThreeZeroTwoTwoFourValue,
          description: textFieldThreeNineThreeZeroTwoTwoFiveValue,
          image: textFieldThreeNineThreeZeroTwoTwoSixValue,
        },
      },
    });
  };
  const buttonThreeNineThreeZeroOneEightSevenOnClick = useNavigateAction({
    type: "url",
    url: "/",
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
        top="76px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create Item"
        {...getOverrideProps(overrides, "Create Item")}
      ></Text>
      <TextField
        width="300px"
        height="unset"
        label="Item"
        position="absolute"
        top="197px"
        left="45px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeZeroTwoTwoFourValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeZeroTwoTwoFourValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3930224")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Description"
        position="absolute"
        top="319px"
        left="44px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeZeroTwoTwoFiveValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeZeroTwoTwoFiveValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3930225")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Image"
        position="absolute"
        top="441px"
        left="45px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeZeroTwoTwoSixValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeZeroTwoTwoSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3930226")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="632px"
        left="43px"
        backgroundColor="rgba(11,153,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Add Item"
        onClick={() => {
          buttonThreeNineThreeZeroOneEightThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button3930183")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="632px"
        left="263px"
        backgroundColor="rgba(11,153,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Finish"
        onClick={() => {
          buttonThreeNineThreeZeroOneEightSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Button3930187")}
      ></Button>
    </View>
  );
}
