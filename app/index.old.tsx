import * as React from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import app from "./config/firebase";
import { ClearButton } from "./src/components/buttons/ClearButton";
import { IconButton } from "./src/components/buttons/IconButton";
import { LargeButton } from "./src/components/buttons/LargeButton";
import { RoundButton } from "./src/components/buttons/RoundButton";
import { SmallButton } from "./src/components/buttons/SmallButton";
// import { Card } from "./src/components/cards/Card";
import { Card } from "./src/components/cards/Card";
import Spacer from "./src/components/elements/Spacer";
import { Font } from "./src/components/font/Font";
import { StyledInput } from "./src/components/forms/inputs/StyledInput";
import { Screen } from "./src/components/screen/Screen";
import { SolidBackground } from "./src/components/screen/SolidBackground";
import { EMAIL_REGEX } from "./theme/globals";

export const Index = () => {
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
        {/* <Card bgColor="hilite_orange" outlined={false}>
          <Font variant="pb">Log me in</Font>
        </Card> */}
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
        {/* <Font variant="h1">Afia's Wedding</Font> */}
        {/* <Font variant="h2" color="hilite_orange">
          Success!
        </Font>
        <Font variant="h3">Afia's Wedding</Font>
        <Font variant="h4">Afia's Wedding</Font>
        <Font variant="pb">Log me in</Font>
        <Font variant="p" color="lightblue">
          Calories burned
        </Font>
        <Font variant="smb" caps spacing={3}>
          Available Ranks
        </Font>
        <Font variant="sm1" color="hilite_pink">
          Sign, instead
        </Font>
        <Font variant="sm2">Email</Font>
        <Font variant="smc" spacing={2} caps>
          96% Complete
        </Font>
        <Font variant="num1" color="hilite_purpink">
          2.1k
        </Font>
        <Font variant="num2">60</Font>
        <LargeButton
          onPress={() => console.log("Tapped")}
          title="A Generic Button"
        /> */}

        {/* <SmallButton
          onPress={() => console.log("Tapped")}
          title="Sm Button"
          variant="gradient"
        />
        <RoundButton
          onPress={() => console.log("Tapped")}
          variant="gradient"
          icon="pause"
        />
        <IconButton onPress={() => console.log("Tapped")} />
        <ClearButton
          onPress={() => console.log("Tapped")}
          title="A clear button"
        /> */}
      </Screen>
    </>
  );
};
