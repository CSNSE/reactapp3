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
import {
  Button,
  Flex,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EditItem(props) {
  const { edt, overrides, ...rest } = props;
  const [
    textFieldThreeNineThreeZeroOneSixOneValue,
    setTextFieldThreeNineThreeZeroOneSixOneValue,
  ] = useState("");
  const [
    textFieldThreeNineThreeZeroOneSixThreeValue,
    setTextFieldThreeNineThreeZeroOneSixThreeValue,
  ] = useState("");
  const [
    textFieldThreeNineThreeZeroOneSixTwoValue,
    setTextFieldThreeNineThreeZeroOneSixTwoValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await API.graphql({
      query: updateNote.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeNineThreeZeroOneSixOneValue,
          description: textFieldThreeNineThreeZeroOneSixThreeValue,
          image: textFieldThreeNineThreeZeroOneSixTwoValue,
          id: edt?.id,
        },
      },
    });
  };
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
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
              children={edt?.description}
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
              children={edt?.image}
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
        label="Name"
        position="absolute"
        top="478px"
        left="44px"
        placeholder={edt?.name}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeZeroOneSixOneValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeZeroOneSixOneValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3930161")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Image"
        position="absolute"
        top="664px"
        left="45px"
        placeholder={edt?.image}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeZeroOneSixTwoValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeZeroOneSixTwoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3930162")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Description"
        position="absolute"
        top="571px"
        left="44px"
        placeholder={edt?.description}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeZeroOneSixThreeValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeZeroOneSixThreeValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3930163")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="774px"
        left="150px"
        backgroundColor="rgba(11,153,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Finish"
        onClick={() => {
          buttonOnClick();
        }}
        onMouseUp={() => {
          buttonOnMouseUp();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
