import React, { useState } from "react";
import Screen from "../components/Screen";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { inRange } from "../utils/validators";

// TODO Q4
const TwoFactorAuthScreen = () => {
  const [value, setValue] = useState({
    code: '',
    disabled: false,
  });
 
  const handleChange = (e) => {
    const val = e.target.value;
    if (val.length === 7) setValue({ code: val, disabled: false });
      setValue({ code: val, disabled: false });
  }

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Screen>
      <form>
        <Title>Enter verification code</Title>
        <Subtitle>
          A text message with a 7-digit code has been sent to your mobile phone
          number
        </Subtitle>
        <TextInput
          label="Code"
          role="textbox"
          value={value.code}
          name="textbox"
          onChange={handleChange}
          placeholder="Enter the 7-digit code"
        />
        <Button
          type="primary"
          name="Submit"
          onClick={onSubmit}
          value="Submit"
          disabled={value.disabled}
        />
      </form>
    </Screen>
  );
};

export default TwoFactorAuthScreen;
