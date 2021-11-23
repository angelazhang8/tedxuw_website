import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {StyledButton, StyledText} from "./styles"
import { Button, Checkbox, Form } from 'semantic-ui-react'

function EmailForm() {
  const [state, handleSubmit] = useForm("mqkwrvly");
  if (state.succeeded) {
    return <StyledText style={{background:"black", paddingTop:"20px"}}>Thanks for signing up!</StyledText>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input id="email" type="email" name="email" style={{background:"#FFFFFF", borderRadius: "3px 0px 0px 3px", width: "235px", height: "36px"}}>
        </input>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <StyledButton type="submit" disabled={state.submitting}>
        <StyledText>Sign up</StyledText>
      </StyledButton>
    </form>
  );
}

export default EmailForm;
