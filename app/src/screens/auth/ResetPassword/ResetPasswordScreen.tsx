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
import { ResetPasswordScreenNavType } from "../../../../src/navigator/types";
import { Placer } from "../../../../src/components/elements/Placer";
import { IconButton } from "../../../../src/components/buttons/IconButton";
import { LoaderAbsolute } from "../../../../src/components/loaders/LoaderAbsolute";
import { useDispatch } from "react-redux";
import { SendPasswordResetEmail } from "../../../../store/reducers/auth/auth.thunks";
import { AlertModal } from "../../../../src/components/modals/AlertModal";
import { useSelector } from "react-redux";
import {
  selectedActionCompleted,
  triggerActionCompleted,
} from "../../../../store/reducers/ui/ui.slice";
import { Keyboard } from "react-native";

export const ResetPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    resetField,
    clearErrors,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation<ResetPasswordScreenNavType>();
  const dispatch = useDispatch();

  const passwordResetEmailSent = useSelector(selectedActionCompleted);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    Keyboard.dismiss();
    dispatch(SendPasswordResetEmail(data));
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
      <AlertModal
        onDismiss={() => {
          dispatch(triggerActionCompleted(false));
          // do other stuff like redirect etc
          navigation.navigate("Login");
          return console.log("Alert dismissed!");
        }}
        visible={passwordResetEmailSent}
        body="This represents the body of this modal and it can contain an awful
        amount of text and handle it just fine!"
        title="Success!"
      />
      <LoaderAbsolute message="Sending reset link" visible={false} />
      <SolidBackground />
      <Screen>
        <Placer top={2} left={3}>
          <IconButton onPress={() => navigation.navigate("Welcome")} />
        </Placer>
        <Font align="center" variant="h3" color="hilite_purpink">
          Reset Password
        </Font>
        <Spacer h={20} />
        <Card>
          <Spacer h={10} />

          <StyledInput
            clearField={clearField}
            name="email"
            label="Email"
            control={control}
            rules={{ required: true, pattern: EMAIL_REGEX }}
            clearError={clearError}
            type="regular"
          />

          <ClearButton
            onPress={() => navigation.navigate("Login")}
            title="Log me in, instead?"
            color="hilite_pink"
          />
        </Card>
        <LargeButton onPress={handleSubmit(onSubmit)} title="Submit" />
      </Screen>
    </>
  );
};
