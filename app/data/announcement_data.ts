type ProgressDone =
  | "done_50"
  | "done_100"
  | "done_200"
  | "done_500"
  | "done_1000"
  | "done_2000";

type ProgressToDo = "togo_50" | "togo_100" | "togo_200" | "togo_500";

export type DanceProgressType = "start_dancing" | ProgressDone | ProgressToDo;

type AnnouncementDataType = { [key in DanceProgressType]: number };

export const AnnouncementData: AnnouncementDataType = {
  start_dancing: require("../assets/audio/announce/start_dancing.mp3"),
  done_50: require("../assets/audio/announce/done_50.mp3"),
  done_100: require("../assets/audio/announce/done_100.mp3"),
  done_200: require("../assets/audio/announce/done_200.mp3"),
  done_500: require("../assets/audio/announce/done_500.mp3"),
  done_1000: require("../assets/audio/announce/done_1000.mp3"),
  done_2000: require("../assets/audio/announce/done_2000.mp3"),
  togo_50: require("../assets/audio/announce/togo_50.mp3"),
  togo_100: require("../assets/audio/announce/togo_100.mp3"),
  togo_200: require("../assets/audio/announce/togo_200.mp3"),
  togo_500: require("../assets/audio/announce/togo_500.mp3"),
};
