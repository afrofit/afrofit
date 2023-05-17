import * as React from "react";
import { BackgroundOverlay } from "./styled";
import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";
import { SmallButton } from "../buttons/SmallButton";
import {  AVATAR_IMG, AvatarCard, UPLOAD_IMG, UploadImageView, AvatarImageOpacity, AvatarDataFlatlist} from "../image/styled";
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/reducers/auth/auth.slice";
import { UpdateUserProfile } from "../../../../app/store/reducers/user/thunks/update-user.thunk";


interface Props {
  onDismiss: () => void;
  visible: boolean;
  title: string;
  dismissText?: string;
  AVATAR_DATA:any;
  subtitle:string;
}
export const AvatarModal: React.FC<Props> = ({
  onDismiss,
  visible,
  title,
  subtitle,
  dismissText = "OK",
  AVATAR_DATA,
}) => {

  const dispatch=useDispatch()
  const currentUser = useSelector(selectUser);

  if (!visible) return null;

 
 
const uploadImg=async()=>{
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 4],
    quality: 1,
  });

  if (!result.canceled) {
  var formdata = new FormData();
  formdata.append('isDevice',true as any);
  formdata.append("image",{
    uri: result?.assets[0]?.uri,
    type: 'image/jpeg',
    name: 'image.jpg',
  } as unknown as Blob)
    dispatch(UpdateUserProfile(currentUser?.userId,formdata));
    onDismiss()
  }
}


const selectAvatar = (id:number)=>{
  var formdata = new FormData();
    formdata.append('isDevice',true as any);
    formdata.append("displayPicId", id as any);
    dispatch(UpdateUserProfile(currentUser?.userId,formdata));
    onDismiss()
  }



const Item = ({data}: {data: any}) => (
      <AvatarImageOpacity onPress={()=>selectAvatar(data.id)}>
       <AVATAR_IMG  source={AVATAR_DATA[data.id-1]?.url} />
      </AvatarImageOpacity>
  );

  return (
   <BackgroundOverlay>
        <AvatarCard>
        <Spacer h={5} />
        <Font variant="p" color="hilite_pink" align="center">
          {title}
        </Font>
        <Spacer h={10} />
       <UploadImageView onPress={()=>uploadImg()}>
        <UPLOAD_IMG  source={require("../../../assets/uploadImg.png")}/>
        <Font variant="smb" align="center">
          {subtitle}
        </Font>
       </UploadImageView>
        { AVATAR_DATA ?  <AvatarDataFlatlist
            numColumns={3}
            data={AVATAR_DATA}
            renderItem={({item}) => <Item data={item} />}
            /> : null
          }
        <Spacer h={10} />
        <SmallButton title={dismissText} onPress={onDismiss} />
        <Spacer h={10} />
        </AvatarCard>
      
    </BackgroundOverlay>
  );
};
