/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { Field } from "@aws-amplify/ui-react/internal";
import { API } from "aws-amplify";
import { updateNote } from "../graphql/mutations";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { getOverrideProps, useNavigateAction,processFile} from "./utils";
import { Button, Text, TextField, View, Grid } from "@aws-amplify/ui-react";
import { getNote } from "../graphql/queries";
export default function EditItem(props) {

  const {
    edt,
    idProp, //remove id:
    note: noteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;

  const [
    textFieldThreeNineFourFiveEightSevenValue,
    setTextFieldThreeNineFourFiveEightSevenValue,
  ] = useState("");
  const [
    textFieldThreeNineFourFiveEightNineValue,
    setTextFieldThreeNineFourFiveEightNineValue,
  ] = useState("");
  const [
    imageName,
    setImageName,
  ] = useState("");
  const [
    textFieldThreeNineFourFiveEightEightValue,
    setTextFieldThreeNineFourFiveEightEightValue,
  ] = useState("");
  const buttonOnMouseUp = useNavigateAction({
    type: "url",
    url: `${"/1edit/"}${edt?.ListName}`,
  });
  const buttonOnMouseDown = async () => {
    await API.graphql({
       query: updateNote.replaceAll("__typename", ""),
       variables: {
        input: {
        name: textFieldThreeNineFourFiveEightSevenValue,
          description: textFieldThreeNineFourFiveEightNineValue,
           image: imageName,
           id: edt?.id,
          
         },
       },
     });
   };

  //console.log("thing update got it: " + {idProp}); //added
  const initialValues = {
    name: "",
    description: "",
    image: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = noteRecord
      ? { ...initialValues, ...noteRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setImage(cleanValues.image);
    setErrors({});
  };
  const [noteRecord, setNoteRecord] = React.useState(noteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNote.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNote
        : noteModelProp;
      setNoteRecord(record);
    };
    queryData();
  }, [idProp, noteModelProp]);
  React.useEffect(resetStateValues, [noteRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    image: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description: description ?? null,
          image: image ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateNote.replaceAll("__typename", ""),
            variables: {
              input: {
                id: noteRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "NoteUpdateForm")}
      {...rest}
    >
    
    <View
      width="390px"
      height="600px"
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
      <TextField
        width="300px"
        height="unset"
        label="Name"
        position="absolute"
        top="123px"
        left="43px"
        //placeholder={edt?.name}
        size="default"
        
       
       // value={textFieldThreeNineFourFiveEightSevenValue}
        //onChange={(event) => {
       //   setTextFieldThreeNineFourFiveEightSevenValue(event.target.value);
       //</View> }}
       // {...getOverrideProps(overrides, "TextField394587")}



        placeholder="db_note_name"
        shrink="0"
        alignSelf="stretch"
    
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              image,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}

      ></TextField>




      
      <Field
position="absolute"
top="300px"
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
      <TextField
        width="300px"
        height="unset"
        label="Description"
        position="absolute"
        top="216px"
        left="43px"
        placeholder={edt?.description}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineFourFiveEightNineValue}
        onChange={(event) => {
          setTextFieldThreeNineFourFiveEightNineValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField394589")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="520px"
        left="149px"
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
        top="31px"
        left="-2px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Edit Item"
        {...getOverrideProps(overrides, "Edit Item")}
      ></Text>
    </View>
    </Grid>
  );
}
