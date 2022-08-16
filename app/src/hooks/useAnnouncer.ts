import * as React from "react";
import { Audio } from "expo-av";
import {
  AnnouncementData,
  DanceProgressType,
} from "../../../app/data/announcement_data";

const useAnnouncer = (targetSteps: number, stepCount: number) => {
  const [announcement, setAnnouncement] = React.useState<Audio.Sound | null>();

  const danceProgress: DanceProgressType | null = React.useMemo(() => {
    if (stepCount === 0) {
      return "start_dancing";
    }
    if (stepCount === 50) {
      return "done_50";
    }
    if (stepCount === 100) {
      return "done_100";
    }
    if (stepCount === 200) {
      return "done_200";
    }
    if (stepCount === 500 && targetSteps > 1000) {
      return "done_500";
    }
    if (stepCount === 1000 && targetSteps > 1750) {
      return "done_1000";
    }
    if (stepCount === 2000 && targetSteps > 2000) {
      return "done_2000";
    }
    if (targetSteps - stepCount === 500 && targetSteps > 1500) {
      return "togo_500";
    }
    if (targetSteps - stepCount === 50) {
      return "togo_50";
    }
    if (targetSteps - stepCount === 100) {
      return "togo_100";
    }
    if (targetSteps - stepCount === 200) {
      return "togo_200";
    }
    return null;
  }, [targetSteps, stepCount]);

  React.useEffect(() => {
    if (announcement) {
      announcement.playAsync();
    }

    return () => {
      unloadAnnouncement();
    };
  }, [announcement]);

  const playAnnouncement = async () => {
    if (danceProgress) {
      const { sound } = await Audio.Sound.createAsync(
        AnnouncementData[danceProgress]
      );
      return setAnnouncement(sound);
    }
    return setAnnouncement(null);
  };

  const unloadAnnouncement = async () => {
    await announcement?.unloadAsync();
  };

  return { playAnnouncement, unloadAnnouncement };
};

export default useAnnouncer;
