import * as React from "react";
import { Font } from "../../font/Font";
import Feather from "@expo/vector-icons/Feather";
import { InputWrapper, InputField, FieldWrapper, IconWrapper } from "./styled";
import { COLORS } from "../../../../theme/globals";
import { ClearFieldButton, ShowPasswordButton } from "./InputButtons";
import { useForm, Controller, FieldError } from "react-hook-form";

interface Props {
  clearField?: any;
  type?: "regular" | "password";
  control?: any;
  label?: any;
  name: string;
  rules?: any;
  maxLength?: number;
  clearError: (name: string) => void;
  placeholder?:string,
  secureTextEntry?:boolean
  multiline?:boolean,
  keyboardType?: any
}

export const StyledInput: React.FC<Props> = ({
  clearField,
  type,
  control,
  label,
  name,
  rules,
  maxLength = 50,
  clearError,
  placeholder="",
  multiline,
  keyboardType
  }) => {
  const {
    clearErrors,
    resetField,
    formState: { errors },
  } = useForm();
  const [currentIcon, setCurrentIcon] = React.useState<"eye" | "eye-off">(
    "eye-off"
  );

  const [focused, setFocused] = React.useState(false);

  const toggleShowPassword = () => {
    setCurrentIcon(currentIcon === "eye" ? "eye-off" : "eye");
  };

  const onChange = () => {
    return null;
  };

  React.useEffect(() => {
    console.log("Errors", errors);
  }, [errors]);

  const onFocus = (name: string) => {
    // setFocus(name);
    clearError(name);
    return setFocused(true);
  };

  const getIconName = () => {
switch(name){
  case "email" :
    return "mail";
  case "password" :
    return "lock";
  case "name" :
     return "user";
  case "number":
    return "phone"; 
    case "reason":
      return "edit-3";    
}

  };

  const renderErrorMessage = (error: FieldError, label: string) => {
    return error.type === "minLength"
      ? label + " is too short!"
      : error.type === "maxLength"
      ? label + " is too long!"
      : error.type === "required"
      ? label + " is required!"
      : error.type === "validate"
      ? "No match!"
      : label + " is invalid!";
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur, name },
        fieldState: { error },
      }) => (
        <FieldWrapper>
          <Font
            variant="sm2"
            align="center"
            color={!!error ? "hilite_pink" : "lightblue"}
          >
            {!!error ? renderErrorMessage(error, label) : label}
          </Font>
          <InputWrapper focused={focused} error={!!error} height={multiline ? 65 : 65}>
            <IconWrapper justifyContent={!multiline ? "center":""}>
              <Feather
                name={getIconName()}
                size={focused ? 22 : 18}
                color={focused ? COLORS["gold"] : COLORS["lightblue"]}
                // color={COLORS["gold"]}
              />
            </IconWrapper>
            <InputField
              allowFontScaling={false}
              autoCapitalize="none"
              secureTextEntry={type === "password" && currentIcon === "eye-off"}
              keyboardType={keyboardType ? keyboardType : "default"}
              onChangeText={onChange}
              onBlur={() => {
                setFocused(false);
                return onBlur();
              }}
              value={value}
              // maxLength={multiline ? 200 :maxLength}
              onFocus={() => onFocus(name)}
              selectionColor={COLORS.hilite_purpink}
              placeholder={placeholder}  
              placeholderTextColor={COLORS.lightblue}  
              multiline={multiline}
              />
            {type === "password" ? (
              <ShowPasswordButton
                currentIcon={currentIcon}
                onPress={toggleShowPassword}
              />
            ) : (
              <ClearFieldButton onPress={() => clearField(name)} />
            )}
          </InputWrapper>
        </FieldWrapper>
      )}
    />
  );
};
