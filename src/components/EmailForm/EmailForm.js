import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { StyledButton, StyledText, StyledInput } from "./styles";
import { Button, Checkbox, Form } from "semantic-ui-react";

function EmailForm() {
  const [state, handleSubmit] = useForm("mqkwrvly");
  if (state.succeeded) {
    return (
      <StyledText style={{ background: "black", paddingTop: "20px" }}>
        Thanks for signing up!
      </StyledText>
    );
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <StyledInput
          placeholder="Your email"
          id="email"
          type="email"
          name="email"
          style={{
            paddingLeft: "16px",
            color: "#3C3C3C",
            background: "#FFFFFF",
            borderRadius: "3px 0px 0px 3px",
            width: "235px",
            height: "35px",
          }}
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <StyledButton type="submit" disabled={state.submitting}>
          <StyledText>Sign up</StyledText>
        </StyledButton>
      </Form>
    </div>
  );
}

export default EmailForm;
