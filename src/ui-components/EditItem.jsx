/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { API } from "aws-amplify";
import { updateNote } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, TextField, View } from "@aws-amplify/ui-react";
export default function EditItem(props) {
  const { edt, overrides, ...rest } = props;
  const [
    textFieldThreeEightSixEightThreeZeroSevenValue,
    setTextFieldThreeEightSixEightThreeZeroSevenValue,
  ] = useState("");
  const [
    textFieldThreeEightSixEightThreeZeroNineValue,
    setTextFieldThreeEightSixEightThreeZeroNineValue,
  ] = useState("");
  const [
    textFieldThreeEightSixEightThreeZeroEightValue,
    setTextFieldThreeEightSixEightThreeZeroEightValue,
  ] = useState("");
  const rectangleOneThreeOnClick = async () => {
    await API.graphql({
      query: updateNote.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeEightSixEightThreeZeroSevenValue,
          description: textFieldThreeEightSixEightThreeZeroNineValue,
          image: textFieldThreeEightSixEightThreeZeroEightValue,
          id: edt?.id,
        },
      },
    });
  };
  const rectangleOneThreeOnMouseUp = useNavigateAction({
    type: "url",
    url: "/",
  });
  const finishOnClick = useNavigateAction({ type: "url", url: "/" });
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
      {...getOverrideProps(overrides, "EditItem")}
      {...rest}
    >
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
        top="75px"
        left="8px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Shopper Planner"
        {...getOverrideProps(overrides, "Shopper Planner")}
      ></Text>
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
        top="123px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Edit Item"
        {...getOverrideProps(overrides, "Edit Item")}
      ></Text>
      <View
        width="81px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="772px"
        left="267px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(31,115,241,1)"
        onClick={() => {
          rectangleOneThreeOnClick();
        }}
        onMouseUp={() => {
          rectangleOneThreeOnMouseUp();
        }}
        {...getOverrideProps(overrides, "Rectangle 13")}
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
        top="781px"
        left="291px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Finish"
        onClick={() => {
          finishOnClick();
        }}
        {...getOverrideProps(overrides, "Finish")}
      ></Text>
      <View
        width="81px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="773px"
        left="39px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(31,115,241,1)"
        {...getOverrideProps(overrides, "Rectangle 14")}
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
        top="782px"
        left="61px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Delete"
        {...getOverrideProps(overrides, "Delete")}
      ></Text>
      <Flex
        gap="0"
        direction="column"
        width="228px"
        height="104px"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="272px"
        left="80px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "StandardCard")}
      >
        <Image
          width="unset"
          height="160px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={edt?.image}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="16px 16px 16px 16px"
          {...getOverrideProps(overrides, "Card Area")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Text Group")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={edt?.name}
              {...getOverrideProps(overrides, "$99 USD")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="example"
              {...getOverrideProps(overrides, "4bds 3 ba 2,530 sqft - Active")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={edt?.id}
              {...getOverrideProps(
                overrides,
                "832 34th Ave, Seattle, WA 98122"
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <TextField
        width="300px"
        height="unset"
        position="absolute"
        top="478px"
        left="44px"
        label="Label"
        placeholder={edt?.name}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightSixEightThreeZeroSevenValue}
        onChange={(event) => {
          setTextFieldThreeEightSixEightThreeZeroSevenValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3868307")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        position="absolute"
        top="664px"
        left="45px"
        label="Label"
        placeholder={edt?.image}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightSixEightThreeZeroEightValue}
        onChange={(event) => {
          setTextFieldThreeEightSixEightThreeZeroEightValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3868308")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        position="absolute"
        top="571px"
        left="44px"
        label="Label"
        placeholder={edt?.description}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightSixEightThreeZeroNineValue}
        onChange={(event) => {
          setTextFieldThreeEightSixEightThreeZeroNineValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3868309")}
      ></TextField>
    </View>
  );
}
