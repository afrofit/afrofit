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
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavType } from "../../../../src/navigator/types";
import { LoaderAbsolute } from "../../../../src/components/loaders/LoaderAbsolute";
import { Placer } from "../../../../src/components/elements/Placer";
import { IconButton } from "../../../../src/components/buttons/IconButton";

export const LoginScreen = () => {
  // console.log("Firebase", app);
  const navigation = useNavigation<LoginScreenNavType>();

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
      <LoaderAbsolute message="Logging you in" visible={false} />
      <SolidBackground />
      <Screen>
        <Placer top={3} left={3}>
          <IconButton onPress={() => navigation.navigate("Welcome")} />
        </Placer>
        <Font align="center" variant="h2" color="hilite_purpink">
          Login
        </Font>
        <Spacer h={20} />
        <Card padding={15}>
          <Spacer h={10} />
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
            onPress={() => navigation.navigate("ResetPassword")}
            title="Forgot your password?"
            color="hilite_pink"
          />
        </Card>

        <LargeButton onPress={handleSubmit(onSubmit)} title="Submit" />
      </Screen>
    </>
  );
};
