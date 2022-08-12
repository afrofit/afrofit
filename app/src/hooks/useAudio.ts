import * as React from "react";
import { Audio } from "expo-av";

const useAudio = (url: string | number) => {
  const [audio, setAudio] = React.useState<Audio.Sound | null>(null);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      typeof url === "string" ? { uri: url } : url
    );
    setAudio(sound);
    sound.playAsync();
  };

  const handleUnloadSound = async () => {
    await audio?.unloadAsync();
  };

  const handlePlayback = async () => {
    loadSound();
  };

  return { handleUnloadSound, handlePlayback };
};

export default useAudio;
