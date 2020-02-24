/** @jsx jsx */

import { useState } from "react";
import { GEL, jsx } from "@westpac/core";
import wbcBrand from "@westpac/wbc";
import stgBrand from "@westpac/stg";
import { Container, Cell, Grid } from "@westpac/grid";
import { Button } from "@westpac/button";
import { Modal, Header, Body, Footer } from "@westpac/modal";
import { Form } from "./form";
import { useFormData } from "./data";

const Wrapper = ({ children, props }) => (
  <Container css={{ marginTop: "4rem" }}>
    <Grid columns={3}>
      <Cell left={2}>{children}</Cell>
    </Grid>
  </Container>
);

const ModalWrapper = ({ header, submit, children, props }) => {
  const [open, setOpen] = useState(true);

  return (
    <Modal open={open}>
      <Header>{header}</Header>
      <Body>{children}</Body>
      <Footer>
        <Button onClick={() => setOpen(!open)}>{submit.text}</Button>
      </Footer>
    </Modal>
  );
};

const brandMap = {
  wbc: wbcBrand,
  stg: stgBrand
};

const getBrand = brand => {
  if (brand.includes("stgeorge")) {
    return brandMap.stg;
  }

  return brandMap.wbc;
};

const StyledButton = props => <Button css={{ margin: 8 }} {...props} />;

function App() {
  const [state, dispatch] = useFormData();
  const data = state.form;

  // maybe have a test version later that uses the reducer instead of the data from an api
  const brand = getBrand(window.location.href);

  return (
    <GEL brand={brand}>
      {/* <div
        css={{
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: 130
        }}
      >
        <StyledButton onClick={() => dispatch({ type: "FORM_ONE" })}>
          Form One
        </StyledButton>
        <StyledButton onClick={() => dispatch({ type: "FORM_TWO" })}>
          Form Two
        </StyledButton>
        <StyledButton onClick={() => dispatch({ type: "FORM_THREE" })}>
          Form Three
        </StyledButton>
        <StyledButton onClick={() => dispatch({ type: "FORM_FOUR" })}>
          Form Four
        </StyledButton>
      </div>

      {data.modal ? (
        <ModalWrapper header={data.modal.header} submit={data.submit}>
          <Form data={data} />
        </ModalWrapper>
      ) : (
        <Wrapper>
          <Form data={data} />
        </Wrapper>
      )} */}
      <Wrapper>
        <Form data={data} />
      </Wrapper>
    </GEL>
  );
}

export default App;

/* <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100%",
          width: 130
        }}
      >
        <Button onClick={() => dispatch({ type: "FORM_ONE" })}>Form One</Button>
        <Button onClick={() => dispatch({ type: "FORM_TWO" })}>Form Two</Button>
        <Button onClick={() => dispatch({ type: "FORM_THREE" })}>
          Form Three
        </Button>
      </div> */
