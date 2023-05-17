import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Index } from "./app/Index";
import { Provider } from "react-redux";
import STORE from "./app/store/store";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Alert, Platform } from "react-native";
import * as Linking from 'expo-linking';
import DEVICE_STORAGE from "./app/api/device-storage"



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});




async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync( );
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {   
      Alert.alert(
        'Afrofit',
        'Please allow notification permission to get notification for afrofit from settings',
        [
          {
            text: 'Ok',
            onPress: () => openSettingsLink(),
          },
          {
            text: 'Cancel',
          },
        ],
      );
      return;
    }
    console.log(finalStatus,"finalStatus"),
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token)
  } else {
    Alert.alert(
      'Afrofit',
      'Must use physical device for Notifications',
      [
        {
          text: 'Ok',
        },
      ],
    );
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      vibrationPattern: [0, 250, 250, 250],
      importance: Notifications.AndroidImportance.MAX,
      lightColor: '#FF231F7C',
    });
  }

  return token;
}


const openSettingsLink=()=>{
  Linking.openSettings()
}

const App = () => {  
  const [expoPushToken, setExpoPushToken] = React.useState('');
  const [notification, setNotification] = React.useState(false);
  const notificationListener:any = React.useRef();
  const responseListener:any = React.useRef();
  
React.useEffect(()=>{
  registerForPushNotificationsAsync().then((token:any)=>{
    if(token && token!= ''){
      DEVICE_STORAGE.STORE_FCMTOKEN(token)
      setExpoPushToken(token)
    }
  })
  notificationListener.current = Notifications.addNotificationReceivedListener((notification:any) => {
    console.log(notification,"notification msg")
    setNotification(notification);
  
  });

  responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    console.log(response);
  });

  return () => {
    Notifications.removeNotificationSubscription(notificationListener.current);
    Notifications.removeNotificationSubscription(responseListener.current);
  };
},[])
 
  return (    
    <Provider store={STORE}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
