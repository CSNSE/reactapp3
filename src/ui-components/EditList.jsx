/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { API } from "aws-amplify";
import { Field } from "@aws-amplify/ui-react/internal";
import { updateList } from "../graphql/mutations";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { getOverrideProps, useNavigateAction,processFile} from "./utils";
import { Button, Text, TextField, View } from "@aws-amplify/ui-react";
export default function EditList(props) {
  const { list, overrides, ...rest } = props;
  const [
    imageName,
    setImageName,
  ] = useState("");
  const [
    textFieldThreeNineFiveThreeThreeEightTwoOneValue,
    setTextFieldThreeNineFiveThreeThreeEightTwoOneValue,
  ] = useState("");
  const [
    textFieldThreeNineFiveThreeThreeEightTwoTwoValue,
    setTextFieldThreeNineFiveThreeThreeEightTwoTwoValue,
  ] = useState("");
  const [
    textFieldThreeNineFiveThreeThreeEightTwoThreeValue,
    setTextFieldThreeNineFiveThreeThreeEightTwoThreeValue,
  ] = useState("");
  const buttonOnMouseDown = async () => {

    await API.graphql({
      query: updateList.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeNineFiveThreeThreeEightTwoOneValue,
          description: textFieldThreeNineFiveThreeThreeEightTwoTwoValue,
          image: imageName,
          id: list?.id,
        },
      },
   });
  };
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/lists" });
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
      {...getOverrideProps(overrides, "EditList")}
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
        children="Edit List"
        {...getOverrideProps(overrides, "Edit List")}
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
        value={textFieldThreeNineFiveThreeThreeEightTwoOneValue}
        onChange={(event) => {
          setTextFieldThreeNineFiveThreeThreeEightTwoOneValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField39533821")}
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
        value={textFieldThreeNineFiveThreeThreeEightTwoTwoValue}
        onChange={(event) => {
          setTextFieldThreeNineFiveThreeThreeEightTwoTwoValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField39533822")}
      ></TextField>
     <Field
position="absolute"
top="400px"
left="43px"
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
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="624px"
        left="153px"
        backgroundColor="rgba(11,153,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Finish"
        onMouseDown={() => {
          buttonOnMouseDown();
        }}
        onMouseUp={() => {
          buttonOnMouseUp();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}