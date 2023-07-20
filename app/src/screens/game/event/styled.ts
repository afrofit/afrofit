import { CHAMFER,COLORS } from "../../../../theme/globals";
import styled from "styled-components/native";
import { Platform, StyleSheet } from "react-native";
import { windowWidth } from "../../../../../app/utils/constant";

export const EventListWrapper = styled.ScrollView`

  `;

  export const EventListImage = styled.Image`
  height: 150px;
  width: ${windowWidth/1.2};
  borderRadius:5
  `;

  export const EventStyledScreen = styled.View`
  flex: 1;
  width: 100%;
  justifyContent:center;

`;
  export const EventPressable=styled.Pressable`

  `

  export const EventDetailsView=styled.View`
  `
  export const EventDescription=styled.View`
  
  `

  export const EventDetailsImage = styled.Image`
  height: 150px;
  width: ${windowWidth/1.3};
  borderRadius:5`

  export const EventClassview=styled.View`
   flexDirection: row;
   justifyContent: space-between;
   paddingHorizontal: 40;
  `

  export const EventClassOpacity=styled.TouchableOpacity`
  
  `

  export const EventClassView=styled.View`
  flexDirection: row;
  `

  export const EventClassFirstView=styled.View`
  width: 30%;
  `

  export const EventClassSecondView=styled.View`
  width: 60%;
  marginHorizontal: 15;
  marginVertical: 10;
  `

  export const EventLink=styled.Pressable`
  flexDirection: row;
  marginVertical:15;
  width:100%
  `

  export const EventLinkView=styled.View`
  marginLeft:7;
  width:60%
  `
  
  export const Button=styled.TouchableOpacity`
  marginLeft:7;
  width:60%
  `

  export const EventClassAntDesignIcon=StyleSheet.create({
    icon:{
      position: "absolute",
      alignSelf: "center",
      marginTop: "80%",
    }
  })
  
  export const EventClassVideoPreview=StyleSheet.create({
    video:{
      alignSelf: "flex-start",
      width: "100%",
      height: 180,
      borderRadius: 15,
    }
  })

  

  export const BackgroundEventVideoStyles = StyleSheet.create({
    video: {
     alignSelf: "center", 
     width: 330,
     height: 200,
     borderRadius:15
    },
  });
  