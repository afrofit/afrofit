import * as React from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";

import { ClearButton } from "../../../../src/components/buttons/ClearButton";
import { LargeButton } from "../../../../src/components/buttons/LargeButton";
import { Card } from "../../../../src/components/cards/Card";
import { Screen } from "../../../../src/components/screen/Screen";
import Spacer from "../../../../src/components/elements/Spacer";
import { Font } from "../../../../src/components/font/Font";
import { StyledInput } from "../../../../src/components/forms/inputs/StyledInput";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import { EMAIL_REGEX } from "../../../../theme/globals";

export const LoginScreen = () => {
  // console.log("Firebase", app);
  const {
    control,
    handleSubmit,
    resetField,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // dispatch(logIn(data));
    console.log("Data", data);
  };

  const clearField = (name: string) => {
    resetField(name);
  };

  const clearError = (name: string) => {
    clearErrors(name);
  };

  return (
    <>
      <SolidBackground />
      <Screen>
        <Card>
          <Spacer h={10} />
          <Font align="center" variant="h2" color="hilite_purpink">
            Login
          </Font>
          <Spacer h={30} />
          <StyledInput
            clearField={clearField}
            secureTextEntry={false}
            name="email"
            label="Email"
            control={control}
            rules={{ required: true, pattern: EMAIL_REGEX }}
            clearError={clearError}
          />
          <StyledInput
            clearField={clearField}
            secureTextEntry
            name="password"
            label="Password"
            control={control}
            rules={{ required: true }}
            clearError={clearError}
          />
          <ClearButton
            onPress={() => console.log("Tapped")}
            title="Forgot your password?"
            color="hilite_pink"
          />
        </Card>
        <LargeButton onPress={handleSubmit(onSubmit)} title="Submit" />
      </Screen>
    </>
  );
};
