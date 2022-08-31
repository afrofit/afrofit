import * as React from "react";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { millisecondsToSeconds } from "date-fns";
import { BackgroundVideoStyles } from "./styled";

interface Props {
  videoUrl: string;
  onVideoFinished: () => void;
  onVideoHalfwayFinished: () => void;
  onPause?: () => void;
  onPlay?: () => void;
  loop?: boolean;
}

type Ref = any;

export const VideoViewExtended = React.forwardRef<Ref, Props>(
  (
    { videoUrl, onVideoFinished, onVideoHalfwayFinished, loop = false },
    ref
  ) => {
    const [videoLoading, setVideoLoading] = React.useState(false);

    const [videoStatus, setVideoStatus] =
      React.useState<AVPlaybackStatus | null>();

    const videoRef = React.useRef<Video>(null);

    React.useImperativeHandle(ref, () => ({
      async pauseVideo() {
        await videoRef?.current?.pauseAsync();
      },
      async playVideo() {
        await videoRef?.current?.playAsync();
      },
    }));

    React.useEffect(() => {
      return () => {
        unloadVideo().then(() => null);
      };
    }, []);

    const unloadVideo = async () => {
      await videoRef?.current?.stopAsync();
      return videoRef?.current?.unloadAsync();
    };

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
        source={{ uri: videoUrl }}
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
  }
);
