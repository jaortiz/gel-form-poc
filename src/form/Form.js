/** @jsx jsx */

import { Fragment } from "react";
import { jsx } from "@westpac/core";
import {
  FormSection,
  FormGroup,
  FormLabel,
  Hint,
  ErrorMessage
} from "@westpac/form";
import { Text, Textarea, Select } from "@westpac/text-input";
import { Button, ButtonGroup } from "@westpac/button";
import { FormCheck, Option } from "@westpac/form-check";

const formHeader = ({ header = [] }) =>
  header.map(head => Object.keys(head).map(Key => <Key>{head[Key]}</Key>));

const inputMap = (inputType, inputName, options = []) => {
  switch (inputType) {
    case "text":
      return <Text name={inputName} />;
    case "textarea":
      return <Textarea name={inputName} />;
    case "buttonGroup":
      return (
        <ButtonGroup name={inputName} css={{ display: "block" }}>
          {options.map(option => (
            <Button>{option}</Button>
          ))}
        </ButtonGroup>
      );
    case "radio":
      return (
        <FormCheck name={inputName}>
          {options.map(option => (
            <Option value={option}>{option}</Option>
          ))}
        </FormCheck>
      );
    case "select":
      return <Select data={options} />;
    default:
      throw new Error("input type undefined, something went really wrong!!");
  }
};

const createGroup = group => (
  <Fragment>
    <FormLabel htmlFor={group.name}>{group.label}</FormLabel>
    {group.hint && <Hint>{group.hint}</Hint>}
    {group.error && <ErrorMessage message={group.error} />}
    {inputMap(group.inputType, group.name, group.options)}
  </Fragment>
);

export const Form = ({ data }) => {
  const form = data.sections.map(section => (
    <FormSection noPadding>
      {section.groups.map(group => (
        <FormGroup>{createGroup(group)}</FormGroup>
      ))}
      {!data.modal && <Button>{data.submit.text}</Button>}
    </FormSection>
  ));

  return (
    <Fragment>
      {formHeader(data)}
      {form}
    </Fragment>
  );
};
