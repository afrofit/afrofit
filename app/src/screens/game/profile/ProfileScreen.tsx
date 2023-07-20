import * as React from "react";
import { format } from "date-fns";

import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import { LargeButton } from "../../../../src/components/buttons/LargeButton";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../../../../app/store/reducers/auth/thunks/logout.thunk";
import { Avatar } from "../../../../../app/src/components/image/Avatar";
import { selectUser, selectUserIsSubscribed } from "../../../../../app/store/reducers/auth/auth.slice";
import {
  ProfileStatsContainer,
  ProfileStatsListWrapper,
} from "../marathon/components/ProfileStatsItem.styled";
import { ProfileStatsItem } from "../marathon/components/ProfileStatsItem";
import Spacer from "../../../../../app/src/components/elements/Spacer";

import { Positioner, ProfileAvatarOpacity } from "./styled";
import { Card } from "../../../../../app/src/components/cards/Card";
import { RankCard } from "../../../../../app/src/components/cards/RankCard";
import { RankPositioner } from "../../../../../app/src/components/cards/RankCard.styled";
import { selectUserPerformance } from "../../../../../app/store/reducers/activity/activity.slice";
import { RANKS_DATA } from "../../../../../app/data/ranks-data";
import {
  selectCurrentUserRank,
  selectUserScoreIndex,
} from "../../../../../app/store/reducers/marathon/marathon.slice";
import { AVATAR_DATA } from "../../../../../app/src/components/image/AvatarData"
import { AvatarModal } from "../../../../../app/src/components/modals/AvatarModal"
import { SubscriptionStatus } from "../marathon/components/SubscriptionStatus";
import DEVICE_STORAGE from "../../../../../app/api/device-storage"
import { useNavigation } from "@react-navigation/native";


export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const currentUser = useSelector(selectUser);
  const userPerformance = useSelector(selectUserPerformance);
  const userScoreIndex = useSelector(selectUserScoreIndex);
  const currentUserRank = useSelector(selectCurrentUserRank);
  const userIsSubscribed=useSelector(selectUserIsSubscribed)
  const [openModal, setOpenModal] = React.useState<boolean>(false);



  const handleSignUserOut = ():any => {
    DEVICE_STORAGE.GET_FCMTOKEN().then((FCMToken:any)=>{
      var userId : any  = currentUser?.userId
      dispatch(LogOut(FCMToken,userId));
    })
  };

  if (!currentUser || !userPerformance || currentUserRank < 0) return null;

  console.log("Stats", currentUserRank, userScoreIndex);

  return (
    <>
      <SolidBackground />
      <Screen>
        <Card padding={15}>
          <Font variant="p" align="center" color="light">
            Your profile
          </Font>
        </Card>
        <ProfileStatsListWrapper showsVerticalScrollIndicator={false}>

        <Positioner>
          <ProfileAvatarOpacity onPress={()=>setOpenModal(true)}>
          <Avatar size="sm" imageId={currentUser.displayPicId} imageUrl={currentUser?.imageUrl} />
          </ProfileAvatarOpacity>
          <RankPositioner>
            <RankCard rankId={currentUserRank} />
          </RankPositioner>
        </Positioner>
        <Spacer h={20} />
        <Font variant="h3" align="center">
          {currentUser.firstName} {currentUser.lastName}
        </Font>
        <Spacer h={1} />
        <Font variant="pb" align="center" color="hilite_purpink">
          {currentUser.username}
        </Font>
        {/* <Spacer h={8} /> */}
        {/* <Font variant="sm2" align="center" color="lightblue">
          CURRENT RANK: {RANKS_DATA[currentUserRank].name}
        </Font> */}

        <Spacer h={15} />
         <ProfileStatsItem
            description="Calories burned"
            value={userPerformance.caloriesBurned}
          />
          <Spacer h={5} />
          <ProfileStatsItem
            description="Body movements"
            value={userPerformance.danceMoves}
          />
          <Spacer h={5} />
          <ProfileStatsItem
            description="Minutes danced"
            value={userPerformance.minutesDanced / 1000 / 60}
          />
           <Spacer h={5} />
           <SubscriptionStatus description="Subscription status" status={userIsSubscribed} />
           <Spacer h={10} />
          <LargeButton title="Log me out" onPress={handleSignUserOut} />
          <Spacer h={10} />
          <Font variant="sm2" caps align="center" color="lightblue">
            UserId: {currentUser.userId}
          </Font>
          <Spacer h={5} />
          <Font variant="sm2" align="center" color="lightblue">
            Joined on{" "}
            {format(new Date(currentUser.joinDate), "'the' io 'of' MMMM, yyyy")}
          </Font>
          <Font variant="sm3" color="hilite_purpink" align="center" paddingleft={5} underline={"underline"} onPress={()=>navigation.navigate("ContactUsScreen")}>
           Contact us
          </Font>
        </ProfileStatsListWrapper>
      </Screen>
    {openModal ? 
     <AvatarModal
      visible={openModal}
      title="Select your favorite avatar!"
      dismissText="DISMISS"
      onDismiss={() => setOpenModal(false)}
      AVATAR_DATA={AVATAR_DATA}
      subtitle="UPLOADE YOUR PICTURE"
      />:null
   }
    </>
  );
};
