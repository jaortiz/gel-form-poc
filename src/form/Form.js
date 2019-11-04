/** @jsx jsx */

import { useReducer } from "react";
import wbcBrand from "@westpac/wbc";
import { GEL, jsx } from "@westpac/core";
import { Container, Cell, Grid } from "@westpac/grid";
import {
  FormSection,
  FormGroup,
  FormLabel,
  Hint,
  ErrorMessage
} from "@westpac/form";
import { Text, Textarea } from "@westpac/text-input";
import { Button, ButtonGroup } from "@westpac/button";
import { FormCheck, Option } from "@westpac/form-check";
import { Modal, Header, Footer } from "@westpac/modal";
import { initialState, formReducer } from "./form";

const inputMap = (inputType, inputName, options = []) => {
  switch (inputType) {
    case "text":
      return <Text name={inputName} />;
    case "textarea":
      return <Textarea name={inputName} />;
    case "buttonGroup":
      return (
        <ButtonGroup name={inputName}>
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
    default:
      throw new Error("input type undefined, something went really wrong!!");
  }
};

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const form = state.form.fields.map(field => {
    return (
      <FormGroup>
        <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
        {field.hint && <Hint>{field.hint}</Hint>}
        {field.error && <ErrorMessage message={field.error} />}
        {inputMap(field.inputType, field.name, field.options)}
      </FormGroup>
    );
  });

  return (
    <GEL brand={wbcBrand}>
      <div css={{ height: "4rem" }} />
      <Container>
        <Grid columns={3}>
          <Cell>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: "100%",
                width: 130
              }}
            >
              <Button onClick={() => dispatch({ type: "FORM_ONE" })}>
                Form One
              </Button>
              <Button onClick={() => dispatch({ type: "FORM_TWO" })}>
                Form Two
              </Button>
              <Button onClick={() => dispatch({ type: "FORM_THREE" })}>
                Form Three
              </Button>
            </div>
          </Cell>
          <Cell left={2}>
            <p css={{ textAlign: "center" }}>
              Westpac welcomes any feedback you might have regarding how we make
              products and services accessible for customers with disability.
              Whether you want to share a complaint, a compliment or a
              suggestion to help us do things better, we’d like to hear from
              you. Your feedback will give us the opportunity to put things
              right.
            </p>
            <p css={{ textAlign: "center" }}>
              <strong>Please complete all fields below</strong>
            </p>
          </Cell>
          <Cell left={2} top={2}>
            <FormSection>
              {form}
              <Button onClick={() => alert(state.form.submit)}>Submit</Button>
            </FormSection>
          </Cell>
        </Grid>
      </Container>
    </GEL>
  );
}

export default App;
