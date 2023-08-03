import * as React from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";

import { ClearButton } from "../../../components/buttons/ClearButton";
import { LargeButton } from "../../../components/buttons/LargeButton";
import { Card } from "../../../components/cards/Card";
import { Screen } from "../../../components/screen/Screen";
import Spacer from "../../../components/elements/Spacer";
import { Font } from "../../../components/font/Font";
import { StyledInput } from "../../../components/forms/inputs/StyledInput";
import { SolidBackground } from "../../../components/screen/SolidBackground";
import { EMAIL_REGEX, PHONE_REGX } from "../../../../theme/globals";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavType } from "../../../navigator/types";
import { LoaderAbsolute } from "../../../components/loaders/LoaderAbsolute";
import { Placer } from "../../../components/elements/Placer";
import { IconButton } from "../../../components/buttons/IconButton";
import { useDispatch } from "react-redux";
import { GenericError } from "../../../components/errors/GenericError";
import { LogUserIn } from "../../../../store/reducers/auth/thunks/login.thunk";
import DEVICE_STORAGE from "../../../../api/device-storage"
import { KeyboardAvoidingView, View } from "react-native";
import { CheckBox } from "../../../../../app/src/components/checkbox/Checkbox";
import { RadioBox } from "../../../../../app/src/components/radiobox/RadioBox";
import { ContactWrapper } from "./styled";
import { contactusCreate } from "../../../../../app/store/reducers/contactus/thunks/contactus.thunk";
import { useSelector } from "react-redux";
import { getContactus } from "../../../../../app/store/reducers/contactus/contactus.slice";
import { AlertModal } from "../../../../../app/src/components/modals/AlertModal";
import { selectUser } from "../../../../../app/store/reducers/auth/auth.slice";

export const ContactUsScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const currentUser = useSelector(selectUser);
  const [checkboxFirst,setCheckboxFirst]=React.useState(true)
  const [checkboxSecond,setCheckboxSecond]=React.useState(false)
  // const [radioboxFirst,setRadioboxFirst]=React.useState(true)
  // const [radioboxSecond,setRadioboxSecond]=React.useState(false)
  const [generalBox,setGeneralBox]=React.useState(true)
  const [boothcampBox,setBoothCampBox]=React.useState(false)
  const [appSupport,setAppSupport]=React.useState(false)
  const [visible,setVisible]=React.useState(false)

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
    var payload:any={
      name:data?.name,
      number:data?.number,
      reason:data?.reason,
      isRegistered:checkboxFirst===true? true :true,
      moreInformation:checkboxSecond===true? true :false,
      // generalEnquiries: generalBox===true? true :false,
      // boothCamp: boothcampBox===true? true :false,
      // appSupport: appSupport===true? true :false,
      productEnquiry: "For Afrofit App",
      email:currentUser?.email
    }

    if(payload!=null){
        dispatch(contactusCreate(payload)).then((res:any)=>{
          console.log(res,"res $#$#$#$")
          if(res && res.data && res.ok===true){
            setVisible(true)
          } 
        })
      }

   
    // DEVICE_STORAGE.GET_FCMTOKEN().then((FCMToken)=>{
    //     if(FCMToken && FCMToken!=''){
    //     var isDevice=true
    //       dispatch(LogUserIn({...data,FCMToken,isDevice}));
    //     }
    //     else{
    //       var isDevice=true
    //       dispatch(LogUserIn({...data,isDevice}));
    //     }
    // })
  };

  const clearField = (name: string) => {
    resetField(name);
  };

  const clearError = (name: string) => {
    clearErrors(name);
  };

  const onPressFirstCheckBox=()=>{
    setCheckboxFirst(!checkboxFirst)
  }

  const onPressSecondCheckBox=()=>{
    setCheckboxSecond(!checkboxSecond)
  }

  // const onRadioClick=(value:string)=>{
  //   if(value=="first"){
  //     if(radioboxFirst==true){
  //       setRadioboxSecond(false)
  //     }
  //     else if(radioboxFirst==false){
  //       setRadioboxFirst(true)
  //       setRadioboxSecond(false)
  //     }
  //   } else if(value=="second"){
  //     if(radioboxSecond==true){
  //       setRadioboxFirst(false)
  //     }else if(radioboxSecond==false){
  //       setRadioboxFirst(false)
  //       setRadioboxSecond(true)
  //     }
  //   }
  // }

  const onEmailEnquiriesClick=(value:string)=>{
    if(value=="general"){
      if(generalBox==true){
        setBoothCampBox(false)
        setAppSupport(false)
      }else {
        setGeneralBox(true)
        setBoothCampBox(false)
        setAppSupport(false)
      }
    }
    else if(value=="For 30 days challenge"){
      if(boothcampBox==true){
        setGeneralBox(false)
        setAppSupport(false)
      }
      else{
        setGeneralBox(false)
        setBoothCampBox(true)
        setAppSupport(false)
      }
    }
    else if(value=="appsupport"){
      if(appSupport==true){
        setGeneralBox(false)
        setBoothCampBox(false)
      }
      else{
        setGeneralBox(false)
        setBoothCampBox(false)
        setAppSupport(true)
      }
    }
  }

  return (
    <>
    <AlertModal
        visible={visible}
        body="Your response has been submitted!"
        title="Thank you"
        dismissText="Continue"
        onDismiss={() => navigation.navigate('Profile')}
      />
      <SolidBackground />
      <Screen>
        <Placer top={2} left={3}>
          <IconButton onPress={() => navigation.goBack()} />
        </Placer>
        <Font align="center" variant="h3" color="hilite_purpink">
          Contact Us
        </Font>
        <Spacer h={20} />
       <ContactWrapper>
      <KeyboardAvoidingView>
       <Card padding={15}>
          <Spacer h={10} />
          <StyledInput
            clearField={clearField}
            name="name"
            label="Name"
            control={control}
            clearError={clearError}
            type="regular"
            placeholder={"Your name.."}
            rules={{required:true}}
          />
          <StyledInput
            clearField={clearField}
            name="number"
            label="WhatsApp Contact"
            control={control}
            clearError={clearError}
            type="regular"
            placeholder={"Your contact.."}
            keyboardType={'phone-pad'}
            rules={{required:true,pattern:PHONE_REGX}}
          />
          <Spacer h={5}/>
          <View>
          <Font variant="pb" align="center" color="hilite_purpink" onPress={()=>navigation.navigate("ContactUsScreen")}>
           Please tick the relevant box :
          </Font>
          <Spacer h={5} />
          <CheckBox  onPress={()=>onPressFirstCheckBox()} iconName={checkboxFirst===true ? "check-square" : "square"} title="I am already registered"/>
          <Spacer h={5} />
          <CheckBox  onPress={()=>onPressSecondCheckBox()} iconName={checkboxSecond===true ? "check-square" : "square"} title="I need more information" />
          </View>

          {/* <Spacer h={15} />
          <Font variant="pb" align="center" color="hilite_purpink" onPress={()=>navigation.navigate("ContactUsScreen")}>
           The Product You Enquiring About:
          </Font>
          <RadioBox iconName={"radio-button-on"} color={radioboxFirst===true ? "blue" : "white" } title="Afrofit"  onPress={()=>onRadioClick("first")}/>
          <RadioBox iconName={"radio-button-on"}  color={radioboxSecond===true ? "blue" : "white" } title="30 days both"  onPress={()=>onRadioClick("second")}/> */}


          <Spacer h={15} />
          <Font variant="pb" align="center" color="hilite_purpink" onPress={()=>navigation.navigate("ContactUsScreen")}>
           The Enquiring For:
          </Font>
          <RadioBox iconName={"radio-button-on"}  color={appSupport===true ? "blue" : "white" } title="For Afrofit App"  onPress={()=>onEmailEnquiriesClick("appsupport")}/>
          <RadioBox iconName={"radio-button-on"}  color={boothcampBox===true ? "blue" : "white" } title="For 30 days Challenge"  onPress={()=>onEmailEnquiriesClick("For 30 days challenge")}/>
          <RadioBox iconName={"radio-button-on"} color={generalBox===true ? "blue" : "white" } title="For general Enquiries"  onPress={()=>onEmailEnquiriesClick("general")}/>
          <Spacer h={10} />
          <StyledInput
            placeholder={"Enter your query.."}
            type="regular"
            clearField={clearField}
            name="reason"
            control={control}
            clearError={clearError}
            multiline={true}
            label='Your Query'
            rules={{required:"mes"}}
          />
       </Card>
      </KeyboardAvoidingView>

        <LargeButton onPress={handleSubmit(onSubmit)} title="Submit" />
    </ContactWrapper>
      </Screen>
    </>
  );
};
