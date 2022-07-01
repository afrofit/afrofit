import * as React from "react";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { millisecondsToSeconds } from "date-fns";
import { BackgroundVideoStyles } from "./styled";

interface Props {
  videoUrl?: string;
  onVideoFinished?: () => void;
  onVideoHalfwayFinished?: () => void;
  onPause?: () => void;
  onPlay?: () => void;
  children?: React.ReactNode;
  loop?: boolean;
}

export const VideoView: React.FC<Props> = ({
  videoUrl,
  onVideoFinished,
  onVideoHalfwayFinished,
  children,
  loop = false,
}) => {
  const [videoLoading, setVideoLoading] = React.useState(false);

  const [videoStatus, setVideoStatus] =
    React.useState<AVPlaybackStatus | null>();

  const videoRef = React.useRef<Video>(null);

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setVideoStatus(status);

      if (
        millisecondsToSeconds(status.positionMillis) ===
        Math.ceil(millisecondsToSeconds(status.durationMillis!) / 2)
      ) {
        return onVideoHalfwayFinished();
      }
      if (status.didJustFinish) {
        return onVideoFinished();
      }
    }
  };
  return (
    <Video
      ref={videoRef}
      source={
        videoUrl
          ? { uri: videoUrl }
          : require("../../../assets/videos/dance_sample.mp4")
      }
      style={BackgroundVideoStyles.video}
      resizeMode={ResizeMode.COVER}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      shouldPlay={true}
      isLooping={loop}
      rate={1}
      onLoadStart={() => setVideoLoading(true)}
      onLoad={() => setVideoLoading(false)}
    ></Video>
  );
};
