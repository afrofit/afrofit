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
import { useDispatch } from "react-redux";
import { GenericError } from "../../../../src/components/errors/GenericError";
import { LogUserIn } from "../../../../store/reducers/auth/thunks/login.thunk";
import DEVICE_STORAGE from "../../../../../app/api/device-storage"

export const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavType>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => reset();
  }, []);

  const {
    control,
    handleSubmit,
    resetField,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit: SubmitHandler<any> = (data) => {
    DEVICE_STORAGE.GET_FCMTOKEN().then((FCMToken)=>{
        if(FCMToken && FCMToken!=''){
        var isDevice=true
          dispatch(LogUserIn({...data,FCMToken,isDevice}));
        }
        else{
          var isDevice=true
          dispatch(LogUserIn({...data,isDevice}));
        }
    })
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
        <Placer top={2} left={3}>
          <IconButton onPress={() => navigation.navigate("Welcome")} />
        </Placer>
        <Font align="center" variant="h3" color="hilite_purpink">
          Login
        </Font>
        <Spacer h={20} />
        <Card padding={15}>
          <Spacer h={10} />
          <StyledInput
            clearField={clearField}
            name="email"
            label="Email"
            control={control}
            rules={{ required: true, pattern: EMAIL_REGEX }}
            clearError={clearError}
            type="regular"
            placeholder={"Your email.."}
          />
          <StyledInput
            clearField={clearField}
            name="password"
            label="Password"
            control={control}
            rules={{ required: true }}
            clearError={clearError}
            type="password"
            placeholder={"Your password.."}
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
