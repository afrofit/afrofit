import { StoryType } from "../types/StoryModel";

export const STORY_DATA_EXTRAS_MAP: {
  [key: string]: {
    thumbUrl: number;
    introVideo: string;
    introVideoAlt: string;
    failAudio: number;
  };
} = {
  story001: {
    thumbUrl: require("../assets/images/storythumbs/1.png"),
    introVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/story%2Fvideo%2F1%2Fsample_video.mp4.mp4?alt=media&token=94b18c80-e220-4db8-be7b-fc768afd3bb7",
    introVideoAlt:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/story%2Fvideo%2F1%2Fsample_video.mp4.mp4?alt=media&token=94b18c80-e220-4db8-be7b-fc768afd3bb7",
    failAudio: require("../assets/audio/story/1/story001_fail_audio.mp3"),
  },
  story002: {
    thumbUrl: require("../assets/images/storythumbs/2.png"),
    introVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/story%2Fvideo%2F1%2Fsample_video.mp4.mp4?alt=media&token=94b18c80-e220-4db8-be7b-fc768afd3bb7",
    introVideoAlt:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/story%2Fvideo%2F1%2Fsample_video.mp4.mp4?alt=media&token=94b18c80-e220-4db8-be7b-fc768afd3bb7",
    failAudio: require("../assets/audio/story/2/story002_fail_audio.mp3"),
  },
  story003: {
    thumbUrl: require("../assets/images/storythumbs/3.png"),
    introVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/story%2Fvideo%2F1%2Fsample_video.mp4.mp4?alt=media&token=94b18c80-e220-4db8-be7b-fc768afd3bb7",
    introVideoAlt:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/story%2Fvideo%2F1%2Fsample_video.mp4.mp4?alt=media&token=94b18c80-e220-4db8-be7b-fc768afd3bb7",
    failAudio: require("../assets/audio/story/3/story003_fail_audio.mp3"),
  },
  story004: {
    thumbUrl: require("../assets/images/storythumbs/4.png"),
    introVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/story%2Fvideo%2F1%2Fsample_video.mp4.mp4?alt=media&token=94b18c80-e220-4db8-be7b-fc768afd3bb7",
    introVideoAlt:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/story%2Fvideo%2F1%2Fsample_video.mp4.mp4?alt=media&token=94b18c80-e220-4db8-be7b-fc768afd3bb7",
    failAudio: require("../assets/audio/story/4/story004_fail_audio.mp3"),
  },
};

export const STORY_DATA: StoryType[] = [
  {
    id: "story001",
    title: "Afia's Wedding",
    order: 1,
    color: "hilite_orange",
    description:
      "You must help Afia train to get in shape for her long awaited wedding!",
    difficulty: "easy",
    storySuccessText:
      "So you've made Afia's dream come true! You've not only helped her change her body and habits but you've changed her life!",
  },
  {
    id: "story002",
    title: "Frank's Return",
    order: 2,
    color: "purple_100",
    description:
      "You've got to help Frank train to be at his very best when his girlfriend returns from the reality TV show.",
    difficulty: "medium",
    storySuccessText:
      "Oh ye amazing trainer! Now Frank can focus on his deejaying knowing full well that he's covered! You go fam!",
  },
  {
    id: "story003",
    title: "Eliana's Chance",
    order: 3,
    color: "hilite_purpink",
    description:
      "You've got to help Eliana train to impress Coach Sampson of the Tornadoes so she can get into the team and start her pro football career.",
    difficulty: "hard",
    storySuccessText:
      "You are a dream come true! You've amazed everyone, especially Eliana's family. You're superb! Just super!",
  },
  {
    id: "story004",
    title: "AJ's Big Night",
    order: 4,
    color: "hilite_pink",
    description:
      "You must help AJ train to get into proper shape for his fight against Gregg. He will need to bulk up by 25kg. Good luck!",
    difficulty: "super hard",
    storySuccessText:
      "You are a champ! You are an amazing trainer! Here's to you staying on top! You cleared everyone's doubts! R-E-S-P-E-C-T!",
  },
];
