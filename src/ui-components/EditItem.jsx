
/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useAuth } from "@aws-amplify/ui-react/internal";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { Field } from "@aws-amplify/ui-react/internal";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { updateNote } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction, processFile } from "./utils";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function UIEditNote(props) {
  const { edt, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [
    textFieldFourZeroFourSevenTwoFourSixOneValue,
    setTextFieldFourZeroFourSevenTwoFourSixOneValue,
  ] = useState("");
  const [
    textFieldFourZeroFourSevenTwoFourSixTwoValue,
    setTextFieldFourZeroFourSevenTwoFourSixTwoValue,
  ] = useState("");
  const [
    textFieldFourZeroFourSevenTwoFourSixThreeValue,
    setTextFieldFourZeroFourSevenTwoFourSixThreeValue,
  ] = useState("");
  const [
    newImage,
    setImageName,
  ] = useState("");
  const buttonOnMouseDown = async () => {
    if(newImage)        //important to check if they updated the image, if not: don't include the field ref
    await API.graphql({
      query: updateNote.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldFourZeroFourSevenTwoFourSixOneValue,
          ListName:edt?.ListName,
          description: textFieldFourZeroFourSevenTwoFourSixTwoValue,
          //author: authAttributes["email"],
          image: newImage,
          id: edt?.id,
          //ListName:edt?.ListName
        },
      },
    });
    else
    await API.graphql({
      query: updateNote.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldFourZeroFourSevenTwoFourSixOneValue,
          ListName:edt?.ListName,
          description: textFieldFourZeroFourSevenTwoFourSixTwoValue,
          //author: authAttributes["email"],
          id: edt?.id,
        },
      },
    });
  };
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: `${"/edit/"}${edt?.id}` });  // changed from onMouseUp
  useEffect(() => {
    if (
      textFieldFourZeroFourSevenTwoFourSixOneValue === "" &&
      edt !== undefined &&
      edt?.name !== undefined
    )
      setTextFieldFourZeroFourSevenTwoFourSixOneValue(edt?.name);
  }, [edt]);
  useEffect(() => {
    if (
      textFieldFourZeroFourSevenTwoFourSixTwoValue === "" &&
      edt !== undefined &&
      edt?.description !== undefined
    )
      setTextFieldFourZeroFourSevenTwoFourSixTwoValue(edt?.description);
  }, [edt]);
  useEffect(() => {
    if (
      textFieldFourZeroFourSevenTwoFourSixThreeValue === "" &&
      edt !== undefined &&
      edt?.image !== undefined
    )
      setTextFieldFourZeroFourSevenTwoFourSixThreeValue(edt?.filename);
  }, [edt]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UIEditNote")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="48px"
          direction="row"
          width="272px"
          height="22px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
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
            width="31px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit "
            {...getOverrideProps(overrides, "Edit")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="10px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="178px"
            height="23px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={edt?.id}
            {...getOverrideProps(overrides, "db id")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="272px"
          height="100px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="unset"
            height="unset"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={edt?.image}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
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
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="site name"
            placeholder="site"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFourSevenTwoFourSixOneValue}
            onChange={(event) => {
              setTextFieldFourZeroFourSevenTwoFourSixOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField40472461")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="url address"
            placeholder="url"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFourSevenTwoFourSixTwoValue}
            onChange={(event) => {
              setTextFieldFourZeroFourSevenTwoFourSixTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField40472462")}
          ></TextField>
 <Field

label={"Image"}
isRequired={false}
isReadOnly={false}
>
<StorageManager
  onUploadSuccess={({ key }) => {
    setImageName(
      key
    );
  }}
  processFile={processFile}
  accessLevel={"public"}
  acceptedFileTypes={[]}
  isResumable={false}
  showThumbnails={true}
  maxFileCount={1}
  {...getOverrideProps(overrides, "image")}
></StorageManager>
</Field>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onMouseDown={() => {
            buttonOnMouseDown();
          }}
          onMouseUp={() => {  // changed from onMouseUp
            buttonOnMouseUp();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}