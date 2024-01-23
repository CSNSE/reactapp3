/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { API } from "aws-amplify";
import { deleteList } from "../graphql/mutations";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ListCard(props) {
  const { lst, overrides, ...rest } = props;
  const buttonThreeNineFiveThreeThreeEightSevenTwoOnClick = useNavigateAction({
    type: "url",
    url: "/Ledit",
  });
  const buttonThreeNineFiveThreeThreeEightSevenThreeOnMouseDown = async () => {
    await API.graphql({
      query: deleteList.replaceAll("__typename", ""),
      variables: {
        input: {
          id: lst?.id,
        },
      },
    });
  };
  const buttonThreeNineFiveThreeThreeEightSevenThreeOnMouseUp =
    useNavigateAction({ type: "url", url: "/1" });
  return (
    <Flex
      gap="0"
      direction="column"
      width="390px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ListCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="460px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={lst?.image}
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
            children={lst?.name}
            {...getOverrideProps(overrides, "Pasta")}
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
            children={lst?.description}
            {...getOverrideProps(overrides, "example39533870")}
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
            children={lst?.id}
            {...getOverrideProps(overrides, "example39533871")}
          ></Text>
        </Flex>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Edit"
        onClick={() => {
          buttonThreeNineFiveThreeThreeEightSevenTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Button39533872")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Delete"
        onMouseDown={() => {
          buttonThreeNineFiveThreeThreeEightSevenThreeOnMouseDown();
        }}
        onMouseUp={() => {
          buttonThreeNineFiveThreeThreeEightSevenThreeOnMouseUp();
        }}
        {...getOverrideProps(overrides, "Button39533873")}
      ></Button>
    </Flex>
  );
}
