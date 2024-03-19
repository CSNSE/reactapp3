/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */




import { Field } from "@aws-amplify/ui-react/internal";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { getOverrideProps, useNavigateAction, processFile } from "./utils";
import { Auth } from "@aws-amplify/auth";
import * as React from "react";
import { useAuth } from "@aws-amplify/ui-react/internal";
import { useState } from "react";
import { API } from "aws-amplify";
import { createList } from "../graphql/mutations";

import {
  Button,
  SwitchField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function NewList(props) {
  const { lst, not, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [
    textFieldFourZeroThreeThreeThreeZeroFourValue,
    setTextFieldFourZeroThreeThreeThreeZeroFourValue,
  ] = useState("");
  const [
    textFieldFourZeroThreeThreeThreeZeroFiveValue,
    setTextFieldFourZeroThreeThreeThreeZeroFiveValue,
  ] = useState("");
  const [
    imageName,
    setImageName,
  ] = useState("");
  const [
    textFieldFourZeroThreeThreeThreeZeroSixValue,
    setTextFieldFourZeroThreeThreeThreeZeroSixValue,
  ] = useState("");
  const [switchFieldIsChecked, setSwitchFieldIsChecked] = useState(true);
  const buttonOnMouseDown = async () => {
    await API.graphql({
      query: createList.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldFourZeroThreeThreeThreeZeroFourValue,
          description: textFieldFourZeroThreeThreeThreeZeroFiveValue,
          image: textFieldFourZeroThreeThreeThreeZeroSixValue,
          author: authAttributes["email"],
          view: switchFieldIsChecked,
        },
      },
    });
  };
const buttonOnMouseUp = useNavigateAction({ type: "url", url: `${"/lists/"}${authAttributes["email"]}` });
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
      {...getOverrideProps(overrides, "NewList")}
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
        children="Create Event"
        {...getOverrideProps(overrides, "Create Event")}
      ></Text>
      <TextField
        width="300px"
        height="unset"
        label="Event Name"
        position="absolute"
        top="197px"
        left="45px"
        placeholder={lst?.name}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourZeroThreeThreeThreeZeroFourValue}
        onChange={(event) => {
          setTextFieldFourZeroThreeThreeThreeZeroFourValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4033304")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Description"
        position="absolute"
        top="319px"
        left="44px"
        placeholder={lst?.description}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourZeroThreeThreeThreeZeroFiveValue}
        onChange={(event) => {
          setTextFieldFourZeroThreeThreeThreeZeroFiveValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4033305")}
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
        top="626px"
        left="155px"
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
      <SwitchField
        width="unset"
        height="unset"
        label="Public"
        position="absolute"
        top="535px"
        left="143px"
        size="default"
        isDisabled={false}
        labelPosition="start"
        isChecked={switchFieldIsChecked}
        onChange={() => setSwitchFieldIsChecked(!switchFieldIsChecked)}
        {...getOverrideProps(overrides, "SwitchField")}
      ></SwitchField>
    </View>
  );
}
