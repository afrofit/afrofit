import { TEMP_VIDEO_LINK } from "../../../app/constants/device";
import { ChapterType } from "../../types/ChapterModel";

export const CHAPTER2_AUDIO_MAP: {
  [key: string]: { url: number; alt_url: number };
} = {
  story002_chapter1: {
    url: require("../../assets/audio/chapters/2/story002_chapter1.mp3"),
    alt_url: require("../../assets/audio/story/2/story002_intro_alt.mp3"),
  },
  story002_chapter2: {
    url: require("../../assets/audio/chapters/2/story002_chapter2.mp3"),
    alt_url: require("../../assets/audio/story/2/story002_intro_alt.mp3"),
  },
  story002_chapter3: {
    url: require("../../assets/audio/chapters/2/story002_chapter3.mp3"),
    alt_url: require("../../assets/audio/story/2/story002_intro_alt.mp3"),
  },
  story002_chapter4: {
    url: require("../../assets/audio/chapters/2/story002_chapter4.mp3"),
    alt_url: require("../../assets/audio/story/2/story002_intro_alt.mp3"),
  },
  story002_chapter5: {
    url: require("../../assets/audio/chapters/2/story002_chapter5.mp3"),
    alt_url: require("../../assets/audio/story/2/story002_intro_alt.mp3"),
  },
  story002_chapter6: {
    url: require("../../assets/audio/chapters/2/story002_chapter6.mp3"),
    alt_url: require("../../assets/audio/story/2/story002_intro_alt.mp3"),
  },
  story002_chapter7: {
    url: require("../../assets/audio/chapters/2/story002_chapter7.mp3"),
    alt_url: require("../../assets/audio/story/2/story002_intro_alt.mp3"),
  },
  story002_chapter8: {
    url: require("../../assets/audio/chapters/2/story002_chapter8.mp3"),
    alt_url: require("../../assets/audio/story/2/story002_intro_alt.mp3"),
  },
  story002_chapter9: {
    url: require("../../assets/audio/chapters/2/story002_chapter9.mp3"),
    alt_url: require("../../assets/audio/story/2/story002_intro_alt.mp3"),
  },
  story002_chapter10: {
    url: require("../../assets/audio/chapters/2/story002_chapter10.mp3"),
    alt_url: require("../../assets/audio/story/2/story002_intro_alt.mp3"),
  },
};

export const CHAPTER_2_DATA: ChapterType[] = [
  {
    id: "story002_chapter1",
    order: 1,
    storyId: "story002",
    targetSteps: 600,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story002_chapter2",
    order: 2,
    storyId: "story002",
    targetSteps: 650,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story002_chapter3",
    order: 3,
    storyId: "story002",
    targetSteps: 700,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story002_chapter4",
    order: 4,
    storyId: "story004",
    targetSteps: 750,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story002_chapter5",
    order: 5,
    storyId: "story002",
    targetSteps: 850,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story002_chapter6",
    order: 6,
    storyId: "story002",
    targetSteps: 950,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story002_chapter7",
    order: 7,
    storyId: "story002",
    targetSteps: 1050,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story002_chapter8",
    order: 8,
    storyId: "story002",
    targetSteps: 1200,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story002_chapter9",
    order: 9,
    storyId: "story002",
    targetSteps: 1200,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story002_chapter10",
    order: 10,
    storyId: "story002",
    targetSteps: 1500,
    videoUrl: TEMP_VIDEO_LINK,
  },
];
